export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold">RenewCred</h2>
          <p className="mt-4 text-gray-300">
            Building trusted environmental standards and carbon markets.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>Hyderabad, India</p>
          <p>info@renewcred.com</p>
          <p>+91 9876543210</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-4 py-2 rounded-l-md text-black"
            />

            <button className="bg-red-600 px-4 rounded-r-md">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-gray-400">
        © 2025 RenewCred. All rights reserved.
      </div>
    </footer>
  );
}