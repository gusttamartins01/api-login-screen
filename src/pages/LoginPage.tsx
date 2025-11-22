import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock} from "lucide-react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    login(name);
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2x1 w-full max-w-md">
        <h1 className="text-2x1 font-bold mb-6 text-center">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

        <div className="flex items-center gap-3 bg-gray-700 p-3 rounded-full">
            <User size={20} />
            <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-x1 bg-gray-700 outiline-none"
            required
          />
        </div>

        <div className="flex items-center gap-3 bg-gray-700 p-3 rounded-full">
            <Mail size={20} />
            <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-x1 bg-gray-700 outiline-none"
            required
          />
        </div>
        <div className="flex items-center gap-3 bg-gray-700 p-3 rounded-full">
            <Lock size={20} />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-x1 bg-gray-700 outiline-none"
            required
          />
        </div>
          <button
            type="submit"
            className=" bg-blue-800 hover:bg-blue-600 transition rounded-full p-3 font-semibold"
          > 
             Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
