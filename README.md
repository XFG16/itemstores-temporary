## Open Tasks

- Redirect to a page other than `/settings` after login and make sure to refresh the client session
  - Make sure to change callbacks in auth.js login event or change the `DEFAULT_LOGIN_REDIRECT` in `route.ts`. If other pages are redirecting to `DEFAULT_LOGIN_REDIRECT`, then create a separate variable to handle already logged in accounts.
- Make sure `isPending` is passed into each field in the new product form
- Log out of stripeConnectInstance when user logs out (see https://docs.stripe.com/connect/get-started-connect-embedded-components)
- Product creation not working with variants if none of varied prices/quantities/SKUs are selected
- Make sure checking the session when showing "Thank you for your purchase" is updated to when payment is complete and not when the session starts
- Make sure there is at least 1 cart item before creating Stripe checkout
- Do not let user enter just 0 in the cart without anything happening
- Consider linking the user using a Stripe webhook (and passing the user id as metadata) instead of through the client
- Make sure no unnecessary info is exposed to the normal user when grabbing valid products (maybe add security when the account owner tries grabbing info from another store not owned by them)
- Add toast when user adds item to cart and page refreshes
- Consider delaying grabbing the payment status in the checkout return due to possible database delays from webhook
- Verify store ID in server when creating product
- Make sure that at least one of flat or automatic is selected if there is no free shipping option
- Remove the link Stripe to account path if not needed (now handled by webhook)
- When preview shipping address is used, prompt user if they don't have a Stripe tax code set up
- Make sure to handle exposed/authenticated API routes in middleware.ts and routes.ts
- Checkout display numbers even if no items in the cart are actually found in the current store
- Fix schema for shipping address when free shipping is only option in product
- Validate address in customer checkout
- Checkout can still say session expired. Maybe just make it a generic page saying that the order confirmation has been sent to your email
- Make sure that collecting addresses can be an option for free shipping too
- Make sure to ratelimit endpoints/server actions later
- Add feature to use arrow keys to go down, left, right between cells (add tab to go down)
- Store the variant image in the order item so that we don't have to fetch all of products just to find the right image each time
- Make sure to test if cart item SKU works
- Add warning in calculated shipping to make sure most orders ship with the one default package
- Make sure to block certain endpoints if the user hasn't added a business (ex. getting shipping rates)
- Add option to recalculate rates if user changes form in shipping label purchase page
- Track shipments by tracking ID instead of linking them to a suborder
- Disable shipping label purchase form when the payment is processing
- Turn payment for shipping label page into client component since webhook is async
- Add packing slip functionality
- Make sure to remove subcategory from product on category change
- Make sure to delete category attribute from all products when category is changed

## Brainstorming pricing

- Free plan: No monthly fee, 7.95% transaction fee, 4 stores max per month, 15 products max per store, no built-in tracking, limited customer support, we can help build your store for $59.95/store
- Standard plan: $79.95/mo, 4.95% transaction fee, 15 stores per month, 30 products max per store, built-in tracking, standard customer support, we can help build your store for $49.95/store
- Premium plan: $199.95/mo, 3.95% transaction fee, unlimited stores per month, 100 products per store, built-in tracking, priority customer support, have us help you build your stores for $39.95/store

## Edit store form
- Note that in editStoreForm.tsx, we use z.input instead of z.infer to avoid TypeScript errors.

## Base vs. Client vs. Server

- Base refers to the "base" schema used for something. Usually this is all that is required to create a schema
  - Usually this is all that is needed
- Client refers to an extended base schema that needs specific fields/refinements on the client side
- Server refers to an extended base schema that needs specific fields/refinements on the server side

## Also make sure to run

- `stripe listen --forward-to localhost:3000/api/webhook/stripe`
- `stripe listen --forward-connect-to localhost:3000/api/webhook/stripe/connect`

## Select inside dialog

- Make sure to make the dialog modal, add a background manually, and prevent default off click interactions
  - See editHeroDialog for an example

## Completed Tasks

N/A

## Tailwind CSS version

This project is configured to use Tailwind CSS v3.

If you need to reinstall dependencies or validate the setup:

- Tailwind: ^3.4.x
- PostCSS: ^8
- Autoprefixer: ^10

PostCSS config (`postcss.config.mjs`) uses both `tailwindcss` and `autoprefixer` plugins. Global CSS uses Tailwind v3 directives:

- `@tailwind base;`
- `@tailwind components;`
- `@tailwind utilities;`

Build commands remain the same:

- `npm run dev` to develop
- `npm run build` to build