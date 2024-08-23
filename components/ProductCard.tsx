import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/produits/${product.id}`}>
        <div className="relative h-48">
          <Image 
            src={product.imageUrl}
            alt='Landscape picture'
            fill
            className="object-cover w-full h-full"
          />
          {product.isPreview && (
            <div className="absolute top-0 left-0 w-full bg-secondary text-primary text-center py-1 z-10">
              Avant-première
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-primary">{product.price.toFixed(2)} €</span>
            <button className="bg-accent text-white px-4 py-2 rounded hover:bg-secondary transition duration-300">
              Ajouter au panier
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;