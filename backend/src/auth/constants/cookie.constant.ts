export const AUTH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: false,
  sameSite: 'lax' as const,
  // sameSite: "none" as const,
  // domain: ".exmple.com",
  maxAge: 1000 * 60 * 60 * 24 * 20,
  path: '/',
};
