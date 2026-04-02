export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold mb-2">JL Pro Pathway</p>
            <p className="text-gray-400 text-sm">
              Train Like It Matters, Embrace The Pressure, Reach The Next Level
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2026 JL Pro Pathway. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Founded by Jude & Lewis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
