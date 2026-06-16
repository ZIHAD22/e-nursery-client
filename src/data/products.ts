export type CatalogProduct = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  image: string;
  badge?: string;
  description: string;
  sizes: string[];
};

export const catalogProducts: CatalogProduct[] = [
  {
    id: "gift-vouchers",
    name: "Gift Vouchers",
    subtitle: "A thoughtful nursery gift for plant lovers",
    price: "৳1,200 - ৳12,000",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=80",
    description:
      "Give someone the freedom to choose their favourite tree, shrub, or garden gift from our nursery collection.",
    sizes: ["৳1,200", "৳2,500", "৳5,000", "৳12,000"],
  },
  {
    id: "native-bare-rooted-tree-packs",
    name: "Native Bare Rooted Tree Packs",
    subtitle: "Reliable native planting for gardens and boundaries",
    price: "৳12,000 - ৳40,500",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    badge: "SOLD OUT",
    description:
      "A practical pack of native bare-root trees selected for strong establishment and natural screening.",
    sizes: ["5 pack", "10 pack", "25 pack", "50 pack"],
  },
  {
    id: "acer-brilliantissimum-trees",
    name: "Acer Brilliantissimum Trees",
    subtitle: "Spring colour with compact ornamental shape",
    price: "৳11,700",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
    badge: "SOLD OUT",
    description:
      "A beautiful ornamental acer with soft seasonal colour, ideal as a feature tree in smaller gardens.",
    sizes: ["2-3 ft", "3-4 ft", "4-5 ft"],
  },
  {
    id: "acer-drummondii-trees",
    name: "Acer Drummondii Trees",
    subtitle: "Variegated maple for bright garden structure",
    price: "৳9,500",
    image:
      "https://images.unsplash.com/photo-1525923838299-2312b60f6d69?auto=format&fit=crop&w=900&q=80",
    description:
      "A striking variegated maple with fresh foliage and an elegant shape for borders or lawns.",
    sizes: ["2-3 ft", "3-4 ft", "4-5 ft"],
  },
  {
    id: "almond-ingrid-trees",
    name: "Almond Ingrid Trees",
    subtitle: "Pretty blossom and productive garden interest",
    price: "৳9,300",
    image:
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=900&q=80",
    description:
      "A charming almond tree with attractive spring flowers and a compact habit for sunny garden spots.",
    sizes: ["2-3 ft", "3-4 ft", "5-6 ft"],
  },
  {
    id: "amelanchier-prince-william",
    name: "Amelanchier 'Prince William'",
    subtitle: "Delicate blossom and autumn colour",
    price: "৳10,700",
    image:
      "https://images.unsplash.com/photo-1558707626-5c4f0dd867cf?auto=format&fit=crop&w=900&q=80",
    description:
      "A graceful small tree known for spring flowers, berries, and rich autumn colour.",
    sizes: ["2-3 ft", "3-4 ft", "4-5 ft"],
  },
  {
    id: "amelanchier-canadensis",
    name: "Amelanchier Canadensis",
    subtitle: "A compact tree for year-round interest",
    price: "৳9,300 - ৳10,700",
    image:
      "https://images.unsplash.com/photo-1558707626-5c4f0dd867cf?auto=format&fit=crop&w=900&q=80",
    description:
      "A versatile ornamental tree with blossom, fruit, and autumn foliage for smaller spaces.",
    sizes: ["2-3 ft", "3-4 ft", "4-5 ft"],
  },
  {
    id: "amelanchier-robin-hill-trees",
    name: "Amelanchier Robin Hill Trees",
    subtitle: "Soft pink blossom with upright growth",
    price: "৳9,300",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80",
    badge: "SOLD OUT",
    description:
      "A refined ornamental choice with light blossom and a tidy upright form for modern gardens.",
    sizes: ["2-3 ft", "3-4 ft", "4-5 ft"],
  },
  {
    id: "apple-bramley-trees",
    name: "Apple Bramley Trees",
    subtitle: "Classic cooking apple tree",
    price: "৳7,800",
    image:
      "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=900&q=80",
    description:
      "A dependable cooking apple variety with generous crops and traditional flavour.",
    sizes: ["2-3 ft", "3-4 ft", "5-6 ft"],
  },
  {
    id: "apple-christmas-pippin-trees",
    name: "Apple Christmas Pippin Trees",
    subtitle: "Sweet dessert apple with reliable crops",
    price: "৳7,800 - ৳10,200",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=900&q=80",
    description:
      "A crisp dessert apple tree with attractive fruit and strong garden performance.",
    sizes: ["2-3 ft", "3-4 ft", "5-6 ft"],
  },
];

export const getProductById = (id?: string) =>
  catalogProducts.find((product) => product.id === id) ?? catalogProducts[0];
