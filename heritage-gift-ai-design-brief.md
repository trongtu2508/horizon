# Heritage Gift Website - AI Design Brief

## 1. Purpose

This document defines the visual direction, page structure, component behavior, color system, typography, and responsive requirements for a premium gift e-commerce website.

The website sells thoughtful gifts and should feel:

- Premium and trustworthy.
- Warm, gentle, and emotionally engaging.
- Refined without feeling cold or overly formal.
- Editorial and heritage-inspired, but still modern and easy to shop.
- Appropriate for an American audience using English (United States).

The design may take strategic inspiration from premium home and gift retailers such as Lenox, but it must not copy Lenox branding, imagery, content, logo, or proprietary assets.

## 2. Brand Concept

### Brand personality

The brand combines two complementary qualities:

1. **Heritage and trust:** expressed through deep teal, refined serif headings, generous whitespace, and restrained visual details.
2. **Warm gifting emotion:** expressed through ivory surfaces, soft pastel accents, lifestyle photography, thoughtful messaging, and gentle product presentation.

The overall experience should communicate: "A carefully selected gift, presented with warmth and lasting value."

### Visual keywords

`Premium` · `Trustworthy` · `Warm` · `Thoughtful` · `Elegant` · `Soft` · `Editorial` · `Timeless` · `Gift-ready`

## 3. Brand Color System - Heritage Gift

### Core palette

| Color token | Name | Hex | Primary usage |
|---|---|---:|---|
| `--color-brand-primary` | Heritage Teal | `#184D4F` | Logo, announcement bar, primary buttons, active navigation, important icons |
| `--color-background` | Porcelain Ivory | `#F8F3EA` | Main page background, editorial sections, product storytelling areas |
| `--color-text` | Charcoal Ink | `#253333` | Headings, body copy, navigation, product information |
| `--color-pastel-rose` | Petal Rose | `#E7C6BE` | Emotional gift campaigns, romantic occasions, soft banners |
| `--color-pastel-sage` | Sage Silk | `#CBD8C8` | Product cards, collection tiles, wellness and housewarming gifts |
| `--color-premium-accent` | Champagne Gold | `#B58A52` | Premium labels, small decorative details, special collections |

### Recommended usage ratio

- Porcelain Ivory: **35%**
- Heritage Teal: **30%**
- Charcoal Ink: **15%**
- Petal Rose: **8%**
- Sage Silk: **7%**
- Champagne Gold: **5%**

Pastel colors are supporting colors, not the primary identity. They should create warmth without making the website look childish, overly feminine, washed out, or low contrast.

### Functional colors

Use functional colors only when necessary and keep them visually compatible with the brand palette.

| Purpose | Suggested color |
|---|---:|
| Success | `#2F765E` |
| Error | `#B64B4B` |
| Warning | `#B98238` |
| Neutral border | `#DED8CE` |
| Muted text | `#716D67` |
| White text on dark surfaces | `#FFFFFF` |

### Color application rules

- Use Heritage Teal for one dominant CTA per content area.
- Use Charcoal Ink instead of pure black for most text.
- Use Porcelain Ivory and white together to create subtle section separation.
- Use Champagne Gold sparingly; it should feel special rather than decorative everywhere.
- Never use pastel colors for essential body text or low-contrast primary buttons.
- Avoid heavy gradients. Soft tonal transitions may be used in editorial banners only.

## 4. Typography System

The storefront language is **English (United States)**. Typography should prioritize readability for American customers while preserving a refined gift-brand identity.

### Font families

| Role | Font | Recommended weights | Usage |
|---|---|---|---|
| Heading font | **Cormorant Garamond** | `500`, optional `600` | Hero headings, H1-H3, collection titles, product names, editorial quotes |
| Body font | **Manrope** | `400`, `500` | Product descriptions, articles, policies, form help text, general content |
| Supporting/UI font | **Manrope** | `500`, `600` | Navigation, price, buttons, labels, badges, filters, form labels |

