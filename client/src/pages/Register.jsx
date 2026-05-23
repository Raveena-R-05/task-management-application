function Register() {
  return (
    <div className="flex justify-center items-center h-[80vh]">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg"
          />

          <button className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;