```markdown
# Design System Document: The Cinematic Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Majlis"**
This design system moves beyond the "app" feel to create a high-end cinematic experience. It is inspired by the intersection of luxury Saudi hospitality and modern cinema. We break the "template" look by utilizing **intentional asymmetry**, **layered depth**, and **heavy editorial typography**. 

The goal is to evoke the feeling of a private screening room: dark, immersive, and prestigious. We prioritize the Right-to-Left (RTL) flow as the primary architectural axis, ensuring that motion and visual weight lead the eye naturally for an Arabic-speaking audience.

---

## 2. Colors & Tonal Depth
The palette is anchored in `surface` (#131313) and electrified by a precision-engineered `primary` (#FFB4A8 / YouTube Red influence).

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders for sectioning are strictly prohibited. 
Structure must be defined through background color shifts. To separate a navigation rail from a main content area, place a `surface-container-low` section against the base `surface`. This creates a sophisticated, seamless transition that feels like high-end joinery rather than a digital wireframe.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Each "inner" container should use a slightly higher or lower tier to define its importance:
*   **Base:** `surface` (#131313)
*   **Navigation/Backdrops:** `surface-container-low` (#1C1B1B)
*   **Interactive Cards:** `surface-container` (#201F1F)
*   **Promoted/Featured Content:** `surface-container-high` (#2A2A2A)

### The "Glass & Gradient" Rule
To achieve the premium cinema vibe, use Glassmorphism for floating overlays (e.g., Top Navigation or Player Controls). 
*   **Formula:** `surface` color at 60% opacity + 20px Backdrop Blur.
*   **Signature Gradients:** For Hero CTAs, transition from `primary` (#FFB4A8) to `primary_container` (#FF5540) at a 135-degree angle. This adds "soul" and prevents the red from feeling flat or aggressive.

---

## 3. Typography
We utilize a high-contrast scale to create an editorial rhythm. For the Saudi market, we lean into **Cairo** for its architectural stability.

*   **Display (Display-LG to SM):** Used for movie titles and major category headers. The `beVietnamPro` / `Cairo` blend should feel massive and authoritative. Use tight letter-spacing for English and generous leading for Arabic.
*   **Headlines:** Your "Hook." Use `headline-lg` (2rem) to break up long scrolls. 
*   **Body (Body-LG to MD):** Optimized for readability in dark mode. Use `on_surface_variant` (#EBBBB4) for secondary body text to reduce eye strain against the dark background.
*   **The Narrative Flow:** Use `title-lg` for card titles. Always ensure that Arabic text has a slightly larger font size (approx +10%) than English equivalents to maintain visual parity in x-height.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, not structural lines.

*   **The Layering Principle:** Place a `surface_container_lowest` (#0E0E0E) card on a `surface_container_low` (#1C1B1B) section. This "recessed" look creates a natural pocket for content.
*   **Ambient Shadows:** For floating elements (Modals/Popovers), use an extra-diffused shadow: `offset: 0, 20px`, `blur: 40px`, `color: rgba(0, 0, 0, 0.4)`. 
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use `outline_variant` (#603E39) at **15% opacity**. It should be a whisper, not a shout.
*   **Glassmorphism:** Use `surface_variant` (#353534) with 40% alpha and a `blur(12px)` for hovering states to make the UI feel like light passing through smoked glass.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`). Border radius: `full`. Text: `on_primary_fixed` (#410000).
*   **Secondary:** Glass-filled. `surface_container_highest` at 50% opacity with a `Ghost Border`.
*   **Tertiary:** Text-only, using `primary` color. No background.

### Cards & Lists
*   **The Card Rule:** No dividers. Separate items using `Spacing-4` (1.4rem) or subtle background shifts between `surface_container` and `surface_container_low`.
*   **Featured Cards:** Use a subtle inner glow (1px top-inset shadow) using `primary_fixed_dim` at 10% opacity to simulate light hitting the top edge of a cinema screen.

### Input Fields
*   **Form Factor:** `surface_container_highest`. Avoid boxes; use "pill" shapes (`rounded-full`) for search and "soft-rect" (`rounded-lg`) for data entry.
*   **Active State:** The bottom edge glows with a 2px `primary` gradient line; do not outline the whole box.

### Signature Component: The Cinematic Marquee
*   An auto-scrolling horizontal list of "Now Showing" titles that uses `surface_container_lowest` as a backdrop, creating a "trench" effect in the layout.

---

## 6. Do's and Don'ts

### Do
*   **DO** use RTL-first logic. The most important visual (e.g., the Movie Poster) should be on the right, with text flowing to the left.
*   **DO** use `Spacing-16` (5.5rem) for section breathing room. High-end cinema is about space and luxury.
*   **DO** use `tertiary` (#EAC34A) for "VIP" or "Golden Class" features to denote Saudi luxury.

### Don't
*   **DON'T** use pure white (#FFFFFF) for text. Use `on_surface` (#E5E2E1) to avoid "vibrating" against the dark background.
*   **DON'T** use 90-degree corners. Even the "none" setting in this system should have a microscopic `sm` (0.25rem) radius to feel organic.
*   **DON'T** use standard grey shadows. Use tinted shadows to maintain the warmth of the `primary` red palette.

---

**Director's Final Note:** 
Always ask: *"Does this feel like an app, or does it feel like a premiere?"* If it feels like an app, add more breathing room and remove a border. If it feels like a premiere, you’ve mastered this design system.```