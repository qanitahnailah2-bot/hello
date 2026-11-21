---
name: Pastel Editorial Tech Portfolio
colors:
  surface: '#fef9ed'
  surface-dim: '#dedace'
  surface-bright: '#fef9ed'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3e7'
  surface-container: '#f3ede1'
  surface-container-high: '#ede8dc'
  surface-container-highest: '#e7e2d6'
  on-surface: '#1d1c14'
  on-surface-variant: '#514348'
  inverse-surface: '#323028'
  inverse-on-surface: '#f5f0e4'
  outline: '#847378'
  outline-variant: '#d6c1c8'
  surface-tint: '#8c4868'
  primary: '#8c4868'
  on-primary: '#ffffff'
  primary-container: '#f8a4c8'
  on-primary-container: '#773655'
  inverse-primary: '#ffafd1'
  secondary: '#615d5d'
  on-secondary: '#ffffff'
  secondary-container: '#e7e1e1'
  on-secondary-container: '#676363'
  tertiary: '#43664e'
  on-tertiary: '#ffffff'
  tertiary-container: '#a0c6a9'
  on-tertiary-container: '#31533d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd8e6'
  primary-fixed-dim: '#ffafd1'
  on-primary-fixed: '#3b0423'
  on-primary-fixed-variant: '#703150'
  secondary-fixed: '#e7e1e1'
  secondary-fixed-dim: '#cbc5c5'
  on-secondary-fixed: '#1d1b1b'
  on-secondary-fixed-variant: '#494646'
  tertiary-fixed: '#c5ecce'
  tertiary-fixed-dim: '#a9d0b3'
  on-tertiary-fixed: '#00210f'
  on-tertiary-fixed-variant: '#2c4e38'
  background: '#fef9ed'
  on-background: '#1d1c14'
  surface-variant: '#e7e2d6'
  cream-canvas: '#EDE8DC'
  cream-paper: '#FAF7EE'
  espresso-ink: '#1C1A1A'
  bubble-pink: '#F8A4C8'
  pink-deep: '#F492BA'
  sage-pill: '#BCE3C5'
  hairline-border: '#1C1A1A'
typography:
  display-hero:
    fontFamily: Syne
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 76px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Syne
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-badge:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-mono-tag:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.12em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system frames the academic and creative journey of an Information Systems student through an expressive, retro-editorial lens. It harmonizes structured, technical precision with playful, avant-garde collage sensibilities. The aesthetic balances warmth, tactile print heritage, and forward-looking digital design.

### Target Audience & Emotional Impact
Designed for university recruiters, tech lab mentors, creative technologists, and youth leadership collaborators. The visual tone evokes:
- **Curated Intentionality**: Feels like an artfully typeset editorial lookbook rather than a generic tech resume.
- **Warm Approachability**: Rich cream substrates and bubblegum rose accents dismantle sterile corporate aesthetics without sacrificing intellectual rigor.
- **Creative Intellect**: Wide geometric display typography collides with structured metadata tags, signaling both design flair and systems-level thinking.

### Movement & Influences
The visual language operates at the intersection of:
- **Retro-Editorial Print**: Distinct frames, delicate hairlines, and large display letterforms inspired by high-end design folios.
- **Sticker-Badge Avant-Garde**: Floating pill micro-badges, stamp-style category markers, and dynamic conversational accents ("HELLO!", "CURRENT", "ACADEMIC BACKGROUND").
- **Structured Precision**: Thin espresso outlines framing structured multi-column grids, bridging graphic play with Information Systems architecture.

## Colors

The palette relies on tactile contrast between paper-like creams, vibrant bubblegum accents, and stark espresso typography.

### Role Allocations
- **Primary (`#F8A4C8`)**: Vibrant focal pink. Used for primary CTA containers, hero sticker badges, prominent section borders, and interactive card highlights.
- **Secondary (`#1C1A1A`)**: Deep espresso ink. Anchors the entire typographical hierarchy, delivers razor-sharp borders (1px hairlines), and provides high-contrast icon rendering.
- **Tertiary (`#BCE3C5`)**: Soft retro sage. Delivers secondary badge variety (e.g., status flags, name plaques, skill tags) ensuring the pink remains impactful rather than monotonous.
- **Neutral Canvas (`#EDE8DC`) & Paper (`#FAF7EE`)**: The foundational canvas tones. Rather than cold pure white, this duo reproduces the tactile density of heavy editorial paper stock.

### Contrast & Functional Behavior
- Text on `#EDE8DC` and `#FAF7EE` must strictly use `#1C1A1A` to achieve AAA accessibility.
- Pill badges filled with `#F8A4C8` or `#BCE3C5` use `#1C1A1A` labels with 1px `#1C1A1A` perimeter strokes for crisp definition.
- Interactive states invert or swap the pink and espresso tokens while maintaining razor-thin borders.

## Typography

The typography pairing contrasts the expressive geometry of `Syne` with the monospaced, technical feel of `Space Grotesk`.

### Structural Hierarchy
- **Headlines (`Syne`)**: Applied to all section anchors, hero statements, and personal identity headers. The expansive letterforms provide striking poster-like charisma.
- **Body & Captions (`Space Grotesk`)**: Ensures high legibility for academic achievements, coursework descriptions, and organizational records. Its subtle mechanical quirks inject a technical personality suitable for an Information Systems profile.
- **Labels & Micro-Badges (`Space Grotesk`)**: Set in full uppercase with expanded letter-spacing (`0.08em` to `0.12em`), creating the tactile impression of rubber stamps and technical index marks.

## Layout & Spacing

The layout mirrors an open editorial broadsheet encased in structural framed borders. Content breathes within generous margins while maintaining rigid vertical and horizontal alignments.

