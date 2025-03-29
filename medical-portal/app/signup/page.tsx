export default function SignUp() {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-bold text-center text-blue-600">
        Sign Up for PharmaCanada
      </h2>
      <form className="mt-4 space-y-3">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-lg"
        />
        <button className="w-full bg-blue-600 hover:bg-green-600 text-white py-2 rounded-lg">
          Sign Up
        </button>
      </form>
    </div>
  );
}
