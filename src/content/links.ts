// Everything on the link-in-bio home page (/). Edit this file to change it.
//
// A link with an empty href is hidden, so you can list everything she might
// want now and fill each one in when it's ready.

export type LinkIcon = "briefcase" | "file" | "book" | "bag" | "tag" | "play" | "amazon" | "heart" | "mail" | "star";

export type HubLink = {
  label: string;
  note?: string; // small line under the label
  href: string;
  icon: LinkIcon;
  highlight?: boolean; // lavender button instead of white, for the one that matters most right now
};

export const links = {
  avatar: "/images/shade-avatar.jpg",
  intro: "Mom of three (and one on the way!) sharing motherhood, eczema life, and the things we actually love.",

  // The two big cards at the top: her worlds.
  tabs: [
    {
      title: "My Profile",
      caption: "UGC portfolio, brand work & stats",
      href: "/profile",
      photo: "/images/shade-family-cutout.png",
      cutout: true, // a cutout photo sits on a lavender arch instead of filling the card
    },
    {
      title: "My World",
      caption: "Our routine, favorites & codes",
      href: "/my-world",
      photo: "/images/shade-hero.jpg",
    },
  ],

  links: [
    // For brands
    { label: "Work with me", note: "UGC & brand collaborations", href: "/contact", icon: "briefcase", highlight: true },
    { label: "Media kit & rates", note: "Audience, stats & packages (PDF)", href: "", icon: "file" },
    { label: "My best-performing reel", note: "206.7K views, no paid promotion", href: "https://www.instagram.com/reel/DeVmd5apWRV/", icon: "play" },

    // For her community
    { label: "The Eczema Mama Guide", note: "Join the waitlist", href: "/my-world#guide", icon: "book" },
    { label: "Shop my favorites", note: "Tried, tested & loved", href: "/my-world#shop", icon: "bag" },
    { label: "Discount codes", note: "A little something off", href: "/my-world#codes", icon: "tag" },
    { label: "My Amazon storefront", note: "", href: "", icon: "amazon" },
    { label: "Shop my LTK", note: "", href: "", icon: "heart" },
    { label: "TikTok Shop showcase", note: "", href: "", icon: "star" },
  ] satisfies HubLink[],
};
