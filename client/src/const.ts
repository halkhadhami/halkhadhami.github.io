export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "Hayl Khadhami - PhD Researcher & Automation Engineer";

export const APP_LOGO = import.meta.env.VITE_APP_LOGO || "/logo.svg";

export const SITE_DESCRIPTION = "PhD Researcher in Mechanical Engineering and experienced Industrial Automation Engineer with 10+ years of industry experience. Specializing in electromechanical systems, digital twins, and energy-efficient automation.";

export const OWNER_NAME = "Hayl Khadhami";
export const OWNER_EMAIL = "hayl.khadhami@gmail.com";
export const OWNER_PHONE = "+92 3161121152";
export const OWNER_LOCATION = "Karachi, Pakistan";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