Use only two font families. The UI font is a stronger, more structured use of Manrope rather than a third font family. This improves consistency and performance.

### Font fallbacks

```css
:root {
  --font-heading: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  --font-body: "Manrope", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-ui: "Manrope", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

### Type scale

| Element | Desktop | Mobile | Weight |
|---|---:|---:|---:|
| Hero H1 | `56-68px` | `38-46px` | `500` |
| Page H1 | `48-58px` | `34-42px` | `500` |
| Section H2 | `38-48px` | `30-36px` | `500` |
| H3 / product title | `26-34px` | `22-28px` | `500` |
| Body large | `18px` | `17px` | `400` |
| Body | `16px` | `16px` | `400` |
| Navigation / button | `14-15px` | `14-15px` | `500-600` |
| Label / badge | `12-13px` | `12px` | `600` |

### Typography rules

- Use sentence case for headings and buttons unless a short label intentionally uses uppercase.
- Uppercase UI labels may use `letter-spacing: 0.04em-0.08em`.
- Body text should have a line height of approximately `1.55-1.7`.
- Editorial headings should have a tighter line height of approximately `1.05-1.15`.
- Avoid excessive bold text. Use spacing, size, and color to create hierarchy.
- Product prices, quantities, and checkout totals should use tabular numerals when supported.

## 5. Global Layout and Interface

### Layout system

- Maximum content width: approximately `1440px`.
- Desktop horizontal padding: `40-64px`.
- Tablet horizontal padding: `24-32px`.
- Mobile horizontal padding: `16-20px`.
- Use generous vertical spacing between major homepage sections: approximately `80-120px` desktop and `48-72px` mobile.
- Use a consistent 12-column desktop grid and a simplified 4-column mobile grid.
- Prefer subtle borders over shadows.
- Avoid excessive rounded cards. Most surfaces should have square or slightly rounded corners.

### Header

Desktop header structure:

1. Announcement bar using Heritage Teal with white text.
2. Primary header with centered or clearly visible logo.
3. Search, account, wishlist, and cart utilities.
4. Primary navigation for product categories.
5. Optional secondary navigation for campaigns, gifts by occasion, and editorial content.

Mobile header structure:

1. Compact brand or partner strip only if required.
2. Hamburger menu, centered logo, wishlist/cart utilities.
3. Full-width search field below the main header.
4. One concise announcement message.

Keep the mobile header compact and avoid reproducing every desktop navigation layer.

### Buttons

Primary button:

- Heritage Teal background.
- White text.
- Manrope `500-600`.
- Minimum touch height: `44px`, preferably `48-52px` for purchase CTAs.
- Square or subtly rounded corners, approximately `0-6px`.

Secondary button:

- Transparent or ivory background.
- Heritage Teal text and border.
- Same height and typography as the primary button.

Text link:

- Charcoal Ink or Heritage Teal.
- Optional underline or animated bottom border.
- Avoid using Champagne Gold as the only link indicator.

### Product cards

- Large product image with a consistent aspect ratio.
- Minimal chrome and no heavy shadow.
- Wishlist icon in the image corner.
- Optional small badge such as `NEW`, `BESTSELLER`, or `LIMITED`.
- Product name in Manrope on listing pages for compact readability.
- Price clearly separated from the product name.
- Quick View and Add to Bag available on desktop.
- Mobile cards should prioritize image, name, and price; secondary actions may be simplified.

## 6. Homepage

### Purpose

The homepage should introduce the brand emotionally, expose key gift categories quickly, and guide customers toward products without looking like a dense catalog.

### Recommended structure

1. **Announcement bar**
   - Free shipping threshold, seasonal offer, or gift delivery deadline.

2. **Header and navigation**
   - Clear search and direct access to cart.
   - Recommended navigation groups: `New`, `Best Sellers`, `Gifts by Occasion`, `Gifts for Her`, `Gifts for Him`, `Home & Living`, `Personalized Gifts`, `Sale`.

3. **Hero section**
   - Full-width lifestyle image or split editorial composition.
   - Short emotional H1 in Cormorant Garamond.
   - One supporting sentence in Manrope.
   - One primary CTA and optionally one secondary CTA.
   - Keep text as HTML rather than embedding it into the image.

4. **Shop by occasion or recipient**
   - Visual category carousel or grid.
   - Examples: `Birthday`, `Wedding`, `Anniversary`, `Housewarming`, `Thank You`, `Just Because`.

5. **New arrivals or best sellers**
   - Four to five products per row on desktop.
   - Two products per row on mobile.

6. **Editorial gift story**
   - Large image paired with a warm story or gifting message.
   - Use Petal Rose or Sage Silk as a supporting surface.

7. **Curated gift collections**
   - Gift boxes, premium gifts, gifts under a price point, seasonal gifts.

8. **Brand trust section**
   - Gift-ready packaging, easy returns, secure checkout, customer support, delivery information.

9. **Testimonials or social proof**
   - Keep the presentation editorial and restrained.

10. **Newsletter and footer**
    - Use a meaningful value proposition instead of a generic subscription request.

### Homepage visual direction

- Allow photography to carry pastel and emotional color.
- Keep surrounding UI surfaces calm and neutral.
- Alternate product-led and editorial sections.
- Avoid placing every section inside a separate card.
- Use subtle staggered reveal animations only for major content groups.

### Homepage mobile behavior

- Use a mobile-specific hero crop.
- Stack text and media when overlay readability is uncertain.
- Present category tiles as a horizontal carousel or two-column grid.
- Keep major CTAs full-width or nearly full-width.
- Avoid oversized headers that consume the first screen.

## 7. Collection Page

### Purpose

The collection page should support fast product discovery while maintaining the premium editorial identity.

### Recommended structure

1. Breadcrumb.
2. Collection H1 and optional short introduction.
3. Subcategory image carousel or visual taxonomy.
4. Product count and sort control.
5. Filter sidebar on desktop.
6. Product grid.
7. Pagination or Load More.
8. Optional SEO/editorial content after the product grid.

### Desktop layout

- Left filter sidebar: approximately `240-300px`.
- Product grid: four columns at large desktop widths and three columns at smaller desktop widths.
- Sort control aligned above the grid on the right.
- Filters displayed as quiet accordion rows with thin neutral borders.
- Avoid oversized filter panels or visually heavy checkboxes.

### Mobile layout

- Breadcrumb and H1 aligned left.
- Subcategories displayed as a horizontal carousel or two-column visual grid.
- Replace the sidebar with a combined `Filter` and `Sort` control.
- Open filters in a bottom sheet or full-height drawer.
- Product grid uses two columns.
- Preserve readable product names and prices; do not shrink typography excessively.

## 8. Product Detail Page

### Purpose

The product page should communicate emotional value, product quality, gifting suitability, and purchase confidence.

### Recommended structure

1. Breadcrumb.
2. Product media gallery.
3. Brand or collection label.
4. Product H1.
5. Rating and review link.
6. Price and promotional information.
7. Variant selection.
8. Quantity selector.
9. Add to Bag button.
10. Gift options, personalization, or gift message when available.
11. Shipping and return summary.
12. Description and details accordions.
13. Material, dimensions, care, and packaging information.
14. Frequently Bought Together.
15. Related products.
16. Reviews and editorial gifting content.

### Desktop layout

- Use a two-column layout.
- Media occupies approximately `55-60%` and product information `40-45%`.
- Place thumbnails vertically beside the primary image when multiple images exist.
- Product information may remain sticky while browsing the gallery, provided it does not trap scrolling.
- Position quantity and Add to Bag close together.
- The Add to Bag button should be the dominant action.

### Mobile layout

- Media gallery appears first and spans the viewport width.
- Replace vertical thumbnails with carousel dots or a compact horizontal thumbnail row.
- Product information follows immediately after the media.
- Use a sticky mobile Add to Bag bar after the customer scrolls beyond the main purchase section.
- Place long content inside accessible accordions.

### Product presentation principles

- Use large, high-quality product and lifestyle images.
- Clearly state whether gift packaging is included.
- Show delivery expectations early for time-sensitive gifting.
- Use emotional copy near the title, but keep specifications factual and scannable.
- Do not overload the purchase area with multiple competing promotions.

## 9. Mini-Cart / Cart Drawer

### Purpose

The mini-cart should confirm the add-to-cart action, summarize the order, reinforce trust, and guide the customer toward checkout without forcing an immediate page change.

### Desktop behavior

- Open as a right-side drawer approximately `440-520px` wide.
- Dim the underlying page using a neutral overlay.
- Keep the drawer white or Porcelain Ivory for strong readability.
- Lock background scrolling while the drawer is open.

### Recommended structure

1. `Your Bag` heading and item count.
2. Close button.
3. Free-shipping progress or qualification message.
4. Cart items with image, title, variant, quantity, price, and remove action.
5. Optional gift wrap or gift message action.
6. Subtotal.
7. Trust signals.
8. Primary `Checkout Securely` button.
9. Secondary link to continue shopping or view the full cart.

### Trust signals

- Secure checkout.
- Easy returns.
- Customer support.
- Gift-ready packaging or quality guarantee.

### Mobile behavior

- Use a full-width or nearly full-width drawer.
- Keep subtotal and checkout CTA visible near the bottom when practical.
- Maintain minimum `44px` touch targets.
- Do not display excessive recommendations inside the drawer.

## 10. Checkout

### Purpose

Checkout should remove distractions, communicate security, and make completion feel straightforward.

### Recommended desktop structure

- Minimal header with logo and cart link only.
- Two-column layout:
  - Left: contact, delivery, shipping method, payment, billing.
  - Right: order summary, discount code, subtotal, shipping, taxes, total.
- Use a very light neutral background for the order summary column.
- Use a single dominant Heritage Teal `Pay Now` or `Complete Order` button.

### Recommended mobile structure

- Logo and cart icon in a compact header.
- Order summary collapsed into an accordion near the top.
- Single-column form.
- Full-width form fields and payment controls.
- Persistent clarity about total cost before the final payment action.

### Form styling

- Minimum field height: `48px`.
- Border color: neutral `#DED8CE`.
- Corner radius: approximately `8-12px`.
- Input font: Manrope, minimum `16px` on mobile.
- Clear labels must remain visible; do not rely exclusively on placeholders.
- Display validation messages close to the relevant field.

