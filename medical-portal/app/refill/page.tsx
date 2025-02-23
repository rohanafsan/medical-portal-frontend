export default function Refill() {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-bold text-center text-blue-600">
        Sign in or Refill a Prescription
      </h2>
      <form className="mt-4 space-y-3">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Prescription Number"
          className="w-full p-2 border rounded-lg"
        />
        <button className="w-full bg-blue-600 hover:bg-green-600 text-white py-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
