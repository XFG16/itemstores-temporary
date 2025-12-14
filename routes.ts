/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/security", "/auth/new-verification"];

/**
 * An array of route prefixes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutePrefixes = ["/examples", "/testing", "/pricing"];

/**
 * /auth/new-verification is in public routes because BOTH logged in and
 * logged out users should be able to access it
 */

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/signup",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for exposed API routes
 * Routes that start with this prefix are used for API authentication/checkout purposes
 * @type {string}
 */
export const apiAuthPrefixes = ["/api/auth", "/api/stripe", "/api/webhook"];

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/app/dashboard";

/**
 * Paths that require the use of a layout footer (useLayoutFooter)
 * @type {string}
 */
export const layoutFooterRegexList = [
  /^\/app\/stores\/([a-zA-Z0-9]+)\/products\/new$/,
  /^\/app\/stores\/([a-zA-Z0-9]+)\/products\/([a-zA-Z0-9]+)$/,
  /^\/app\/stores\/([a-zA-Z0-9]+)\/settings$/,
  /^\/app\/stores\/new$/,
  /^\/app\/orders\/([a-zA-Z0-9]+)\/buy-shipping-label$/,
];
