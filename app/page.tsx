import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Carousel items={carouselItems} /> */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6">Nos Produits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {products.slice(0, 3).map(product => (
            <ProductCard key={product.id} product={product} />
          ))} */}
        </div>
      </section>
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {services.slice(0, 3).map(service => (
            <ServiceCard key={service.id} service={service} />
          ))} */}
        </div>
      </section>
    </>
  );
}
