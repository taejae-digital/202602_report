#!/usr/bin/env python3
"""Generate professional photo-composite images: 4 speakers in 2x2 grid."""

from PIL import Image, ImageDraw, ImageFont
import os

BASE = os.path.dirname(os.path.abspath(__file__))
RESEARCHERS_DIR = os.path.join(BASE, 'public', 'images', 'researchers')
OUTPUT_DIR = os.path.join(BASE, 'public', 'images', 'comics')

W, H = 1600, 750
FONT_PATH = '/System/Library/Fonts/AppleSDGothicNeo.ttc'

def font(size, bold=False):
    idx = 3 if bold else 0
    return ImageFont.truetype(FONT_PATH, size, index=idx)

def gradient_bg(w, h, c1, c2):
    img = Image.new('RGB', (w, h))
    d = ImageDraw.Draw(img)
    for y in range(h):
        r = y / h
        d.line([(0, y), (w, y)], fill=tuple(
            int(c1[i] + (c2[i] - c1[i]) * r) for i in range(3)))
    return img

def circle_photo(path, size=90):
    try:
        img = Image.open(path).convert('RGBA')
    except Exception:
        img = Image.new('RGBA', (size, size), (60, 80, 100, 255))
    w, h = img.size
    s = min(w, h)
    img = img.crop(((w-s)//2, (h-s)//2, (w+s)//2, (h+s)//2))
    img = img.resize((size, size), Image.LANCZOS)
    mask = Image.new('L', (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size-1, size-1), fill=255)
    result = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    result.paste(img, (0, 0), mask)
    bd = ImageDraw.Draw(result)
    bd.ellipse((1, 1, size-2, size-2), outline=(220, 225, 235, 200), width=2)
    return result

def measure_text_block(draw, lines, fnt):
    max_w = 0
    total_h = 0
    line_heights = []
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=fnt)
        w = bbox[2] - bbox[0]
        h = bbox[3] - bbox[1]
        max_w = max(max_w, w)
        line_heights.append(h)
        total_h += h
    return max_w, total_h, line_heights


def generate(config):
    sec_id = config['id']
    speakers = config['speakers']

    print(f"Generating {sec_id} (2x2)...")

    bg = gradient_bg(W, H, (15, 25, 48), (25, 38, 62))
    img = bg.convert('RGBA')
    draw = ImageDraw.Draw(img)

    photo_size = 150
    bubble_font = font(28, bold=True)
    name_font = font(18, bold=False)
    name_en_font = font(14, bold=False)
    attr_font = font(16, bold=False)

    line_spacing = 8
    padding_x, padding_y = 30, 22
    bubble_fill = (240, 243, 250, 225)
    bubble_outline = (160, 175, 200, 140)
    text_color = (30, 40, 60)

    # 2x2 grid layout
    cell_w = W // 2
    cell_h = H // 2
    margin_x = 50
    margin_y = 25

    positions = [(0, 0), (1, 0), (0, 1), (1, 1)]  # (col, row)

    for idx, sp in enumerate(speakers[:4]):
        col, row = positions[idx]
        cx0 = col * cell_w + margin_x
        cy0 = row * cell_h + margin_y

        # Photo position
        photo_x = cx0
        photo_y = cy0 + (cell_h - 2 * margin_y - photo_size) // 2

        # Measure bubble
        lines = sp['lines']
        tw, th, lhs = measure_text_block(draw, lines, bubble_font)
        bubble_w = tw + padding_x * 2
        bubble_h = th + line_spacing * (len(lines) - 1) + padding_y * 2
        if 'attr' in sp:
            attr_bbox = draw.textbbox((0, 0), sp['attr'], font=attr_font)
            attr_w = attr_bbox[2] - attr_bbox[0]
            bubble_w = max(bubble_w, attr_w + padding_x * 2)
            bubble_h += 24

        # Bubble position (right of photo)
        bx0 = photo_x + photo_size + 25
        by0 = photo_y + (photo_size - bubble_h) // 2
        bx1 = bx0 + bubble_w
        by1 = by0 + bubble_h

        # Clamp bubble to cell
        max_bx1 = (col + 1) * cell_w - 15
        if bx1 > max_bx1:
            bx1 = max_bx1
            bx0 = min(bx0, bx1 - 100)

        # Draw bubble
        draw.rounded_rectangle((bx0, by0, bx1, by1), radius=14,
                                fill=bubble_fill, outline=bubble_outline, width=1)

        # Tail pointing to photo
        tx, ty = photo_x + photo_size + 6, photo_y + photo_size // 2
        tail_w = 8
        mid_y = (by0 + by1) // 2
        pts = [(bx0 + 2, mid_y - tail_w), (bx0 + 2, mid_y + tail_w), (tx, ty)]
        draw.polygon(pts, fill=bubble_fill)
        draw.line([(bx0 + 1, mid_y - tail_w), (tx, ty)], fill=bubble_outline, width=1)
        draw.line([(tx, ty), (bx0 + 1, mid_y + tail_w)], fill=bubble_outline, width=1)

        # Text inside bubble
        text_x = bx0 + padding_x
        text_y = by0 + padding_y
        for j, line in enumerate(lines):
            draw.text((text_x, text_y), line, font=bubble_font, fill=text_color)
            text_y += lhs[j] + line_spacing

        if 'attr' in sp:
            draw.text((text_x, text_y + 2), sp['attr'], font=attr_font,
                       fill=(100, 115, 140))

        # Place photo
        photo = circle_photo(os.path.join(RESEARCHERS_DIR, sp['photo']), photo_size)
        img.paste(photo, (photo_x, photo_y), photo)

        # Name below photo
        cx = photo_x + photo_size // 2
        ny = photo_y + photo_size + 3
        bbox = draw.textbbox((0, 0), sp['name_kr'], font=name_font)
        draw.text((cx - (bbox[2]-bbox[0])//2, ny), sp['name_kr'],
                   font=name_font, fill=(200, 210, 230))
        bbox2 = draw.textbbox((0, 0), sp['name_en'], font=name_en_font)
        draw.text((cx - (bbox2[2]-bbox2[0])//2, ny + 15), sp['name_en'],
                   font=name_en_font, fill=(140, 155, 175))

    out = img.convert('RGB')
    out_path = os.path.join(OUTPUT_DIR, f'{sec_id.replace("sec-","sec")}-dialogue.jpg')
    out.save(out_path, 'JPEG', quality=92)
    print(f"  -> {out_path} ({os.path.getsize(out_path)//1024}KB)")


SECTIONS = [
    {
        'id': 'sec-1',
        'speakers': [
            {
                'photo': 'perez.jpg', 'name_kr': '카를로타 페레즈', 'name_en': 'Carlota Perez',
                'lines': ['기술의 혜택이 사회 전체로 퍼진 황금기는', '제도적 재편에 성공한 경우에만 도달했다.'],
                'attr': '— Technological Revolutions (2002)',
            },
            {
                'photo': 'acemoglu.jpg', 'name_kr': '대런 아세모글루', 'name_en': 'Daron Acemoglu',
                'lines': ['기술 발전이 자동으로 번영을 가져오지 않는다.', '제도적 선택이 결과를 결정한다.'],
                'attr': '— Power and Progress (2023)',
            },
            {
                'photo': 'johnson.jpg', 'name_kr': '사이먼 존슨', 'name_en': 'Simon Johnson',
                'lines': ['기술은 사회적 선택에 따라', '진보가 될 수도, 재앙이 될 수도 있다.'],
                'attr': '— Power and Progress (2023)',
            },
            {
                'photo': 'zuboff.jpg', 'name_kr': '쇼샤나 주보프', 'name_en': 'Shoshana Zuboff',
                'lines': ['인간의 경험이 데이터라는 원료로', '전환되는 구조를 멈춰야 한다.'],
                'attr': '— Surveillance Capitalism (2019)',
            },
        ],
    },
    {
        'id': 'sec-2',
        'speakers': [
            {
                'photo': 'smith.jpg', 'name_kr': '애덤 스미스', 'name_en': 'Adam Smith',
                'lines': ['각자가 자기 이익을 추구하는 과정에서', '의도하지 않은 사회적 질서가 생겨난다.'],
                'attr': '— The Wealth of Nations (1776)',
            },
            {
                'photo': 'polanyi.jpg', 'name_kr': '칼 폴라니', 'name_en': 'Karl Polanyi',
                'lines': ['시장이 사회를 삼키려 하면,', '사회가 자기보호 운동으로 반격한다.'],
                'attr': '— The Great Transformation (1944)',
            },
            {
                'photo': 'eucken.jpg', 'name_kr': '발터 오이켄', 'name_en': 'Walter Eucken',
                'lines': ['경제 질서와 정치 질서는', '서로 맞물려 있다.'],
                'attr': '— Grundsätze (1952)',
            },
            {
                'photo': 'sarewitz.jpg', 'name_kr': '대니얼 사레위츠', 'name_en': 'Daniel Sarewitz',
                'lines': ['기술 혁신은 민주적 숙의 없이는', '공공선으로 이어지지 않는다.'],
                'attr': '— Frontiers of Illusion (1996)',
            },
        ],
    },
    {
        'id': 'sec-3',
        'speakers': [
            {
                'photo': 'bengio.jpg', 'name_kr': '요슈아 벤지오', 'name_en': 'Yoshua Bengio',
                'lines': ['AI는 통제를 벗어날 가능성이 있는', '최초의 범용 기술이다.'],
            },
            {
                'photo': 'hinton.jpg', 'name_kr': '제프리 힌튼', 'name_en': 'Geoffrey Hinton',
                'lines': ['AI가 인간보다 더 많이 알게 될 때,', '통제력을 유지할 수 있는가?'],
                'attr': '— Nobel Lecture (2024)',
            },
            {
                'photo': 'russell.jpg', 'name_kr': '스튜어트 러셀', 'name_en': 'Stuart Russell',
                'lines': ['인간의 목표와 어긋나는 AI의 행동을', '사후에 바로잡기 어렵다.'],
                'attr': '— Human Compatible (2019)',
            },
            {
                'photo': 'suleyman.jpg', 'name_kr': '무스타파 술레이만', 'name_en': 'Mustafa Suleyman',
                'lines': ['일단 널리 퍼진 기술을', '다시 통제하기 어려울 수 있다.'],
                'attr': '— The Coming Wave (2023)',
            },
        ],
    },
    {
        'id': 'sec-4',
        'speakers': [
            {
                'photo': 'crawford.jpg', 'name_kr': '케이트 크로포드', 'name_en': 'Kate Crawford',
                'lines': ['AI는 지능이 아니라', '권력의 시스템이다.'],
                'attr': '— Atlas of AI (2021)',
            },
            {
                'photo': 'nussbaum.jpg', 'name_kr': '마사 누스바움', 'name_en': 'Martha Nussbaum',
                'lines': ['인간다운 삶을 위한', '실질적 조건을 정의해야 한다.'],
                'attr': '— Creating Capabilities (2011)',
            },
            {
                'photo': 'floridi.jpg', 'name_kr': '루치아노 플로리디', 'name_en': 'Luciano Floridi',
                'lines': ['데이터 권리, 설명 가능성,', '인간 심의에 대한 권리가 필요하다.'],
                'attr': '— The Ethics of AI (2023)',
            },
            {
                'photo': 'standing.jpg', 'name_kr': '가이 스탠딩', 'name_en': 'Guy Standing',
                'lines': ['프레카리아트의 권리를', '제도적으로 보장해야 한다.'],
                'attr': '— The Precariat (2011)',
            },
        ],
    },
    {
        'id': 'sec-5',
        'speakers': [
            {
                'photo': 'sen.jpg', 'name_kr': '아마르티아 센', 'name_en': 'Amartya Sen',
                'lines': ['인간의 가치를 소득이 아니라', "'할 수 있고 될 수 있는 것'으로 측정하라."],
                'attr': '— Development as Freedom (1999)',
            },
            {
                'photo': 'sandel.jpg', 'name_kr': '마이클 샌델', 'name_en': 'Michael Sandel',
                'lines': ['생산성이 아니라 공동선에 대한', '기여가 가치의 기준이다.'],
                'attr': '— The Tyranny of Merit (2020)',
            },
            {
                'photo': 'harari.jpg', 'name_kr': '유발 하라리', 'name_en': 'Yuval Harari',
                'lines': ['AI가 노동을 대체하면, 일자리를 잃은', '사람들의 지위가 위협받는다.'],
                'attr': '— Homo Deus (2017)',
            },
            {
                'photo': 'piketty.jpg', 'name_kr': '토마 피케티', 'name_en': 'Thomas Piketty',
                'lines': ['자본 수익률이 성장률을 초과하면', '불평등은 구조적으로 심화된다.'],
                'attr': '— Capital (2014)',
            },
        ],
    },
]

if __name__ == '__main__':
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for c in SECTIONS:
        generate(c)
    print("\nDone!")
