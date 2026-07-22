import Link from "next/link";
import VersionCard from "./VersionCard";

const sections = [
  "Introduction",
  "Requirements",
  "Methodology",
  "Monitoring",
  "Verification",
];

export default function Sidebar() {
  return (
    <aside className="w-72">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-full border border-gray-300 px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Version Card */}
      <VersionCard />

      {/* Contents */}
      <h3 className="text-lg font-semibold mb-4">Contents</h3>

      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section}>
            <Link
              href={`#${section.toLowerCase()}`}
              className="block text-gray-700 hover:text-red-600 hover:font-medium"
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}