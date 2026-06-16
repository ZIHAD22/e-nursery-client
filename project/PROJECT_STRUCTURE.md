# E-Nursery Client Project Structure

This project is a React, TypeScript, Vite, Tailwind CSS ecommerce frontend for an online nursery / tree shop. The current design direction follows a Trees Direct style: green brand navigation, image-led sections, product cards, mega menus, tree finder, and a full footer.

## Root Files

- `package.json` - project scripts and dependencies.
- `vite.config.ts` - Vite configuration.
- `tailwind.config.js` - Tailwind content paths, theme extension, and plugins.
- `tsconfig*.json` - TypeScript build configuration.
- `components.json` - shadcn/ui component configuration.
- `index.html` - Vite HTML entry point.

## Source Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  routes/
    routes.tsx
  components/
    layout/
      MainLayout.tsx
    theme/
      ThemeProvider.tsx
    ui/
      button.tsx
      card.tsx
      carousel.tsx
      input.tsx
      label.tsx
      navigation-menu.tsx
      select.tsx
      sheet.tsx
      switch.tsx
  pages/
    Home/
      Home.tsx
      Hero.tsx
      Categories.tsx
      Products.tsx
      Gallery.tsx
    TreeFinder/
      TreeFinder.tsx
    Product/
      Product.tsx
      Filter.tsx
      components/
        PriceFilter.tsx
        SearchCard.tsx
        Selector.tsx
    ProductDetails/
      ProductDetails.tsx
      AddToCard.tsx
      SideCart.tsx
      components/
        ProductInfo.tsx
        QuantitySelection.tsx
    Cart/
      Cart.tsx
      Components/
        CartPriceTag.tsx
        Coupon.tsx
    Shared/
      Navbar.tsx
      Footer.tsx
      Offers.tsx
      ProductCard.tsx
      CategoriesCard.tsx
      MiniShopCart.tsx
      PageTitle.tsx
      WarrantyCard.tsx
    Info/
      InfoPage.tsx
    Auth/
      Login.tsx
      Register.tsx
  assets/
    icons/
    images/
  data/
    products.ts
