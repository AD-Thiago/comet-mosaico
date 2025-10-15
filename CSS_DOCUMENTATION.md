# CSS Classes Documentation - Comet Mosaico

This document describes all CSS classes available in the Comet Mosaico responsive layout system.

## Table of Contents
- [Layout Containers](#layout-containers)
- [Tile Components](#tile-components)
- [Tile Size Variants](#tile-size-variants)
- [Tile Elements](#tile-elements)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Usage Examples](#usage-examples)

---

## Layout Containers

### `.container`
Main content wrapper with responsive max-width constraint.

**Properties:**
- Max-width: 1200px (1400px on screens ≥ 1440px)
- Width: 100%
- Centered layout

**Usage:**
```html
<main class="container">
  <!-- Content here -->
</main>
```

### `.page-header`
Header section for page titles.

**Properties:**
- Text alignment: center
- Color: white
- Responsive font sizes (2rem - 3.5rem)
- Text shadow for depth

**Usage:**
```html
<header class="page-header">
  <h1>🌌 Comet Mosaico</h1>
</header>
```

### `.mosaic-grid`
Grid container for organizing mosaic tiles.

**Properties:**
- Display: CSS Grid
- Responsive columns (1-5 columns based on screen size)
- Gap: 15px-20px (responsive)
- Auto-flow rows with minimum height

**Usage:**
```html
<section class="mosaic-grid">
  <!-- Tiles here -->
</section>
```

---

## Tile Components

### `.mosaic-tile`
Base tile component with standard styling.

**Properties:**
- Background: white
- Border radius: 15px
- Padding: 20px-30px (responsive)
- Box shadow with hover effect
- Smooth transitions
- Cursor: pointer
- Flexbox layout

**Interactions:**
- **Hover:** Elevates 5px with enhanced shadow
- **Focus:** 3px outline with offset for accessibility

**Usage:**
```html
<article class="mosaic-tile" tabindex="0" role="button">
  <!-- Tile content -->
</article>
```

---

## Tile Size Variants

### `.mosaic-tile--small`
Compact tile occupying a single grid cell (1x1).

**Grid Span:**
- Column: 1
- Row: 1

**Usage:**
```html
<article class="mosaic-tile mosaic-tile--small">
  <!-- Content -->
</article>
```

### `.mosaic-tile--large`
Large tile spanning multiple grid cells (2x2).

**Grid Span:**
- Column: 2
- Row: 2

**Responsive Behavior:**
- Mobile (< 576px): 1x1
- Tablet (576px-768px): 2x1
- Desktop (≥ 768px): 2x2

**Usage:**
```html
<article class="mosaic-tile mosaic-tile--large">
  <!-- Content -->
</article>
```

### `.mosaic-tile--wide`
Wide tile spanning two columns (2x1).

**Grid Span:**
- Column: 2
- Row: 1

**Responsive Behavior:**
- Mobile (< 576px): 1x1
- Tablet and up: 2x1

**Usage:**
```html
<article class="mosaic-tile mosaic-tile--wide">
  <!-- Content -->
</article>
```

### `.mosaic-tile--tall`
Tall tile spanning two rows (1x2).

**Grid Span:**
- Column: 1
- Row: 2

**Responsive Behavior:**
- Mobile (< 576px): 1x1
- Tablet (576px-768px): 1x1
- Desktop (≥ 768px): 1x2

**Usage:**
```html
<article class="mosaic-tile mosaic-tile--tall">
  <!-- Content -->
</article>
```

---

## Tile Elements

### `.mosaic-tile__icon`
Icon container within a tile.

**Properties:**
- Font size: 2rem-2.5rem (responsive)
- Margin bottom: 15px
- Aria-hidden: true (for decorative icons)

**Usage:**
```html
<div class="mosaic-tile__icon" aria-hidden="true">🚀</div>
```

### `.mosaic-tile__title`
Title/heading within a tile.

**Properties:**
- Color: #667eea (brand color)
- Font size: 1.25rem-1.5rem (responsive)
- Margin bottom: 15px

**Usage:**
```html
<h2 class="mosaic-tile__title">Feature Name</h2>
```

### `.mosaic-tile__description`
Description text within a tile.

**Properties:**
- Color: #666 (dark gray)
- Line height: 1.6
- Readable text formatting

**Usage:**
```html
<p class="mosaic-tile__description">Feature description text</p>
```

---

## Responsive Breakpoints

The layout adapts to five device categories:

### Mobile (< 576px)
- **Columns:** 1
- **Gap:** 15px
- **Padding:** 10px
- **Tile Variants:** All variants collapse to 1x1
- **Header Font:** 2rem

### Tablet (576px - 768px)
- **Columns:** 2
- **Gap:** 18px
- **Padding:** 15px
- **Large Tiles:** 2x1 (instead of 2x2)
- **Tall Tiles:** 1x1
- **Header Font:** 2.5rem

### Small Laptops (768px - 1024px)
- **Columns:** 3
- **Gap:** 20px
- **Padding:** 20px
- **Full Support:** All tile variants work as intended
- **Header Font:** 3rem

### Desktop (≥ 1024px)
- **Columns:** 4
- **Gap:** 20px
- **Full Support:** All tile variants
- **Header Font:** 3.5rem

### Large Desktop (≥ 1440px)
- **Columns:** 5
- **Max Width:** 1400px
- **Optimal Experience:** Maximum tile variety

---

## Usage Examples

### Basic Tile
```html
<article class="mosaic-tile" tabindex="0" role="button">
  <div class="mosaic-tile__icon" aria-hidden="true">🎨</div>
  <h2 class="mosaic-tile__title">Feature Title</h2>
  <p class="mosaic-tile__description">Feature description</p>
</article>
```

### Wide Featured Tile
```html
<article class="mosaic-tile mosaic-tile--wide" tabindex="0" role="button">
  <div class="mosaic-tile__icon" aria-hidden="true">⭐</div>
  <h2 class="mosaic-tile__title">Featured Content</h2>
  <p class="mosaic-tile__description">This tile spans two columns</p>
</article>
```

### Large Hero Tile
```html
<article class="mosaic-tile mosaic-tile--large" tabindex="0" role="button">
  <div class="mosaic-tile__icon" aria-hidden="true">🚀</div>
  <h2 class="mosaic-tile__title">Hero Feature</h2>
  <p class="mosaic-tile__description">
    This large tile provides more space for detailed content
    and spans 2x2 grid cells on larger screens.
  </p>
</article>
```

### Complete Grid Layout
```html
<main class="container">
  <header class="page-header">
    <h1>🌌 Comet Mosaico</h1>
  </header>
  
  <section class="mosaic-grid" role="region" aria-label="Features">
    <article class="mosaic-tile" tabindex="0" role="button">
      <!-- Standard tile -->
    </article>
    
    <article class="mosaic-tile mosaic-tile--wide" tabindex="0" role="button">
      <!-- Wide tile -->
    </article>
    
    <article class="mosaic-tile mosaic-tile--tall" tabindex="0" role="button">
      <!-- Tall tile -->
    </article>
    
    <article class="mosaic-tile mosaic-tile--large" tabindex="0" role="button">
      <!-- Large hero tile -->
    </article>
  </section>
</main>
```

---

## Accessibility Features

### Keyboard Navigation
- All tiles are keyboard accessible with `tabindex="0"`
- Focus indicators with visible outline
- Role attributes for screen readers

### Motion Preferences
- Respects `prefers-reduced-motion` for users sensitive to animations
- Disables transforms and transitions when requested

### High Contrast Mode
- Enhanced borders and outlines in high contrast mode
- Better visibility for all interactive elements

### Screen Readers
- Proper ARIA labels on interactive elements
- Semantic HTML5 elements (article, section, main, header)
- Icon elements marked as decorative with `aria-hidden="true"`

---

## Best Practices

1. **Always include semantic HTML elements** (article, section, header)
2. **Use ARIA labels** for interactive tiles
3. **Add tabindex="0"** to make tiles keyboard accessible
4. **Mark decorative icons** with aria-hidden="true"
5. **Test responsiveness** on actual devices or browser dev tools
6. **Combine tile variants** strategically for visual interest
7. **Keep tile content concise** on mobile devices
8. **Use consistent icon sizes** and styles

---

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support
- IE11: Partial support (Grid with fallbacks)

---

*Last updated: October 2025*
