# Design System Inspired by NẮNG V

> Auto-extracted from `https://nang.liveshow.greenfield.edu.vn/` on 2026-06-26

## 1. Visual Theme & Atmosphere

Friendly, approachable design with rounded shapes and generous whitespace.

The hero section leads with "Thời gian: Thứ 7 ngày 11/04/2026Địa điểm: Greenfield School Ecopark".

**Key Characteristics:**
- Montserrat as the heading font
- Montserrat as the body font for all running text
- Light/white background (#ffffff) as the primary canvas
- Primary accent `#f54126` used for CTAs and brand highlights
- 1 shadow level(s) detected — standard shadows
- Rounded corners (100px+) creating a friendly, approachable feel
- Tags: light, rounded, colorful, compact, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#f54126`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Secondary Accent** (`#1d75cd`) · `--color-secondary`: Secondary brand, hover states, complementary highlights.
- **Background** (`#ffffff`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#1d75cd`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#000000`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#666666`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#f2f9ff`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#bbddff` | `--palette-1` | block | large | text-dark |
| 2 | `#1d75cd` | `--palette-2` | block | large | text-light |
| 3 | `#f2f9ff` | `--palette-3` | button | medium | text-dark |
| 4 | `#f54126` | `--palette-4` | button | medium | text-light |
| 5 | `#ffde59` | `--palette-5` | badge | small | text-dark |
| 6 | `#00bf63` | `--palette-6` | badge | small | text-light |

## 3. Typography Rules

- **Heading Font:** `Montserrat`, sans-serif
- **Body Font:** `Montserrat`, sans-serif

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H2 | Montserrat | 14px | 400 | 22.4px | normal |
| Body | Montserrat | 14px | 700 | 22.4px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `48px` | headings |
| H1 | `40px` | headings |
| H2 | `36px` | headings |
| H3 | `30px` | headings |
| H4 | `24px` | headings |
| Body L | `22px` | body / supporting text |
| Body | `20px` | body / supporting text |
| Small | `16px` | body / supporting text |
| XS | `14px` | body / supporting text |
| Caption | `13px` | body / supporting text |

## 4. Component Stylings

No prominent button or card components detected. Use the color palette and typography rules above to create components consistent with the brand.

## 5. Layout Principles

- **Base spacing unit:** `8px` — use multiples (16px, 24px, 32px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `8px` | element |
| spacing-2 | `63px` | section |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-pill | `100px` | pill |
| radius-button | `10px` | button |
| radius-button | `15px` | button |

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| High | `rgb(0, 0, 0) 0px 12px 20px -15px` | Modals, floating elements |


## 7. Do's and Don'ts

### Do
- Use `#ffffff` as the primary background color
- Use `Montserrat` for all headings and `Montserrat` for body text
- Use `#f54126` as the single dominant accent/CTA color
- Maintain `8px` as the base spacing unit — all gaps should be multiples
- Use rounded corners (`100px`+) consistently for all interactive elements
- Embrace bold color combinations — playful energy is the point
- Apply the shadow system for elevation — use the extracted shadow values

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute Montserrat/Montserrat with generic alternatives
- Don't use irregular spacing — stick to 8px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't use oversized hero text — this brand uses restrained type
- Don't use pure black (#000000) for text — use `#000000` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 8px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #ffffff
Text:        #000000
Accent:      #f54126
Secondary:   #1d75cd
Border:      #f2f9ff
```

### Example Prompts

1. "Build a hero section with a `#ffffff` background, `Montserrat` heading in `#000000`, and a `#f54126` CTA button."
2. "Create a pricing card using background `#1d75cd`, border `#f2f9ff`, `Montserrat` for text, and 24px padding."
3. "Design a navigation bar — `#ffffff` background, `#000000` links, `#f54126` for active state."
4. "Build a feature grid with 3 columns, 24px gap, each card using the card component style."
5. "Create a footer with `#000000` background, `#ffffff` text, and 16px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct
