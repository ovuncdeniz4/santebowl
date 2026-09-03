export type Dish = {
  slug: string;
  name: string;
  summary: string;
  details: string;
  tags: string[];
  image: string;
};

export type MenuGroup = {
  id: string;
  title: string;
  intro: string;
  dishes: Dish[];
};

export const menuGroups: MenuGroup[] = [
  {
    id: "imza",
    title: "İmza kaseler",
    intro:
      "Hazır kombinasyonlar. Protein, tahıl ve mezeler terazide tartılır; not bırakarak meze değiştirebilirsiniz.",
    dishes: [
      {
        slug: "basmati-tavuk",
        name: "Basmati Tavuk Bowl",
        summary: "Kajunlu tavuk, tereyağlı basmati, iki meze.",
        details:
          "120 g seçtiğiniz tavuk, 100 g tereyağlı basmati pilav, 2 meze, mor lahana turşusu, domates, salatalık, marul.",
        tags: ["Tavuk", "Basmati"],
        image: "/images/menu/gms-b.jpg",
      },
      {
        slug: "fit-fresh-tavuk",
        name: "Fit & Fresh Tavuk Bowl",
        summary: "Tavuk ve pancarlı kinoa kısır.",
        details:
          "120 g tavuk, iki ölçü pancarlı kinoa, 2 meze, mor lahana turşusu, salatalık, domates, marul.",
        tags: ["Tavuk", "Kinoa"],
        image: "/images/space/google-1.jpg",
      },
      {
        slug: "superbowl",
        name: "Sante Superbowl",
        summary: "Barbekülü tavuk, basmati ve Meksika dokunuşu.",
        details:
          "100 g barbekülü tavuk, 100 g basmati, 2 meze, Meksika fasulyesi, mısır, pancarlı kinoa, mor lahana turşusu, marul.",
        tags: ["Tavuk", "Popüler"],
        image: "/images/menu/superbowl.jpg",
      },
      {
        slug: "mexican",
        name: "Mexican Protein Bowl",
        summary: "Acı soslu tavuk, jalapeno, fasulye ve mısır.",
        details:
          "120 g acı soslu tavuk, 100 g tereyağlı basmati, 1 meze, jalapeno turşusu, Meksika fasulyesi, mısır, domates, salatalık, marul.",
        tags: ["Tavuk", "Acılı"],
        image: "/images/menu/vegan-bowl.jpg",
      },
      {
        slug: "summer",
        name: "Sante Summer Bowl",
        summary: "Nohut ve pancarlı kinoa — etsiz taze kase.",
        details:
          "120 g haşlanmış nohut, 2 ölçü pancarlı kinoa, 3 meze, mor lahana turşusu, domates, salatalık, marul.",
        tags: ["Etsiz", "Nohut"],
        image: "/images/menu/gms-a.jpg",
      },
      {
        slug: "vegan",
        name: "Vegan Bowl",
        summary: "Kajunlu nohut, kinoa ve Meksika fasulyesi.",
        details:
          "120 g kajunlu nohut, 3 ölçü pancarlı kinoa, Meksika fasulyesi, manca, mor lahana turşusu, domates, salatalık, marul.",
        tags: ["Vegan"],
        image: "/images/menu/mexican.jpg",
      },
      {
        slug: "dengeli-kofte",
        name: "Dengeli Köfte Bowl",
        summary: "Köfte, basmati ve iki meze.",
        details:
          "100 g köfte, 100 g basmati pilav, 2 meze, mor lahana turşusu, domates, salatalık, marul.",
        tags: ["Köfte"],
        image: "/images/menu/basmati-tavuk.jpg",
      },
      {
        slug: "fit-fresh-kofte",
        name: "Fit & Fresh Köfte Bowl",
        summary: "Köfte ve pancarlı kinoa.",
        details:
          "100 g köfte, 2 ölçü pancarlı kinoa, 2 meze, domates, salatalık, mor lahana turşusu, marul.",
        tags: ["Köfte", "Kinoa"],
        image: "/images/menu/fit-fresh-kofte.jpg",
      },
      {
        slug: "gurme-tuna",
        name: "Gurme Tuna Bowl",
        summary: "Ton, basmati, kornişon ve mısır.",
        details:
          "100 g ton balığı, 100 g basmati, 1 meze, kornişon turşu, mısır, Meksika fasulyesi, mor lahana turşusu, domates, salatalık, marul.",
        tags: ["Ton"],
        image: "/images/menu/gurme-tuna.jpg",
      },
      {
        slug: "fresh-tuna",
        name: "Fresh Tuna Bowl",
        summary: "Ton ve pancarlı kinoa.",
        details:
          "100 g ton balığı, seçilen meze, 2 ölçü pancarlı kinoa, mısır, kornişon turşu, domates, salatalık, mor lahana turşusu, marul.",
        tags: ["Ton", "Kinoa"],
        image: "/images/menu/fresh-tuna.jpg",
      },
    ],
  },
  {
    id: "protein",
    title: "Yüksek protein",
    intro: "Antrenman ve toparlanma günleri için daha yüksek gramaj.",
    dishes: [
      {
        slug: "ultra-tavuk",
        name: "Ultra Protein Tavuk Bowl",
        summary: "200 g kajunlu tavuk, 150 g basmati.",
        details:
          "200 g kajunlu tavuk, 150 g basmati pilav, 2 meze, mor lahana turşusu, salatalık, domates, marul.",
        tags: ["200 g protein"],
        image: "/images/menu/ultra-protein-tavuk.jpg",
      },
      {
        slug: "ultra-tuna",
        name: "Ultra Protein Tuna Bowl",
        summary: "150 g ton, 150 g basmati.",
        details:
          "150 g ton balığı, 150 g basmati, kornişon, meze, mısır, mor lahana turşusu, domates, salatalık, marul.",
        tags: ["Ton"],
        image: "/images/menu/gms-a.jpg",
      },
      {
        slug: "ultra-kofte",
        name: "Ultra Protein Köfte Bowl",
        summary: "175 g köfte, 150 g basmati.",
        details:
          "175 g köfte, 150 g basmati, 2 meze, mor lahana turşusu, domates, salatalık, marul.",
        tags: ["Köfte"],
        image: "/images/menu/ultra-protein-kofte.jpg",
      },
      {
        slug: "sporcu-tavuk",
        name: "Sporcu Tavuk Pilav",
        summary: "Sade: 200 g tavuk + 200 g basmati.",
        details: "200 g tavuk, 200 g basmati pilav. Yeşilliksiz, yüksek karbonhidratlı sporcu tabağı.",
        tags: ["Sade", "Spor"],
        image: "/images/menu/sporcu-tavuk-pilav.jpg",
      },
      {
        slug: "sporcu-kofte",
        name: "Sporcu Köfte Pilav",
        summary: "Sade: 175 g köfte + 200 g basmati.",
        details: "175 g köfte, 200 g basmati pirinç pilavı.",
        tags: ["Sade", "Spor"],
        image: "/images/menu/sporcu-kofte-pilav.jpg",
      },
    ],
  },
  {
    id: "midi",
    title: "Midi kaseler",
    intro: "Aynı tarif, daha küçük porsiyon. Öğle arası veya ikinci öğün için.",
    dishes: [
      {
        slug: "midi-basmati",
        name: "Midi Basmati Tavuk",
        summary: "80 g kajunlu tavuk, 50 g basmati.",
        details:
          "80 g kajunlu tavuk, 50 g tereyağlı basmati, 2 meze, mor lahana turşusu, domates, salatalık, marul.",
        tags: ["Midi"],
        image: "/images/menu/midi-basmati-tavuk.jpg",
      },
      {
        slug: "midi-fit",
        name: "Midi Fit & Fresh Tavuk",
        summary: "80 g tavuk, pancarlı kinoa.",
        details:
          "80 g tavuk, 2 ölçü pancarlı kinoa, 1 meze, mor lahana turşusu, domates, salatalık, marul.",
        tags: ["Midi"],
        image: "/images/menu/midi-fit-fresh-tavuk.jpg",
      },
      {
        slug: "midi-mexican",
        name: "Midi Mexican",
        summary: "80 g acılı tavuk, jalapeno, mısır.",
        details:
          "80 g acılı tavuk, 50 g tereyağlı basmati, 1 meze, mısır, jalapeno, Meksika fasulyesi, domates, salatalık, marul.",
        tags: ["Midi"],
        image: "/images/menu/dengeli-kofte.jpg",
      },
      {
        slug: "kendi",
        name: "Kendi Bowlunu Yarat",
        summary: "Malzemeyi siz seçin, tartımı biz yapalım.",
        details:
          "Protein, tahıl ve meze kombinasyonunu sipariş notunda veya uygulamada seçin. 30’dan fazla malzeme hattından derlenir.",
        tags: ["Özel"],
        image: "/images/menu/build-your-own.jpg",
      },
    ],
  },
  {
    id: "tatli",
    title: "Tatlı",
    intro: "Şekersiz, glutensiz yulaf unu ve hurma ile.",
    dishes: [
      {
        slug: "brownie",
        name: "Sante Brownie Intense",
        summary: "Glutensiz yulaf unu, hurma, kakao.",
        details:
          "Şekersiz sütlü çikolata veya %86 bitter seçenekleriyle. Tatlı krizine karşı ölçülü bir kare.",
        tags: ["Şekersiz", "Glutensiz"],
        image: "/images/menu/brownie.jpg",
      },
    ],
  },
];

export const featured = [
  menuGroups[0].dishes[0],
  menuGroups[0].dishes[1],
  menuGroups[0].dishes[3],
  menuGroups[0].dishes[6],
  menuGroups[1].dishes[0],
  menuGroups[2].dishes[3],
];
