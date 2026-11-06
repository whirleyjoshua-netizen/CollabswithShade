// Everything on the link-in-bio home page (/). Edit this file to change it.

export type LinkIcon = "briefcase" | "file" | "book" | "bag" | "tag" | "play" | "amazon" | "heart" | "mail" | "star";

export type HubLink = {
  label: string;
  note?: string; // small line under the label
  href: string;
  icon: LinkIcon;
  highlight?: boolean; // lavender button instead of white, for the one that matters most right now
};

export type DiscountCode = {
  brand: string;
  code: string;
  deal: string; // e.g. "15% off your first order"
  url: string; // the brand's shop
};

export const links = {
  avatar: "/images/shade-avatar-green.jpg",
  intro: "Mom of three (and one on the way!) sharing motherhood, eczema life, and the things we actually love.",

  // The big card at the top.
  portfolio: {
    title: "My Portfolio",
    caption: "UGC work, brand collabs & stats",
    href: "/profile",
    photo: "/images/shade-family-cutout.png",
  },

  amazon: { label: "My Amazon storefront", note: "Our favorites, all in one place", href: "https://www.amazon.com/shop/shademomodu?tag=folashademomo-20", icon: "amazon" } satisfies HubLink,

  // Shown in the "Discount codes" dropdown. Add one line per code, e.g.
  // { brand: "Chilli Swim", code: "SHADE15", deal: "15% off your order", url: "https://..." },
  codes: [] as DiscountCode[],
};