### Checkout principles

- Remove full storefront navigation.
- Display accepted payment methods and secure transaction messaging.
- Do not preselect optional marketing consent where regulations or customer expectations discourage it.
- Never visually compete with the final payment CTA.
- Preserve strong color contrast and accessible focus states.

## 11. Responsive Breakpoints

Suggested breakpoint strategy:

```css
/* Mobile-first base: 320px and above */

/* Large mobile / small tablet */
@media (min-width: 480px) {}

/* Tablet */
@media (min-width: 768px) {}

/* Desktop */
@media (min-width: 1024px) {}

/* Large desktop */
@media (min-width: 1440px) {}
```

Responsive requirements:

- The website must work from `320px` upward without horizontal overflow.
- Do not merely shrink desktop layouts; reorganize hierarchy for mobile.
- Product grids should use two columns on most mobile screens.
- Navigation, filter, cart, and search should use drawers or dedicated mobile surfaces.
- Essential purchase actions must remain easy to reach with one hand.

## 12. Imagery and Art Direction

- Use warm natural light and soft shadows.
- Combine clean product photography with emotional lifestyle photography.
- Favor ivory, beige, pale wood, soft rose, sage, and muted blue environments.
- Maintain realistic product colors and sufficient contrast against backgrounds.
- Show packaging, scale, texture, and gifting context.
- Avoid generic stock images, artificial luxury effects, excessive gold, or oversaturated pastel scenes.
- Provide desktop and mobile crops for major campaign images.

