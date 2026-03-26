// components/sections/Services.tsx

import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    id: 1,
    image: "/images/unique-braids.png",
    title: "Braids",
    description:
      "Knotless braids, box braids, and custom styles done with precision.",
  },
  {
    id: 2,
    image: "/images/unique-dreadlocks.png",
    title: "Locs",
    description:
      "Starter locs, retwists, and full loc care from experienced stylists.",
  },
  {
    id: 3,
    image: "/images/unique-boho-style.png",
    title: "Boho Styles",
    description: "Trendy boho braids with curls, beads, and unique finishes.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 bg-linear-to-b from-pink-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Professional braiding, loc maintenance, and protective styles
            tailored to your beauty.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
