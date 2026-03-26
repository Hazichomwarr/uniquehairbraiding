// components/sections/Trust.tsx

export default function Trust() {
  return (
    <section className="py-20 px-6 bg-pink-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
            🏆 Award Winning Salon
          </div>
          <img
            src="/images/unique-trust.png"
            alt="Award winning salon"
            className="rounded-2xl shadow-xl object-cover w-full h-full"
          />

          {/* subtle glow */}
          <div className="absolute inset-0 rounded-2xl bg-pink-300/20 blur-2xl -z-10" />
        </div>

        {/* Content */}

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Trusted by Clients Across Orange, NJ
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At Unique Hair Braiding, we take pride in delivering high-quality
            styles that protect your hair and elevate your look. Our salon has
            built a reputation for precision, consistency, and care — with
            awards and satisfied clients to prove it.
          </p>

          {/* Proof points */}
          <ul className="space-y-3 text-gray-700">
            <li>✔️ Award-winning braiding expertise</li>
            <li>✔️ Experienced stylists with years of practice</li>
            <li>✔️ Clean, welcoming, and professional environment</li>
            <li>✔️ Walk-ins welcome & fast service</li>
          </ul>

          {/* CTA */}
          <button className="mt-4 rounded-full bg-pink-500 px-8 py-3 text-white text-lg font-medium shadow-lg hover:bg-pink-600 transition">
            Visit Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