### Grid Architecture
- **Desktop (>= 1024px)**: 12-column fluid grid locked within a maximum width of `1240px`. Gutters sit at `1.5rem`, enveloped by outer frame margins of `2.5rem`.
- **Tablet (768px - 1023px)**: 8-column grid with `1.25rem` gutters and `2rem` margins. Two-column editorial splits collapse into stacked framed cards.
- **Mobile (< 768px)**: 4-column layout with `1rem` gutters and `1.25rem` outer margins. Outer page frames remain visible to preserve the "framed print" metaphor.

### Spacing Rhythm
- Section intervals use expansive spacing (`space-xl` / `3rem` to `4.5rem`) separated by hairline horizontal rules.
- Component-level spacing relies on tight internal paddings (`space-sm` to `space-md`) bounded by hard borders, emphasizing compact sticker badges and neatly compartmentalized metadata cards.

## Elevation & Depth

This design system deliberately eschews realistic diffusion blurs, ambient lighting effects, and multi-layered drop shadows in favor of **Crisp Hairline Planar Layering** with occasional hard-edge offset shadows.

### Depth Metaphor
- **Tactile Paper Collage**: Layers sit flat on top of one another like cut cards on a drafting mat.
- **Hairline Framing**: Visual boundaries are established strictly using `1px solid #1C1A1A` strokes instead of tonal shadows or frosted glass.
- **Hard Offset Accent (Sticker Lift)**: Selected interactive cards or prominent badges use an intentional flat offset shadow: `3px 3px 0px #1C1A1A`. This reinforces the tactile, physical sticker aesthetic without introducing gradient noise.
- **Card-on-Canvas Contrast**: Depth between panels relies on the tonal difference between canvas (`#EDE8DC`) and card paper (`#FAF7EE`), framed inside sharp hairline borders.

## Shapes

The shape system leverages the **Pill-shaped (level 3)** scale, establishing an intentional dialogue between perfectly pill-rounded badges and stark rectangular structural frames.

### Shape Roles & Geometric Language
- **Pill Badges (`border-radius: 9999px` / `rounded-xl`)**: Applied to all category stickers, status flags, micro-eyebrows, skill chips, and main call-to-action buttons. These soft contours create the signature sticker collage aesthetic.
- **Editorial Containers (`border-radius: 1rem`)**: Applied to structural cards, profile photo frames, and timeline boxes. Soft enough to complement the pill tags, yet firm enough to hold rigid multi-column data.
- **Floating Accents & Stamps (`border-radius: 9999px`)**: Interactive rotating labels ("HELLO!", "CURRENT", "VERIFIED") sit offset across container boundaries to disrupt rigid grid lines.

## Components

### 1. Buttons
- **Primary Action (Pill CTA)**:
  - Background: `#F8A4C8`
  - Text & Border: `#1C1A1A`, 1px solid
  - Typography: `Space Grotesk`, 14px, Bold, Uppercase
  - Padding: `0.75rem 2rem`
  - Shape: Fully rounded pill (`border-radius: 9999px`)
  - Hover: Background shifts to `#FAF7EE` with a `3px 3px 0px #1C1A1A` hard offset shadow and a -2px vertical translate.
- **Secondary / Outline Action**:
  - Background: `transparent` (or `#FAF7EE`)
  - Border: 1px solid `#1C1A1A`
  - Text: `#1C1A1A`
  - Hover: Background fills with `#BCE3C5`.

### 2. Badges & Sticker Pills
- **Greeting & Highlight Badges ("HELLO!", "CURRENT")**:
  - Background: `#F8A4C8` or `#BCE3C5`
  - Border: 1px solid `#1C1A1A`
  - Typography: `label-badge` (11px, bold, tracked)
  - Padding: `0.25rem 0.85rem`
  - Shape: Full pill radius, often angled slightly (-2deg to +3deg) when positioned as an accent stamp.
- **Metadata Tags**:
  - Background: `#FAF7EE`
  - Border: 1px solid `#1C1A1A`
  - Text: `#1C1A1A`

### 3. Cards & Content Boxes
- **Editorial Fact Card**:
  - Background: `#FAF7EE`
  - Border: 1px solid `#1C1A1A`
  - Border Radius: `1rem`
  - Padding: `1.5rem`
  - Header: Accompanied by a floating pill badge anchored over the top-left border.
- **Project & Organization Panel**:
  - Split grid container: Left photo/graphic display frame enclosed in 1px `#1C1A1A`, right column housing title in `Syne`, verified role tags in `Space Grotesk`, and description.

### 4. Input Fields & Contact Controls
- **Form Text Inputs**:
  - Background: `#FAF7EE`
  - Border: 1px solid `#1C1A1A`
  - Text: `Space Grotesk`, 15px `#1C1A1A`
  - Padding: `0.85rem 1.25rem`
  - Shape: `0.75rem` radius
  - Focus State: Border thickens to 2px `#1C1A1A`, with a faint `#F8A4C8` tint background.

### 5. Checkboxes & Radio Controls
- **Checkboxes**:
  - Dimensions: 20px × 20px
  - Border: 1.5px solid `#1C1A1A`
  - Shape: 4px rounded
  - Checked: Filled with `#F8A4C8`, displaying a solid `#1C1A1A` check glyph.
- **Radio Buttons**:
  - Shape: 100% circle with a concentric solid `#1C1A1A` dot on `#BCE3C5` base.

### 6. Timeline & Experience Items
- Continuous vertical 1px `#1C1A1A` rule.
- Node anchors represented by 12px pill circles filled with `#F8A4C8` and outlined in `#1C1A1A`.
- Role title in `Syne` (20px), institution and year housed inside a companion pill badge.