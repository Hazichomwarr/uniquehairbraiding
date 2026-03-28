// components/sections/CTA.tsx

import { BUSINESS_LOCATION, BUSINESS_NUMBER } from "../layout/Navbar";

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-black text-white text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          Ready for Your Next Look?
        </h2>

        {/* Subtext */}
        <p className="text-white/70">
          Visit Unique Hair Braiding today in Orange, NJ. Walk-ins are welcome
          and our stylists are ready to take care of you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <a
            href={BUSINESS_NUMBER}
            className="rounded-full bg-pink-600 px-5 py-2 text-white text-lg font-medium hover:bg-pink-700 transition"
          >
            Call Now
          </a>

          <a
            className="rounded-full border border-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
            href={BUSINESS_LOCATION}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>

        {/* Extra Info */}
        <p className="text-sm text-white/60 pt-4">
          Open Daily • Walk-ins Welcome • Fast Service
        </p>
      </div>
    </section>
  );
}
