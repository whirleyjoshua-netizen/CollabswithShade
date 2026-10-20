// All of the site's words, numbers, and media live here.
// Edit this file to update the site; no other code changes needed.

export const site = {
  name: "Shade",
  fullName: "Shadé Momodu",
  tagline: "Motherhood · Lifestyle · UGC",
  email: "collabswithshade@gmail.com",
  location: "Las Vegas, NV",
  // Shown as the round buttons under the location and the oval buttons under "Let's Connect".
  socials: [
    { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/shademomodu/" },
    { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/folashade.momodu" },
    { label: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@shademomodu" },
  ],

  hero: {
    photo: "/images/shade-family-cutout.png",
    headline: "Real moments from a real family, made for your brand.",
    bio: "I’m Shadé! Mom of three (and one on the way!), content creator, and the friend who always has something to recommend. I love creating fun, relatable content around motherhood, lifestyle, and the products, experiences, and moments worth sharing.",
  },

  // Each brand shows as a circle that links to the brand. Links go to the brand's
  // Instagram for now; swap in their website when you have it.
  // Put logos in public/images/brands/ and set logo to e.g. "/images/brands/acme.png".
  // Without a logo, the circle shows the brand's initials. Wide logos: add fit: "contain".
  brands: [
    { name: "Ocean Olive", url: "https://www.instagram.com/ocean_olive_/", logo: "/images/brands/ocean-olive.jpg" },
    { name: "Chilli Swim", url: "https://www.instagram.com/chilliswimwear/", logo: "/images/brands/chilli-swim.jpg" },
    { name: "Renovera", url: "https://www.instagram.com/the_renoveraworld.official/", logo: "/images/brands/renovera.jpg" },
    { name: "Mama Bird", url: "https://www.lovemamabird.com/", logo: "/images/brands/mama-bird.png", fit: "contain" },
  ],

  // The premier video, shown large with its stats (from Instagram Insights, Oct 2026).
  featuredVideo: {
    title: "An allergy mom won't tell you she's an allergy mom…",
    brand: "Food allergy life",
    description:
      "One thing about Evie… she LOVES to eat, and she couldn't care less that her food looks different from everyone else's. A real look at packing safe meals for every outing.",
    // Shown under "Where Experience Meets Impact".
    story:
      "Eczema and food allergy awareness are especially close to my heart and have become a specialty in my content creation. This simple, relatable moment of motherhood turned into one of my highest-performing reels, reaching thousands of parents who could relate.",
    note: "No paid promotion. Just content that connected.",
    src: "/videos/allergy-mom.mp4",
    poster: "/videos/allergy-mom.jpg",
    url: "https://www.instagram.com/reel/DeVmd5apWRV/",
    stats: [
      { value: "202K", label: "Views (IG + FB)" },
      { value: "94.7K", label: "Accounts reached" },
      { value: "5.4K", label: "Likes" },
      { value: "99.5%", label: "Non-follower reach" },
    ],
  },

  // "Brands I've had the pleasure of working with": the brand videos, in a row.
  // Entries with an empty src show a placeholder card linking to the post.
  brandVideos: [
    { title: "Little wins with sensitive skin", category: "Ocean Olive", views: "27.2K", url: "https://www.instagram.com/reel/DWotw6DgEYc/", src: "/videos/ocean-olive-little-wins.mp4", poster: "/videos/ocean-olive-little-wins.jpg" },
    { title: "Finally, swimwear that protects her skin", category: "Chilli Swim", views: "7.2K", url: "https://www.instagram.com/reel/Dai0aeAB998/", src: "/videos/chilli-swim-pool-days.mp4", poster: "/videos/chilli-swim-pool-days.jpg" },
    { title: "Mom life: special fruit wash, no regrets", category: "Renovera", views: "3.9K", url: "https://www.instagram.com/reel/DZA-QwWhbrZ/", src: "/videos/renovera-fruit-wash.mp4", poster: "/videos/renovera-fruit-wash.jpg" },
  ],

  // "No brief, just creativity": her own videos, no brand behind them.
  creativeVideos: [
    { title: "Eczema mama in the summertime", category: "Eczema journey", views: "32.9K", url: "https://www.instagram.com/reel/DWCC4NPicqe/", src: "/videos/eczema-summer.mp4", poster: "/videos/eczema-summer.jpg" },
    { title: "To the mama up all night researching", category: "Motherhood", views: "41.5K", url: "https://www.instagram.com/reel/DaYPPtxJJam/", src: "/videos/mama-up-all-night.mp4", poster: "/videos/mama-up-all-night.jpg" },
    { title: "Advocating for my baby", category: "Motherhood", views: "21.3K", url: "https://www.instagram.com/reel/DYpWFwkBGOG/", src: "/videos/advocating-for-my-baby.mp4", poster: "/videos/advocating-for-my-baby.jpg" },
    { title: "The good-skin-day gamble", category: "Eczema journey", views: "21.3K", url: "https://www.instagram.com/reel/DWiEG2gid89/", src: "/videos/good-skin-day.mp4", poster: "/videos/good-skin-day.jpg" },
  ],

  // Photos on the purple-and-gold film strip on the contact page.
  // Put photos in public/images/film/ and list them here with their pixel size
  // (width w, height h), so each frame matches the photo's shape.
  filmPhotos: [
    { src: "/images/film/film-01.jpg", w: 1050, h: 1400 },
    { src: "/images/shade-hero.jpg", w: 1152, h: 2048 },
    { src: "/images/film/film-02.jpg", w: 1400, h: 1144 },
    { src: "/images/film/film-03.jpg", w: 787, h: 1400 },
    { src: "/images/film/film-04.jpg", w: 787, h: 1400 },
    { src: "/images/film/film-05.jpg", w: 787, h: 1400 },
    { src: "/images/film/film-06.jpg", w: 787, h: 1400 },
    { src: "/videos/advocating-for-my-baby.jpg", w: 720, h: 1280 },
    { src: "/videos/good-skin-day.jpg", w: 640, h: 1136 },
  ],

  // "My Creative Process", shown in order, left to right.
  process: [
    { title: "Get to Know It", text: "Before I create, I want to understand the brand, the product, and who it’s made for." },
    { title: "Find the Why", text: "What problem does it solve? Why would someone actually want or need it? That’s where the story starts." },
    { title: "Make It Personal", text: "I bring my personality into every video. I want viewers to feel like they’re getting an opinion from a friend, not watching another sales pitch." },
    { title: "Make It Worth Watching", text: "A strong hook, thoughtful visuals, and a relatable story that makes people want to stick around." },
  ],

  packages: [
    {
      name: "Single video",
      price: "From $150",
      features: ["1 video, 15–60 seconds", "Script & hook ideas", "1 round of revisions"],
    },
    {
      name: "Content bundle",
      price: "From $400",
      features: [
        "3 videos",
        "3 hook variations each",
        "Raw footage included",
        "2 rounds of revisions",
      ],
      featured: true,
    },
    {
      name: "Photo add-on",
      price: "From $75",
      features: ["5 lifestyle photos", "Product in real home settings", "Edited & ready to post"],
    },
  ],
};
