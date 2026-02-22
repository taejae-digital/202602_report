#!/usr/bin/env python3
"""Generate scenario images: large researcher photos in a row, no speech bubbles."""

from PIL import Image, ImageDraw, ImageFont
import os

BASE = os.path.dirname(os.path.abspath(__file__))
RESEARCHERS_DIR = os.path.join(BASE, 'public', 'images', 'researchers')
OUTPUT_DIR = os.path.join(BASE, 'public', 'images', 'scenarios')

W, H = 1400, 500
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

def circle_photo(path, size=160):
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
    bd.ellipse((1, 1, size-2, size-2), outline=(200, 210, 230, 200), width=3)
    return result


def generate(config):
    filename = config['filename']
    title = config['title']
    people = config['people']

    print(f"Generating {filename}...")

    bg = gradient_bg(W, H, (15, 25, 48), (25, 38, 62))
    img = bg.convert('RGBA')
    draw = ImageDraw.Draw(img)

    # Title
    title_f = font(28, bold=True)
    title_bbox = draw.textbbox((0, 0), title, font=title_f)
    title_w = title_bbox[2] - title_bbox[0]
    draw.text(((W - title_w) // 2, 30), title, font=title_f, fill=(220, 230, 245))

    # Subtitle
    if 'subtitle' in config:
        sub_f = font(16, bold=False)
        sub_bbox = draw.textbbox((0, 0), config['subtitle'], font=sub_f)
        sub_w = sub_bbox[2] - sub_bbox[0]
        draw.text(((W - sub_w) // 2, 68), config['subtitle'],
                  font=sub_f, fill=(140, 160, 190))

    # Photos in a row, centered
    photo_size = 160
    name_f = font(16, bold=True)
    name_en_f = font(13, bold=False)
    role_f = font(13, bold=False)

    n = len(people)
    total_w = n * photo_size + (n - 1) * 80
    start_x = (W - total_w) // 2
    photo_y = 110

    for i, p in enumerate(people):
        cx = start_x + i * (photo_size + 80) + photo_size // 2
        px = cx - photo_size // 2

        # Photo
        photo = circle_photo(os.path.join(RESEARCHERS_DIR, p['photo']), photo_size)
        img.paste(photo, (px, photo_y), photo)

        # Name (Korean)
        bbox = draw.textbbox((0, 0), p['name_kr'], font=name_f)
        nw = bbox[2] - bbox[0]
        draw.text((cx - nw // 2, photo_y + photo_size + 12),
                  p['name_kr'], font=name_f, fill=(210, 220, 240))

        # Name (English)
        bbox2 = draw.textbbox((0, 0), p['name_en'], font=name_en_f)
        nw2 = bbox2[2] - bbox2[0]
        draw.text((cx - nw2 // 2, photo_y + photo_size + 34),
                  p['name_en'], font=name_en_f, fill=(150, 165, 185))

        # Role/field
        if 'role' in p:
            bbox3 = draw.textbbox((0, 0), p['role'], font=role_f)
            nw3 = bbox3[2] - bbox3[0]
            draw.text((cx - nw3 // 2, photo_y + photo_size + 54),
                      p['role'], font=role_f, fill=(120, 140, 170))

    out = img.convert('RGB')
    out_path = os.path.join(OUTPUT_DIR, filename)
    out.save(out_path, 'JPEG', quality=92)
    print(f"  -> {out_path} ({os.path.getsize(out_path)//1024}KB)")


SCENARIOS = [
    {
        'filename': '2027-multiagent.jpg',
        'title': '2027: 멀티에이전트 AI 시대',
        'subtitle': 'AI 에이전트가 서로 협상하고, 인간의 통제 밖에서 작동하기 시작한다',
        'people': [
            {
                'photo': 'suleyman.jpg', 'name_kr': '무스타파 술레이만',
                'name_en': 'Mustafa Suleyman', 'role': 'Microsoft AI CEO',
            },
            {
                'photo': 'hinton.jpg', 'name_kr': '제프리 힌튼',
                'name_en': 'Geoffrey Hinton', 'role': '노벨 물리학상 2024',
            },
            {
                'photo': 'russell.jpg', 'name_kr': '스튜어트 러셀',
                'name_en': 'Stuart Russell', 'role': 'AI 안전 연구',
            },
            {
                'photo': 'bengio.jpg', 'name_kr': '요슈아 벤지오',
                'name_en': 'Yoshua Bengio', 'role': '튜링상 수상자',
            },
        ],
    },
    {
        'filename': '2030-humanoid.jpg',
        'title': '2030: 휴머노이드 로봇 대규모 배치',
        'subtitle': '노동 대체가 본격화되고, 소득·지위·존엄의 위기가 동시에 찾아온다',
        'people': [
            {
                'photo': 'harari.jpg', 'name_kr': '유발 하라리',
                'name_en': 'Yuval Harari', 'role': '역사학·미래학',
            },
            {
                'photo': 'standing.jpg', 'name_kr': '가이 스탠딩',
                'name_en': 'Guy Standing', 'role': '프레카리아트 연구',
            },
            {
                'photo': 'piketty.jpg', 'name_kr': '토마 피케티',
                'name_en': 'Thomas Piketty', 'role': '불평등 경제학',
            },
            {
                'photo': 'acemoglu.jpg', 'name_kr': '대런 아세모글루',
                'name_en': 'Daron Acemoglu', 'role': '노벨 경제학상 2024',
            },
        ],
    },
]

if __name__ == '__main__':
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for c in SCENARIOS:
        generate(c)
    print("\nDone!")
