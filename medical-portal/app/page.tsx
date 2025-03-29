import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">
        Welcome to PharmaCanada
      </h1>
      <p className="mt-4 text-gray-100 text-lg drop-shadow-lg">
        Your trusted Canadian online pharmacy.
      </p>
      <div className="mt-6 flex flex-col space-y-4 items-center">
        <Link
          href="/refill"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg shadow-lg hover:bg-green-700 transition"
        >
          Refill Prescription
        </Link>
        <Link
          href="/transfer"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg shadow-lg hover:bg-green-700 transition"
        >
          Transfer Prescription
        </Link>
        <Link
          href="/signup"
          className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg shadow-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
