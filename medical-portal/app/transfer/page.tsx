export default function Transfer() {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-bold text-center text-blue-600">
        Transfer a Prescription
      </h2>
      <form className="mt-4 space-y-3">
        <input
          type="text"
          placeholder="Pharmacy Name"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="tel"
          placeholder="Pharmacy Phone Number"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          className="w-full p-2 border rounded-lg"
        />
        <button className="w-full bg-blue-600 hover:bg-green-600 text-white py-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
