import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login, loading, error } = useLogin(); // Use the custom hook
  const navigate = useNavigate(); // Hook for navigating to other pages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(form.email, form.password); // Call the login function from the hook
      if (response) {
        localStorage.setItem('user', JSON.stringify(response));
        navigate("/"); 

      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account
        </h1>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 mb-6 border rounded-md outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className={`w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-200 ease-in-out ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <p className="mt-8 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
