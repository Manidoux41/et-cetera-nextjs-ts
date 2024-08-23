import Image from "next/image";

interface CarouselItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = () => {
/*   const [currentIndex, setCurrentIndex] = useState(0);
 */
  /* useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]); */

  return (
    <div className="relative h-96 overflow-hidden">
     {/*  {items.map((item, index) => ( */}
        <div
          /* key={item.id} */
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 opacity-100"/* {`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0' */
            /* }`} */
        >
          <Image
        src="/images/carousel-first.jpg"
        alt="Landscape picture"
        fill
        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
      />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-2">Titre{/* {item.title} */}</h2>
              <p className="text-xl">Description{/* {item.description} */}</p>
            </div>
          </div>
        </div>
      {/* ))} */}
    </div>
  );
};

export default Carousel;