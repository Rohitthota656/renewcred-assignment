import Link from "next/link";
export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600">
          RenewCred
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-8 text-sm font-medium">
  <li><Link href="/buyers">Buyers</Link></li>
  <li><Link href="/suppliers">Suppliers</Link></li>
  <li><Link href="/climate">Climate & Us</Link></li>
  <li><Link href="/science">Science</Link></li>
  <li>
  <Link
    href="/standards"
    className="bg-red-500 text-white px-3 py-2 rounded"
  >
    Standards
  </Link>
</li>
  <li><Link href="/contact">Contact Us</Link></li>
</ul>
        </nav>

        {/* Button */}
        <button className="rounded-lg border border-black px-6 py-2">
          Registry
        </button>
      </div>
    </header>
  );
}