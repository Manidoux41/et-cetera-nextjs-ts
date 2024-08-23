import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      {/* <Carousel items={carouselItems} /> */}
      <Carousel items={[]} />
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6">Nos Produits</h2>
        <div className="grid grid-cols-1 md:grid:cols-2 lg:grid-cols-3 gap-6">
          <ProductCard product={{
            id: '1',
            name: 'Produit Exemple',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vitae sed consequatur sint veritatis nesciunt?',
            price: 19.99,
            isPreview: true,
            imageUrl: '/images/carousel-first.jpg'
          }} />
          <ProductCard product={{
            id: '1',
            name: 'Produit Exemple',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vitae sed consequatur sint veritatis nesciunt?',
            price: 19.99,
            isPreview: false,
            imageUrl: '/images/carousel-first.jpg'
          }} />
          <ProductCard product={{
            id: '1',
            name: 'Produit Exemple',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vitae sed consequatur sint veritatis nesciunt?',
            price: 19.99,
            isPreview: false,
            imageUrl: '/images/carousel-first.jpg'
          }} />
          
          {/* Uncomment and use this when you have actual products data
          {products.slice(0, 3).map(product => (
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
