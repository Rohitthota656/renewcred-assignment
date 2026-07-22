"use client";

import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">RenewCred CMS</h1>

        <button
          onClick={logout}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Logout
        </button>
      </div>

      <div className="border rounded-lg p-6 max-w-xl">
        <h2 className="text-xl font-semibold mb-3">
          Standards Management
        </h2>

        <p className="mb-6">
          This page will manage all standards.
        </p>

        <button
          onClick={() => router.push("/admin/add-standard")}
          className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700"
        >
          Add Standard
        </button>
      </div>
    </div>
  );
}