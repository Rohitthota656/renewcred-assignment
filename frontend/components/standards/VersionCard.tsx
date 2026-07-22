export default function VersionCard() {
  return (
    <div className="border rounded-xl p-5 mb-6 bg-white shadow-sm">
      <h3 className="font-semibold text-lg mb-3">
        Version
      </h3>

      <div className="space-y-2 text-sm">

        <p className="font-semibold">
          v1.0.0
        </p>

        <p className="text-gray-500">
          Certified • 12 Jul 2025
        </p>

        <hr />

        <p className="text-gray-500">
          Public consultation
        </p>

        <p className="text-gray-500">
          12 May 2025 - 12 Jul 2025
        </p>

      </div>
    </div>
  );
}