## 13. Motion and Interaction

- Use subtle reveal animation for major sections on initial entry.
- Product image hover may reveal a secondary image on desktop.
- Buttons may use restrained color or underline transitions.
- Cart drawer should animate smoothly from the right.
- Accordions should expand without abrupt layout jumps.
- Respect `prefers-reduced-motion`.
- Avoid looping decorative motion, parallax overload, or animation on every card.

## 14. Accessibility and Usability

- Meet WCAG 2.2 AA color contrast targets.
- Provide visible keyboard focus states.
- Use semantic headings in logical order.
- Give icon-only buttons accessible names.
- Use descriptive product image alternative text.
- Ensure interactive targets are at least `44 x 44px` on touch screens.
- Do not communicate state using color alone.
- Support browser zoom and dynamic text without clipping.
- Keep body text at least `16px` on mobile.

## 15. Components to Build

The design system should include reusable components for:

- Announcement bar.
- Desktop and mobile header.
- Predictive search.
- Mega menu and mobile navigation drawer.
- Hero banner.
- Collection/category card.
- Product card.
- Product carousel.
- Price and discount display.
- Badge system.
- Filter and sort controls.
- Product media gallery.
- Variant picker.
- Quantity selector.
- Add to Bag and sticky mobile purchase bar.
- Accordion.
- Trust signal row.
- Mini-cart/cart drawer.
- Gift wrap and gift message controls.
- Newsletter section.
- Footer.
- Checkout form styling where platform customization permits.

