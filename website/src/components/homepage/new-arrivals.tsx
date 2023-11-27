const products = [
  {
    id: 1,
    name: "AIR JORDAN 1 RETRO HIGH OG 'CHICAGO LOST & FOUND'",
    category: "Sneakers",
    href: "#",
    price: "$349",
    imageSrc: "/images/sneakers/jordan-1-lost-and-found.jpg",
    imageAlt:
      "The Air Jordan 1 Retro High OG 'Chicago Lost & Found' brings back the famous 'Chicago' colorway with new storytelling elements",
  },
  {
    id: 2,
    name: "AIR MAX 95 SE 'DAY OF THE DEAD'",
    category: "Sneakers",
    href: "#",
    price: "$270",
    imageSrc: "/images/sneakers/airmax-95-day-of-the-dead.jpg",
    imageAlt:
      "The Air Max 95 SE 'Day of the Dead' celebrates the annual Mexican holiday known as Dia de los Muertos.",
  },
  {
    id: 3,
    name: "YEEZY BOOST 350 V2 'ZEBRA' 2022/2023",
    category: "Sneakers",
    href: "#",
    price: "$290",
    imageSrc: "/images/sneakers/yeezy-350-v2-zebra.jpg",
    imageAlt:
      "Showcases a white Primeknit upper adorned with bold black zebra stripes, creating a visually striking contrast.",
  },
  {
    id: 4,
    name: "AIR JORDAN 4 RETRO 'LIGHTNING' 2021",
    category: "Sneakers",
    href: "#",
    price: "$290",
    imageSrc: "/images/sneakers/jordan4s-lightning.jpg",
    imageAlt:
      "The shoe's upper is built with nubuck, finished in Tour Yellow and contrasted by the mesh netting and signature wings.",
  },

  // More products...
];

const NewArrivals = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <h2 className="text-lg font-medium text-gray-900">New Arrivals</h2>
          <a
            href="#"
            className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center"
                />
                <div
                  className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                    View Product
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p>{product.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
