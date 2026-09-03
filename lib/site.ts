export const site = {
  name: "sante bowl",
  shortName: "sante",
  tagline: "Gram gram taze. Aydın’da sağlıklı kase.",
  description:
    "Sante Bowl, Aydın Efeler’de diyet ve spor beslenmesine uygun kaseler hazırlar. Tavuk, köfte, ton ve vegan seçenekler hassas terazide tartılır.",
  city: "Aydın",
  address: "Kurtuluş Mah. 2010. Sk. No: 4/A, Efeler / Aydın",
  mapsQuery: "Sante Bowl Kurtuluş 2010. Sk Efeler Aydın",
  mapsEmbed:
    "https://maps.google.com/maps?q=37.838306,27.844961&z=17&output=embed",
  phone: "0545 978 08 16",
  phoneHref: "tel:+905459780816",
  whatsapp: "https://wa.me/905459780816",
  instagram: "https://www.instagram.com/santeaydin/",
  instagramHandle: "@santeaydin",
  hours: [
    { day: "Pazartesi – Cuma", time: "11:00 – 20:30" },
    { day: "Cumartesi", time: "11:00 – 19:30" },
    { day: "Pazar", time: "Kapalı" },
  ],
  deliveryHours: "Paket: hafta içi 11:00–21:30 · cumartesi 14:30–21:30",
};

export const platforms = [
  {
    id: "yemeksepeti",
    name: "Yemeksepeti",
    href: "https://www.yemeksepeti.com/restaurant/bg0a/sante-bowl",
    logo: "/images/platforms/yemeksepeti.svg",
    tile: "#ffffff",
  },
  {
    id: "trendyol",
    name: "Trendyol GO",
    href: "https://www.trendyol.com/yemek",
    logo: "/images/platforms/trendyol.svg",
    tile: "#ffffff",
  },
  {
    id: "getir",
    name: "Getir Yemek",
    href: "https://getir.com/yemek",
    logo: "/images/platforms/getir.svg",
    // Yellow Getir wordmark is meant to sit on the brand purple.
    tile: "#5D3EBC",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    href: site.whatsapp,
    logo: "/images/platforms/whatsapp.svg",
    tile: "#ffffff",
  },
] as const;