## 16. Design Constraints

### Do

- Use generous whitespace and a clear visual hierarchy.
- Balance heritage elegance with modern e-commerce usability.
- Use pastel colors as emotional accents.
- Make product photography the visual focus.
- Keep primary actions consistently Heritage Teal.
- Write all storefront interface copy in natural American English.
- Use concise, warm, benefit-oriented microcopy.

### Do not

- Copy Lenox layouts, assets, campaign copy, or branding exactly.
- Use purple as a default luxury color.
- Create a generic minimalist template with no emotional identity.
- Use pastel colors for every surface.
- Add heavy shadows, glassmorphism, excessive gradients, or rounded cards everywhere.
- Mix more than two font families.
- Use thin serif text at small sizes.
- Hide important shipping, returns, or gifting information deep in the page.
- Allow multiple CTAs to compete with Add to Bag or Checkout.

## 17. AI Implementation Instructions

When generating the website from this brief, the AI should:

1. Treat this document as the source of truth for visual direction and page hierarchy.
2. Preserve the Heritage Gift color tokens and typography roles consistently.
3. Build responsive layouts for desktop and mobile rather than desktop-only mockups.
4. Use realistic American English gift-store content instead of placeholder text.
5. Prioritize clear shopping paths: discovery, product evaluation, add to bag, mini-cart, and checkout.
6. Keep the design intentional, editorial, and warm rather than generic or template-like.
7. Reuse design-system components across all pages.
8. Maintain accessibility, performance, and Shopify theme compatibility.
9. Use theme settings for colors, fonts, spacing, buttons, and section configuration whenever possible.
10. Avoid hardcoding merchant content that should be managed through Shopify products, collections, navigation, metafields, and theme settings.

## 18. Concise AI Prompt

Use the following summary when a shorter prompt is required:

> Design a premium Shopify gift e-commerce website for an American audience. The visual identity is called Heritage Gift and combines trustworthy heritage elegance with warm pastel emotion. Use Heritage Teal `#184D4F` as the primary brand and CTA color, Porcelain Ivory `#F8F3EA` as the main background, Charcoal Ink `#253333` for text, Petal Rose `#E7C6BE` and Sage Silk `#CBD8C8` as restrained pastel accents, and Champagne Gold `#B58A52` for rare premium details. Use Cormorant Garamond for editorial headings and Manrope for body copy, navigation, pricing, forms, labels, and buttons. Build a spacious editorial homepage, filterable collection page, image-led product detail page, right-side mini-cart, and distraction-free checkout. The experience must be responsive, accessible, gift-focused, written in natural American English, and visually refined without copying Lenox or using generic template styling.
