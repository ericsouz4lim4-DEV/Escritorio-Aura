---
name: Studio Aura
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#d1c5b4'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#9a8f80'
  outline-variant: '#4e4639'
  surface-tint: '#e9c176'
  primary: '#e9c176'
  on-primary: '#412d00'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#775a19'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#c9c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#a7a5a4'
  on-tertiary-container: '#3c3b3b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.6'
  label-md:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.15em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.2'
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

The design system is anchored in the concept of "The Curated Void"—where what is left out is as significant as what is included. It evokes the quiet confidence of a high-end boutique hotel or a private art gallery, prioritizing breathability, precision, and material honesty. The target audience consists of discerning clientele who value architectural integrity and understated opulence over loud branding.

The visual style is a refined **Minimalism** blended with **Tonal Layering**. It avoids common digital flourishes like heavy shadows or vibrant gradients in favor of structural lines, high-contrast typography, and a "physical" sense of space. Every element must feel intentional, as if placed by a curator. The UI should remain invisible, acting only as a sophisticated frame for the studio’s architectural photography and interior compositions.

## Colors

The palette is strictly nocturnal and prestige-driven. 

*   **Primary (Refined Gold):** A muted, brushed brass hex `#C5A059` used exclusively for focus points, thin accents, and subtle interactive states. It should never dominate the screen but act as a "thread of light" through the darkness.
*   **Secondary & Tertiary (Deep Charcoals):** The foundation of the interface. `#0D0D0D` serves as the primary canvas, while `#1A1A1A` creates subtle structural depth.
*   **Neutrals:** Grays are utilized sparingly to maintain a "pure black" gallery feel. 

Transitions between states should use a slow, linear fade to mimic the dimming of gallery lights. Avoid pure white text; use a high-brightness off-white or silver-gray to prevent visual fatigue against the dark background.

## Typography

This design system utilizes a classic editorial pairing to establish hierarchy. 

**Playfair Display** is the voice of the studio. It should be used for all primary headings and "hero" moments. It is most effective when given significant vertical breathing room. 

**Montserrat** provides a functional, modern counterpoint. It must be used in its lighter weights (300/400) for body copy to maintain the minimalist aesthetic. For labels and navigation items, use Montserrat in uppercase with increased letter spacing (0.15em) to evoke a sense of architectural labeling found in floor plans.

Line heights are intentionally generous to improve legibility and reinforce the "less is more" philosophy.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model within a centered container, maximizing whitespace to emphasize the "gallery" vibe. 

1.  **Grid:** A 12-column grid for desktop with wide 32px gutters. Elements should often span 6 or 8 columns to leave intentional "empty" columns on the sides, creating asymmetrical balance.
2.  **Rhythm:** Vertical rhythm is dictated by large gaps. Section transitions should feel like moving from one gallery room to another, utilizing a standard 160px vertical gap.
3.  **Responsive:** On mobile, margins shrink to 24px, and the layout collapses to a single column. Imagery should remain the hero, often bleeding edge-to-edge to maintain impact.

## Elevation & Depth

Depth in the design system is achieved through **Tonal Layers** and **Low-contrast Outlines** rather than traditional shadows.

*   **Surfaces:** The base layer is the darkest. Elevated surfaces (like cards or menus) use a slightly lighter charcoal (`#1A1A1A`) with a razor-thin 0.5px border in a muted gold or dark gray.
*   **Borders:** Borders are the primary tool for separation. Use a "hairline" width (1px or 0.5px) to define containers. 
*   **Interactions:** Hover states should not lift an element (no shadow increase). Instead, use a subtle color shift or a thin gold border transition to indicate interactivity.
*   **Glassmorphism:** Reserved exclusively for navigation bars and overlays. Use a high-intensity background blur (20px+) with a very low-opacity charcoal tint to maintain the "discreet" feel.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Curves are absent from the structural UI to reflect the precision of architectural drafting and the hard edges of modern stone and steel construction. Buttons, input fields, image containers, and cards must all maintain 90-degree corners. This rigidity creates a formal, sophisticated atmosphere that contrasts beautifully with the organic textures found in the studio's project photography.

## Components

*   **Buttons:** Primary buttons are rectangular with a 1px gold border and no fill. Text is Montserrat, uppercase, with 0.15em tracking. On hover, the button fills with a subtle gold tint (opacity 0.1).
*   **Inputs:** Text fields are simple bottom-border lines. The label sits above in small-caps. Focus states are indicated by the bottom border turning from dark gray to gold.
*   **Cards:** Gallery cards have no visible background. They consist of a full-bleed image with a sharp-edged frame. Title and category appear below in Playfair Display and Montserrat respectively.
*   **Navigation:** A minimalist top bar. Navigation links are text-only, using a thin gold underline that expands from the center on hover.
*   **Chips/Tags:** Small, rectangular containers with a 1px border. No background fill. 
*   **Additional Component - The "Curator" Overlay:** A full-screen, high-blur menu used for navigation or project filtering, emphasizing the art-gallery transition effect.
*   **Image Treatments:** All images should feature a subtle 1px inner border (inset) to give photographs a framed appearance.