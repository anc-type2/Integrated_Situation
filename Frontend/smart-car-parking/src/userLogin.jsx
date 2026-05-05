function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">  Login </h1>

        <fieldset className="border border-gray-300 rounded-lg p-4 mb-4">
          <legend className="px-2 text-sm text-gray-600">  User Credentials </legend>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">  Username </label>
            <input type="text"  className="w-full px-4 py-2 border border-gray-300 rounded-lg   focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1"> Email </label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1"> Password </label>
            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg   focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

        </fieldset>

        <div className="flex gap-3">
          <button type="submit"  className="w-1/2 bg-blue-600 text-white py-2 rounded-lg  hover:bg-blue-700 transition duration-200" >
            Login
          </button>

          <button type="submit"  className="w-1/2 bg-gray-300 text-gray-800 py-2 rounded-lg    hover:bg-gray-400 transition duration-200">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;