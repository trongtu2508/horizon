# Heritage Gift Shopify setup

This theme ships the storefront structure and reusable Heritage components. Complete the following Shopify Admin work before publishing the theme.

## 1. Development and theme deployment

1. Install the current Shopify CLI on the development computer.
2. From this repository, run `shopify theme dev --store your-store.myshopify.com` and authenticate with an account that can manage themes.
3. Work against the development theme created by Shopify CLI. Do not publish while catalog and checkout configuration are incomplete.
4. Run `shopify theme check` before every upload.
5. Upload an unpublished release with `shopify theme push --unpublished`, preview it, and publish only after the acceptance checklist is complete.

The repository keeps Shopify Horizon as the base. Keep the Shopify Horizon repository as an upstream remote and merge upstream updates into a separate branch before bringing them into the live theme.

## 2. Store language, market, and brand

1. Go to **Settings > Languages** and keep **English** published for version 1.
2. Go to **Settings > Markets**, configure the United States market, and use USD as the selling currency.
3. Go to **Settings > Brand** and upload the primary logo, inverse logo, square mark, and favicon.
4. In **Online Store > Themes > Customize > Theme settings**, confirm the Heritage palette:
   - Background: `#F8F3EA`
   - Foreground: `#253333`
   - Color 1: `#184D4F`
   - Color 2: `#E7C6BE`
   - Color 3: `#CBD8C8`
   - Champagne gold: `#B58A52`
5. Keep **Use Heritage brand fonts**, **Enable browser wishlist**, **Show free shipping progress**, and **Reveal sections on scroll** enabled.

## 3. Custom data definitions

Go to **Settings > Custom data > Products > Add definition** and create the following definitions using namespace and key exactly as listed.

| Name | Namespace and key | Type | Storefront use |
| --- | --- | --- | --- |
| Product eyebrow | `custom.eyebrow` | Single line text | Short collection or brand label above the product title |
| Product badge | `custom.badge` | Single line text | Accept only `NEW`, `BESTSELLER`, or `LIMITED` |
| Occasion | `custom.occasion` | List of single line text | Search & Discovery filter |
| Recipient | `custom.recipient` | List of single line text | Search & Discovery filter |
| Gift type | `custom.gift_type` | List of single line text | Search & Discovery filter |
| Material | `custom.material` | Multi-line text | Product details accordion |
| Dimensions | `custom.dimensions` | Multi-line text | Product details accordion |
| Care | `custom.care` | Multi-line text | Product details accordion |
| Packaging | `custom.packaging` | Multi-line text | Packaging and delivery accordion |
| Delivery note | `custom.delivery_note` | Single line text | Delivery expectation near purchase information |

Go to **Settings > Custom data > Collections** and create:

| Name | Namespace and key | Type | Storefront use |
| --- | --- | --- | --- |
| Subcollections | `custom.subcollections` | List of collection references | Visual carousel above the product grid |
| Editorial story | `custom.editorial_story` | Rich text | Editorial/SEO copy below the product grid |

Gift wrap and gift messages are line-item properties created at purchase time. Do not create metafields for them.

## 4. Catalog and collections

1. Add at least 12–20 complete products before layout QA.
2. Give every product a descriptive title, concise opening paragraph, full description, price, variants, SKU, inventory, weight, category, and at least three high-quality images.
3. Fill the custom product fields. Avoid using product tags as customer-facing filters when a dedicated metafield exists.
4. Create these primary collections: New, Best Sellers, Gifts for Her, Gifts for Him, Home & Living, Personalized Gifts, Sale, Gift Boxes, Premium Gifts, Gifts Under $75, and Seasonal Gifts.
5. Create Birthday, Wedding, Anniversary, Housewarming, Thank You, and Just Because collections.
6. Use automated collections where product metafields or product data provide stable rules. Use manual collections for editorial campaigns.
7. On each parent collection, populate `custom.subcollections` and `custom.editorial_story`.

Recommended imagery:

- Hero desktop: approximately `2400 x 1400`.
- Hero mobile: approximately `900 x 1200`.
- Collection cards: `1200 x 1200`.
- Product media: at least `1600 x 2000`, preferably a consistent 4:5 ratio.
- Editorial media: approximately `1800 x 1400`.

Use WebP or high-quality JPEG where appropriate. Write descriptive alt text that explains the product or gifting context; never use the source filename as alt text.

## 5. Navigation and pages

Go to **Content > Menus** and create:

