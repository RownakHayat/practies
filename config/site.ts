export type SiteConfig = typeof siteConfig;

export const siteConfig: any = {
  name: "Demo",
  description: "Demo",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Admin",
      href: "/admin",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  envConfig: {
  },
};
