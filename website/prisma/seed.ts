import { PrismaClient } from "@prisma/client";
import { networkInterfaces } from "os";

const prisma = new PrismaClient();
async function main() {
  const sneakers = await prisma.category.upsert({
    where: { name: "Sneakers" },
    update: {},
    create: {
      id: "clpj0ejqc000009i5c0pe95fo",
      name: "Sneakers",
    },
  });
  const clothing = await prisma.category.upsert({
    where: { name: "Clothing" },
    update: {},
    create: {
      id: "clpj0hs27000109i5bjds136q",
      name: "Clothing",
    },
  });
  const nike = await prisma.brand.upsert({
    where: { name: "Nike" },
    update: {},
    create: {
      id: "clpizv4zr000008jj6hjibrs9",
      name: "Nike",
      description:
        "Nike is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
      products: {
        create: [
          {
            name: "Nike Air Max 95 'Day Of The Dead'",
            description:
              "The Air Max 95 SE 'Day of the Dead' celebrates the annual Mexican holiday known as Dia de los Muertos.",
            price: 270,
            image:
              "https://cloudkicks-media.s3.amazonaws.com/sneakers/airmax-95-day-of-the-dead.jpg",
            categoryId: "clpj0ejqc000009i5c0pe95fo",
          },
        ],
      },
    },
  });
  const adidas = await prisma.brand.upsert({
    where: { name: "Adidas" },
    update: {},
    create: {
      id: "clpizwvq7000108jj1hc6dol6",
      name: "Yeezy",
      description:
        "Adidas is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png",
      products: {
        create: [
          {
            name: "Yeezy Boost 350 V2 'Zebra' 2022/2023",
            description:
              "Showcases a white Primeknit upper adorned with bold black zebra stripes, creating a visually striking contrast.",
            price: 290,
            image:
              "https://cloudkicks-media.s3.amazonaws.com/sneakers/yeezy-350-v2-zebra.jpg",
            categoryId: "clpj0ejqc000009i5c0pe95fo",
          },
        ],
      },
    },
  });
  const jordan = await prisma.brand.upsert({
    where: { name: "Air Jordan" },
    update: {},
    create: {
      id: "clpj010ne000208jj7873bogq",
      name: "Air Jordan",
      description:
        "Air Jordan is a brand of basketball shoes, athletic, casual, and style clothing produced by Nike. It was created for Hall of Fame basketball player and six-time NBA Finals MVP Michael Jordan.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png",
      products: {
        create: [
          {
            name: "Air Jordan 1 Retro High OG 'CHICAGO LOST & FOUND'",
            description:
              "The Air Jordan 1 Retro High OG 'Chicago Lost & Found' brings back the famous 'Chicago' colorway with new storytelling elements",
            price: 349,
            image:
              "https://cloudkicks-media.s3.amazonaws.com/sneakers/jordan-1-lost-and-found.jpg",
            categoryId: "clpj0ejqc000009i5c0pe95fo",
          },
          {
            name: "Air Jordan 4 Retro 'Lightning' 2021",
            description:
              "The Air Jordan 4 Retro 'Lightning' 2021 brings back a colorway originally released in 2006.",
            price: 250,
            image:
              "https://cloudkicks-media.s3.amazonaws.com/sneakers/jordan4s-lightning.jpg",
            categoryId: "clpj0ejqc000009i5c0pe95fo",
          },
        ],
      },
    },
  });
  console.log({ nike, adidas, jordan });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
