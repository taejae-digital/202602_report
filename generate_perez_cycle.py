#!/usr/bin/env python3
"""Generate Perez cycle infographic with Path A (disruption) and Path B (proactive design)."""

from PIL import Image, ImageDraw, ImageFont
import os, math

BASE = os.path.dirname(os.path.abspath(__file__))
RESEARCHERS_DIR = os.path.join(BASE, 'public', 'images', 'researchers')
OUTPUT = os.path.join(BASE, 'public', 'images', 'perez-cycle-infographic.jpg')

W, H = 1400, 750
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

def main():
    print("Generating Perez cycle infographic (A/B paths)...")

    bg = gradient_bg(W, H, (15, 25, 48), (25, 38, 62))
    img = bg.convert('RGBA')
    draw = ImageDraw.Draw(img)

    # Title + Perez photo
    title_f = font(24, bold=True)
    draw.text((170, 28), '기술 혁명의 사이클 — 두 가지 경로', font=title_f, fill=(220, 230, 245))
    subtitle_f = font(14, bold=False)
    draw.text((170, 58), 'Carlota Perez, Technological Revolutions and Financial Capital (2002)',
              font=subtitle_f, fill=(130, 150, 180))

    photo = circle_photo(os.path.join(RESEARCHERS_DIR, 'perez.jpg'), 80)
    img.paste(photo, (60, 20), photo)

    # Curve parameters
    margin_l = 140
    margin_r = 80
    curve_w = W - margin_l - margin_r
    curve_top = 120      # highest point (golden age)
    curve_bottom = 560   # lowest point (start)

    # Shared initial S-curve (up to turning point at ~0.50)
    # Then splits into Path A (drop then higher rise) and Path B (smooth ascent)
    turning_t = 0.48
    turning_x = margin_l + turning_t * curve_w
    # Common curve: sigmoid up to turning point
    common_points = []
    n_common = 100
    for i in range(n_common + 1):
        t = i / n_common * turning_t
        x = margin_l + t * curve_w
        s = 1 / (1 + math.exp(-12 * (t / turning_t - 0.5)))
        # Only rise to ~60% height at turning point
        y = curve_bottom - s * (curve_bottom - curve_top) * 0.55
        common_points.append((x, y))

    turning_y = common_points[-1][1]

    # --- Path A: Deep crash then rises higher than B (single smooth curve) ---
    path_a_points = []
    n_path = 80
    drop_depth = 200   # pixels to drop below turning point
    peak_rise = turning_y - (curve_top - 30)  # pixels to rise above turning
    for i in range(n_path + 1):
        t = i / n_path  # 0 to 1 within path A
        x = turning_x + t * (curve_w * (1 - turning_t))
        # Gaussian dip centered at t=0.25 + sigmoid rise to peak
        dip = math.exp(-((t - 0.25) / 0.13) ** 2)
        rise = 1 / (1 + math.exp(-8 * (t - 0.55)))
        y = turning_y + drop_depth * dip - peak_rise * rise
        path_a_points.append((x, y))

    # --- Path B: Smooth proactive ascent (slightly lower peak) ---
    path_b_points = []
    for i in range(n_path + 1):
        t = i / n_path
        x = turning_x + t * (curve_w * (1 - turning_t))
        # Smooth sigmoid rise
        s = 1 / (1 + math.exp(-8 * (t - 0.4)))
        target_y = curve_top + 20  # slightly lower than A's peak
        y = turning_y - (turning_y - target_y) * s
        path_b_points.append((x, y))

    # --- Draw curves ---
    # Common path (blue -> red gradient)
    for i in range(len(common_points) - 1):
        t = i / len(common_points)
        if t < 0.5:
            color = (80, 140, 220)  # blue
        else:
            color = (200, 100, 80)  # transitioning to red
        draw.line([common_points[i], common_points[i+1]], fill=color, width=4)

    # Path A (red -> green gradient)
    for i in range(len(path_a_points) - 1):
        t = i / len(path_a_points)
        r = int(220 - t * 120)
        g = int(80 + t * 120)
        b = int(80 + t * 50)
        draw.line([path_a_points[i], path_a_points[i+1]], fill=(r, g, b), width=4)

    # Path B (gold -> green), smooth
    for i in range(len(path_b_points) - 1):
        t = i / len(path_b_points)
        # Gold to green
        r = int(220 - t * 140)
        g = int(180 + t * 20)
        b = int(60 + t * 60)
        draw.line([path_b_points[i], path_b_points[i+1]], fill=(r, g, b), width=4)

    # --- Phase dots and labels ---
    label_f = font(20, bold=True)
    label_en_f = font(12, bold=False)
    desc_f = font(13, bold=False)

    # 1. Irruption dot (early on common curve)
    irr_idx = 20
    ix, iy = common_points[irr_idx]
    draw.ellipse((ix-7, iy-7, ix+7, iy+7), fill=(80, 140, 220), outline='white', width=2)
    draw.text((ix - 35, iy + 18), '기술 폭발', font=label_f, fill=(80, 140, 220))
    draw.text((ix - 20, iy + 42), 'Irruption', font=label_en_f, fill=(130, 155, 185))
    draw.text((ix - 55, iy + 58), '새 기술 등장, 생산력 폭발', font=desc_f, fill=(160, 175, 195))

    # 2. Frenzy dot (later on common curve)
    frenzy_idx = 70
    fx, fy = common_points[frenzy_idx]
    draw.ellipse((fx-7, fy-7, fx+7, fy+7), fill=(220, 100, 80), outline='white', width=2)
    draw.text((fx - 25, fy - 65), '과열', font=label_f, fill=(220, 100, 80))
    status_f = font(13, bold=True)
    draw.text((fx + 20, fy - 63), '← 현재', font=status_f, fill=(255, 80, 80))
    draw.text((fx - 27, fy - 42), 'Frenzy', font=label_en_f, fill=(130, 155, 185))
    draw.text((fx - 65, fy - 24), '투기, 양극화, 제도 미비', font=desc_f, fill=(160, 175, 195))

    # 3. Turning point dot
    tx, ty = common_points[-1]
    draw.ellipse((tx-8, ty-8, tx+8, ty+8), fill=(220, 180, 60), outline='white', width=2)
    draw.text((tx - 30, ty - 55), '전환점', font=label_f, fill=(220, 180, 60))
    draw.text((tx - 38, ty - 33), 'Turning Point', font=label_en_f, fill=(130, 155, 185))

    # --- Path labels ---
    path_label_f = font(18, bold=True)
    path_desc_f = font(13, bold=False)

    # Path A label (at the bottom of the crash)
    a_mid_idx = 22  # near the bottom of the dip
    ax, ay = path_a_points[a_mid_idx]
    draw.text((ax - 30, ay + 18), '경로 A: 격변', font=path_label_f, fill=(220, 80, 80))
    draw.text((ax - 30, ay + 42), '파괴 → 사후 재편', font=path_desc_f, fill=(180, 130, 130))

    # Path A golden age label (at the peak, higher)
    a_end_idx = len(path_a_points) - 5
    aex, aey = path_a_points[a_end_idx]
    draw.ellipse((aex-7, aey-7, aex+7, aey+7), fill=(100, 200, 130), outline='white', width=2)
    draw.text((aex - 120, aey - 40), '황금기 (대가 큼)', font=path_label_f, fill=(100, 200, 130))

    # Path B label (along the smooth rise, above the line)
    b_mid_idx = 35
    bx, by = path_b_points[b_mid_idx]
    draw.text((bx - 30, by - 50), '경로 B: 선제적 설계', font=path_label_f, fill=(200, 180, 80))
    draw.text((bx - 30, by - 26), '입법, 대타협, 조건 설계', font=path_desc_f, fill=(170, 160, 110))

    # Path B golden age label
    b_end_idx = len(path_b_points) - 5
    bex, bey = path_b_points[b_end_idx]
    draw.ellipse((bex-7, bey-7, bex+7, bey+7), fill=(80, 190, 120), outline='white', width=2)
    draw.text((bex - 140, bey + 12), '황금기 (비용 절감)', font=path_label_f, fill=(80, 190, 120))

    # --- Time arrow at bottom ---
    arrow_f = font(12, bold=False)
    draw.text((margin_l - 10, H - 75), '시간 →', font=arrow_f, fill=(120, 140, 170))

    # Tech revolution examples
    rev_font = font(11, bold=False)
    revolutions = [
        ('1차 산업혁명', '1771'),
        ('증기·철도', '1829'),
        ('철강·전기', '1875'),
        ('석유·자동차', '1908'),
        ('정보·통신', '1971'),
        ('AI', '2020s'),
    ]
    rev_y = H - 50
    rev_gap = curve_w // len(revolutions)
    for i, (name, year) in enumerate(revolutions):
        rx = margin_l + i * rev_gap + rev_gap // 2
        text = f'{name} ({year})'
        bbox = draw.textbbox((0, 0), text, font=rev_font)
        tw = bbox[2] - bbox[0]
        draw.text((rx - tw // 2, rev_y), text, font=rev_font, fill=(100, 120, 150))

    # Thin horizontal baseline
    draw.line([(margin_l, curve_bottom + 20), (W - margin_r, curve_bottom + 20)],
              fill=(60, 75, 100), width=1)

    # Legend box (bottom right)
    legend_f = font(12, bold=False)
    lx, ly = W - 320, H - 100
    # A
    draw.line([(lx, ly + 6), (lx + 30, ly + 6)], fill=(220, 80, 80), width=3)
    draw.text((lx + 38, ly), '경로 A — 격변 후 황금기', font=legend_f, fill=(180, 150, 150))
    # B
    draw.line([(lx, ly + 26), (lx + 30, ly + 26)], fill=(200, 180, 80), width=3)
    draw.text((lx + 38, ly + 20), '경로 B — 선제적 설계로 황금기', font=legend_f, fill=(170, 165, 130))

    # Save
    out = img.convert('RGB')
    out.save(OUTPUT, 'JPEG', quality=92)
    print(f"  -> {OUTPUT} ({os.path.getsize(OUTPUT)//1024}KB)")

if __name__ == '__main__':
    main()
