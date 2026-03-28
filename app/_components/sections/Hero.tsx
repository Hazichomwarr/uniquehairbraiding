import Link from "next/link";
import { BUSINESS_NUMBER } from "../layout/Navbar";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background */}
      <img
        src="/images/unique-hero-group.png"
        alt="Unique Hair Braiding"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-pink-300/60 to-transparent blur-2xl" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl space-y-6">
          {/* Subtitle */}
          <p className="text-neutral-300 font-bold text-2xl md:text-xl tracking-wide font-[cursive]">
            Welcome to
          </p>

          {/* Title */}
          <h1
            className="text-4xl md:text-6xl font-semibold tracking-wide leading-tight"
            style={{
              background: "linear-gradient(180deg, #f5d27a, #d4af37, #b8962e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            UNIQUE HAIR BRAIDING
          </h1>
          {/* Top Info Bar */}

          <p className="text-white text-sm md:text-base tracking-wide">
            Professional braiding and natural hair care in Orange, New Jersey.
          </p>
          <p className="text-white text-sm md:text-base tracking-wide">
            Walk-ins Welcome • Open Daily 4AM – 5PM
          </p>

          {/* Location */}
          <p className="text-pink-200 text-lg md:text-2xl font-medium">
            Orange, New Jersey
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Primary */}
            <a
              href={BUSINESS_NUMBER}
              className="rounded-full bg-pink-600 px-5 py-2 text-white text-sm font-medium hover:bg-pink-700 transition"
            >
              Book Appointment
            </a>

            {/* Secondary */}
            <Link
              href="#services"
              className="rounded-full border border-white px-8 py-3 text-white text-lg font-medium hover:bg-white hover:text-black transition"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
