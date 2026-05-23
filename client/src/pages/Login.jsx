function Login() {
  return (
    <div className="flex justify-center items-center h-[80vh]">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form className="flex flex-col gap-4">

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

          <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;