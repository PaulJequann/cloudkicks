const products = [
  {
    id: 1,
    name: "Ol' Town & Country Varsity Jacket",
    href: "#",
    price: "$449",
    availability: "Polo Ralph Lauren",
    imageSrc: "/images/clothes/polo-ol-town-country-varsity-jacket.webp",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
  },
  {
    id: 2,
    name: "Script Hoodie | Black",
    href: "#",
    price: "$135",
    availability: "Billionaire Boys Club",
    imageSrc: "/images/clothes/bbc-script-hoodie-black.webp",
    imageAlt:
      "Oversized logo art makes it easy to rep the club in a hoodie made of cotton-blend fleece in a fit that's great for layering in the cold.",
  },
  {
    id: 3,
    name: "S Logo Mountain Jacket | Red",
    href: "#",
    price: "$320",
    availability: "Supreme x The North Face",
    imageSrc: "/images/clothes/supreme-northface.png",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const ProductList = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group text-sm">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
              <p className="italic text-gray-500">{product.availability}</p>
              <p className="mt-2 font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