```

## Routing

Routes are defined in `src/routes/routes.tsx`.

- `/` - redesigned home page.
- `/tree-finder` - Tree Finder page with search dropdown and product grid.
- `/products` - redesigned product listing page using the Tree Finder style layout.
- `/products/:id` - redesigned product details page using shared product data.
- `/shopping-cart` - redesigned cart and checkout summary page.
- `/about` - about page from the main navbar.
- `/advice-guides` - advice/news page from the main navbar.
- `/wholesale` - wholesale page with stock list and contact form.
- `/contact` - contact page with form.
- `/login` - login page with a register call-to-action section at the bottom.
- `/register` - registration page.
- `/hedging`, `/sale`, `/accessories`, `/gifting-and-memorials`, `/gift-vouchers` - category/info pages from the category navbar.

## What Has Been Done

### Home Page Redesign

`src/pages/Home/Home.tsx` now contains a complete Trees Direct inspired homepage:

- Large full-width image hero.
- Best selling product row.
- Promotional category cards.
- Family business / help card section.
- "Why Choose Trees Direct" feature section.
- Tree gifts section.
- Online tree specialists section.
- Floating back-to-top button.
- Modernized product, feature, and reason cards.
- Equal-height card layouts so buttons align on the same baseline.
- Homepage product cards now use shared product data and Bangladeshi taka prices.

### Header And Mega Menus

`src/pages/Shared/Navbar.tsx` now includes:

- Trees Direct style logo/header layout.
- Main utility navigation.
- Product search field.
- Cart and wishlist icons.
- Theme toggle button.
- Green category navigation.
- Hover mega menus for:
  - Trees
  - Shrubs & Climbers
  - Gifting and Memorials
- Mobile menu expansion behavior for smaller screens.
- Real route links for the main navbar and category navbar.

The mega menus include two columns of links and a green help panel.

### Tree Finder

`src/pages/TreeFinder/TreeFinder.tsx` was added.

It includes:

- Tree Finder title and intro copy.
- Breadcrumb and toolbar controls.
- Divider matching the homepage style.
- Search input with expandable category dropdown.
- Product grid with badges, hover quick actions, prices, and buttons.

### Shared Product Data

`src/data/products.ts` was added as the shared catalog source.

It includes:

- Product ids for detail routes.
- Product names and subtitles.
- Bangladeshi taka price strings.
- Product images.
- Product badges such as `SOLD OUT`.
- Product descriptions and available sizes.

### Product Page

`src/pages/Product/Product.tsx` was redesigned and the old sidebar/filter layout was removed.

It now includes:

- Tree Finder style title, intro, breadcrumb, toolbar, and search.
- Product cards using Bangladeshi taka prices.
- Smaller product titles.
- Equal-height product cards so all prices and buttons align.
- `Add to Basket` on every product card.
- `Buy Now` on every product card.
- Product image/title links that open the product details page.

### Product Details Page

`src/pages/ProductDetails/ProductDetails.tsx` was redesigned.

It now includes:

- Shared product data by route id.
- Large product image panel.
- Bangladeshi taka price.
- Stock status.
- Size selection.
- Quantity controls.
- Product description.
- `Add to Basket` drawer trigger.
- `Buy Now` action.
- Delivery and warranty info cards.

### Cart Page

`src/pages/Cart/Cart.tsx` was redesigned.

It now includes:

- Polished cart item rows.
- Bangladeshi taka prices and totals.
- Quantity controls.
- Warranty panel.
- Coupon input.
- Checkout summary.
- `Checkout Now` button.

### Informational Navbar Pages

`src/pages/Info/InfoPage.tsx` was added as a reusable content page.

It powers:

- About Us.
- Advice & Guides.
- Wholesale Orders & Trade Accounts.
- Contact Us.
- Login / Register.
- Category information pages.

The wholesale page includes a bulk stock list, phone/email contact details, and a contact form.

### Login And Registration

`src/pages/Auth/Login.tsx` and `src/pages/Auth/Register.tsx` were added.

It includes:

- Login form.
- Register call-to-action at the bottom of the login page.
- Separate registration form.
- Remember-me checkbox.
- Newsletter opt-in checkbox.
- Styling consistent with the storefront.
- Animated floating leaf accents around the auth card.
- Subtle auth card hover lift and vine decoration.

### Navbar Hover Effects

`src/pages/Shared/Navbar.tsx` now includes stronger hover states:

- Animated underline for top links.
- Green hover backgrounds for category links.
- Small lift effect on category items.
- Rotating dropdown chevrons.
- Hover motion inside mega menu links.

### Dark Theme

`src/components/theme/ThemeProvider.tsx` was added.

It provides:

- Global `light` / `dark` theme state.
- One-click toggle from the navbar.
- Persistent theme storage using `localStorage`.
- Automatic initial theme from saved preference or system preference.
- `dark` class applied to the document root.

`src/index.css` includes dark-mode overrides so the theme affects shared pages, backgrounds, borders, text, inputs, product cards, navbar, footer, and major sections.

### Layout And Footer

`src/components/layout/MainLayout.tsx` now lets full-width page sections span the browser width.

`src/pages/Shared/Footer.tsx` now contains:

- Newsletter form.
- Social icons.
- Shop links.
- Useful links.
- Contact details.
- Payment text area.

`src/pages/Shared/Offers.tsx` now shows the top green trust badge strip.

### Build Cleanup

`src/pages/Cart/Cart.tsx` had unused checkout variables removed so TypeScript production builds can pass.

### Latest UI Cleanup

- Navbar spacing was tightened to prevent top links from wrapping.
- Header cart price was changed to Bangladeshi taka.
- Slide-out cart now displays the selected product from the clicked card.
- Product card buttons are aligned at the same level.
- Home page card sections were redesigned with newer card styling.

## Current Build Command

```bash
npm run build
```

## Development Server

```bash
npm run dev
```

The current running development server is available at:

```text
http://localhost:5174/
```

## Recommended Next Steps

- Replace remote placeholder images with final optimized local assets.
- Connect product cards and tree finder filters to real product data.
- Add mobile menu expansion behavior for smaller screens.
- Add real cart, wishlist, and checkout behavior.
- Review all hardcoded Trees Direct copy if the final brand name should remain E-Nursery.
