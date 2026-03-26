// components/sections/CTA.tsx

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
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button className="rounded-full bg-pink-500 px-8 py-3 text-lg font-medium hover:bg-pink-600 transition">
            Call Now
          </button>

          <button className="rounded-full border border-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-black transition">
            Get Directions
          </button>
        </div>

        {/* Extra Info */}
        <p className="text-sm text-white/60 pt-4">
          Open Daily • Walk-ins Welcome • Fast Service
        </p>
      </div>
    </section>
  );
}
