// Everything on the My World page. Edit this file to change the page.
//
// PLACEHOLDERS: every product, link, and code below is made up for the first draft.
// Swap in Shade's real ones before the page goes live. A url of "#" shows the
// button but goes nowhere, so nothing broken gets shared by accident.

export type Category = "Eczema & Skin" | "Swim & Summer" | "Allergy-Safe Eating" | "Mama Must-Haves" | "Home";

export type Product = {
  name: string;
  brand: string;
  category: Category;
  why: string; // Shade's one line on why she loves it
  url: string; // affiliate link
  image?: string; // e.g. "/images/my-world/cream.jpg"; without one the card shows the brand's initials
  code?: string; // discount code, shown on the card
  favorite?: boolean; // shows a "Shadé's favorite" ribbon
};

export const myWorld = {
  intro: {
    title: "My World",
    script: "The things we actually use",
    text: "Everything here has been tested on sensitive skin, picky eaters, and one very busy mama. If it’s on this page, it earned its spot in our home.",
    photo: "/images/shade-hero.jpg",
  },

  // The eczema guide. While status is "coming-soon" the page shows a waitlist.
  // When it launches: set status to "available", fill in price and buyUrl
  // (a Stan Store, Gumroad, or Stripe checkout link).
  guide: {
    status: "coming-soon" as "coming-soon" | "available",
    title: "The Eczema Mama Guide",
    subtitle: "Everything I wish someone had told me on day one.",
    inside: [
      "Our daily skin routine, step by step",
      "Product swaps that calmed Evie’s flares",
      "Questions to ask at the dermatologist",
      "Allergy-safe meals and snacks on the go",
      "What to do (and not do) during a bad flare",
    ],
    price: "",
    buyUrl: "",
  },

  // "Evie's skin routine": each step links the product used for it.
  routine: [
    { step: "Bath", text: "Short, lukewarm baths with a gentle, fragrance-free wash. Pat dry, never rub.", product: "Gentle Baby Wash", url: "#" },
    { step: "Moisturize", text: "Within three minutes of the bath, while her skin is still a little damp.", product: "Whipped Eczema Gel", url: "#" },
    { step: "Protect", text: "A thicker balm on the spots that flare most: elbows, knees, and cheeks.", product: "Barrier Balm", url: "#" },
    { step: "Dress", text: "Soft, breathable, long sleeves so there’s nothing to scratch.", product: "Long-Sleeve Sleep Suit", url: "#" },
  ],

  products: [
    { name: "Whipped Eczema Gel", brand: "Ocean Olive", category: "Eczema & Skin", why: "The first thing that actually calmed her flare-ups.", url: "#", image: "/images/brands/ocean-olive.jpg", code: "YOURCODE", favorite: true },
    { name: "Gentle Baby Wash", brand: "Placeholder Brand", category: "Eczema & Skin", why: "No fragrance, no sting, no tears.", url: "#" },
    { name: "Barrier Balm", brand: "Placeholder Brand", category: "Eczema & Skin", why: "Our overnight fix for dry, angry patches.", url: "#" },
    { name: "Long-Sleeve Swimsuit", brand: "Chilli Swim", category: "Swim & Summer", why: "Full coverage, soft fabric, and no scratching at the pool.", url: "#", image: "/images/brands/chilli-swim.jpg", code: "YOURCODE", favorite: true },
    { name: "Wide-Brim Sun Hat", brand: "Placeholder Brand", category: "Swim & Summer", why: "Shade for her face and neck, and it stays on.", url: "#" },
    { name: "Mineral Sunscreen", brand: "Placeholder Brand", category: "Swim & Summer", why: "Gentle enough for her skin, strong enough for Vegas sun.", url: "#" },
    { name: "Bento Lunch Box", brand: "Placeholder Brand", category: "Allergy-Safe Eating", why: "How we pack safe meals for every outing.", url: "#", favorite: true },
    { name: "Allergy-Friendly Snacks", brand: "Placeholder Brand", category: "Allergy-Safe Eating", why: "Top-allergen free, and the kids actually ask for them.", url: "#" },
    { name: "Fruit & Veggie Wash", brand: "Renovera", category: "Allergy-Safe Eating", why: "Peace of mind for everything we eat raw.", url: "#", image: "/images/brands/renovera.jpg" },
    { name: "Everyday Diaper Bag", brand: "Placeholder Brand", category: "Mama Must-Haves", why: "Fits three kids’ worth of stuff. Somehow.", url: "#" },
    { name: "Insulated Water Bottle", brand: "Placeholder Brand", category: "Mama Must-Haves", why: "Cold all day, even in the car.", url: "#" },
    { name: "Fragrance-Free Detergent", brand: "Placeholder Brand", category: "Home", why: "The switch that made the biggest difference for her skin.", url: "#" },
  ] satisfies Product[],

  // Discount codes from brand partners.
  codes: [
    { brand: "Chilli Swim", code: "YOURCODE", deal: "Placeholder: % off your order", url: "https://www.instagram.com/chilliswimwear/" },
    { brand: "Ocean Olive", code: "YOURCODE", deal: "Placeholder: % off your order", url: "https://www.instagram.com/ocean_olive_/" },
  ],

  disclosure:
    "Some links on this page are affiliate links, which means I may earn a small commission if you buy through them, at no extra cost to you. I only share things we genuinely use and love.",
  medical:
    "I’m a mom sharing what works for our family, not a doctor. Nothing here is medical advice. Please talk to your child’s doctor or dermatologist about their skin.",
};
