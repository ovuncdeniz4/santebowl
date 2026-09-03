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
    blurb: "Güncel menü ve teslimat için resmi restoran sayfası.",
    href: "https://www.yemeksepeti.com/restaurant/bg0a/sante-bowl",
    accent: "#FA0050",
  },
  {
    id: "trendyol",
    name: "Trendyol GO",
    blurb: "Uygulamada Sante Bowl Aydın olarak arayın.",
    href: "https://www.trendyol.com/yemek",
    accent: "#F27A1A",
  },
  {
    id: "getir",
    name: "Getir Yemek",
    blurb: "Getir Yemek’te Sante Bowl’u arayıp sipariş verin.",
    href: "https://getir.com/yemek",
    accent: "#5D3EBC",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    blurb: "Gel-al ve sorular için doğrudan yazın.",
    href: site.whatsapp,
    accent: "#25D366",
  },
] as const;