- `Main menu`: New, Best Sellers, Gifts by Occasion, Gifts for Her, Gifts for Him, Home & Living, Personalized Gifts, Sale.
- `Customer care`: Contact, Shipping, Returns, FAQ, Order support.
- `Gifting help`: Gift guide, Gift packaging, Personalized gifts, Corporate gifting.
- `About`: Our story, Journal, Sustainability or craftsmanship, Contact.

Create a page named **Wishlist** with handle `wishlist`, then assign the `page.wishlist` theme template.

Create and publish Contact, Shipping, Returns, Privacy Policy, Terms of Service, and FAQ pages. Add the relevant policy pages under **Settings > Policies** so Shopify can also expose them in checkout and the policy list.

## 6. Search, filters, and recommendations

1. Install the free Shopify **Search & Discovery** app.
2. In **Apps > Search & Discovery > Filters**, add Availability and Price.
3. Add product metafield filters for Occasion, Recipient, and Gift type.
4. Rename filter labels in natural American English and order them: Availability, Price, Occasion, Recipient, Gift Type.
5. In Search & Discovery product recommendations, configure complementary products for **Complete the gift** and related products for **You may also love**.
6. Confirm filters display on collection and search pages. Shopify does not show filters on collections with more than 5,000 products.

## 7. Reviews

1. Install **Judge.me Product Reviews** using its free plan for version 1.
2. Add the Judge.me full review widget as an app block near the end of the product template.
3. Use either the Horizon rating block backed by standard Shopify review metafields or the Judge.me preview badge near the title. Do not display both in the same location.
4. If the app does not populate Shopify's standard `reviews.rating` and `reviews.rating_count` metafields, remove the empty Horizon rating block and use the Judge.me badge.
5. Test the widget while logged out and confirm it does not create a large layout shift.

## 8. Theme Editor content

1. Open **Online Store > Themes > Customize**.
2. In the header, select the Main menu, confirm the centered logo, and keep the mobile search section enabled.
3. Upload separate desktop and mobile hero images. Keep the hero text as HTML content, not text embedded in the image.
4. Link all six occasion cards and four curated collection cards.
5. Select the Best Sellers collection in the homepage product section.
6. Replace the editorial placeholder image and update the story copy.
7. Replace placeholder testimonials with authentic, approved customer statements before launch.
8. In the footer, assign Customer care, Gifting help, and About menus.
9. Confirm the newsletter value proposition and sender email configuration.
10. Review desktop and mobile crops independently for every campaign image.

## 9. Shipping and checkout on Shopify Basic

1. Go to **Settings > Shipping and delivery**.
2. Edit the relevant United States shipping profile.
3. Add a free standard shipping rate with a minimum order price of `$75`.
4. In **Theme settings > Heritage Gift**, keep the free-shipping threshold at `$75`. If the shipping rate changes, change this setting at the same time.
5. Go to **Settings > Checkout > Configurations > Edit**.
6. Upload the Heritage Gift logo and set the header background to Heritage Teal.
7. Use Ivory or white for the main area and a light neutral for the order summary.
8. Set buttons and accents to `#184D4F` and choose Manrope, or the closest available sans-serif, for checkout body text.
9. Keep one-page checkout and make the discount field discoverable on mobile.
10. Test checkout using Shopify Bogus Gateway or an approved test-payment workflow before accepting live orders.

Theme Liquid and storefront CSS do not control checkout on Shopify Basic. When the store moves to Shopify Plus, reuse these brand tokens through Checkout Blocks and the Checkout Branding API.

## 10. Acceptance checklist

- Test widths `320`, `390`, `768`, `1024`, and `1440px`; no horizontal overflow is allowed.
- Test keyboard navigation, visible focus, logical headings, 200% zoom, reduced motion, and minimum touch targets.
- Test available, sold-out, discounted, single-variant, and multi-variant products.
- Confirm gift wrap and gift message appear on the cart line item and reach the Shopify order.
- Confirm the sticky Add to Bag button submits the same gift properties as the main purchase button.
- Test wishlist add/remove, reload persistence, empty state, stale deleted products, and the 50-product limit.
- Test filtering, sorting, empty results, pagination, and mobile filter drawers.
- Test shipping progress immediately below, exactly at, and above `$75`.
- Test cart quantity changes, removal, discount codes, special instructions, accelerated checkout, and standard checkout.
- On representative pages, target LCP below `2.5s`, CLS below `0.1`, and INP below `200ms` under realistic content and app conditions.
- Preview the unpublished theme across homepage, collection, product, wishlist, cart, search, policy pages, and checkout before publishing.
