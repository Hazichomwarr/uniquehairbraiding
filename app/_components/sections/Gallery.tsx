// components/sections/Gallery.tsx

export const galleryImages = [
  { id: 1, src: "/images/unique-accessories.png" },
  { id: 2, src: "/images/unique-accessories.png" },
  { id: 3, src: "/images/unique-accessories.png" },
  { id: 4, src: "/images/unique-accessories.png" },
  { id: 5, src: "/images/unique-accessories.png" },
  { id: 6, src: "/images/unique-accessories.png" },
];

import ImageCard from "../ui/ImageCard";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our Work
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Real styles. Real clients. Real results from our salon in Orange,
            NJ.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {galleryImages.map((img) => (
            <div key={img.id} className="relative aspect-square">
              <ImageCard src={img.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
