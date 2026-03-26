// components/sections/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white md:text-center py-10 px-6">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Unique Hair Braiding</h3>
          <p className="text-white/60 text-sm">
            Professional braiding and natural hair care in Orange, New Jersey.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="font-medium">Contact</h4>
          <p className="text-white/60 text-sm">📍 Orange, NJ</p>
          <p className="text-white/60 text-sm">📞 (XXX) XXX-XXXX</p>
        </div>

        {/* Hours */}
        <div className="space-y-3">
          <h4 className="font-medium">Hours</h4>
          <p className="text-white/60 text-sm">Open Daily</p>
          <p className="text-white/60 text-sm">4:00 AM – 5:00 PM</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-white/50 text-sm mt-10">
        © {new Date().getFullYear()} Unique Hair Braiding LLC. All rights
        reserved.
      </div>
    </footer>
  );
}
