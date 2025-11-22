import { useAuth } from "../context/AuthContext";
import { Cog, LogOut } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      
      <h1 className="flex gap-4 items-center">
        <Cog size={20} />My System
        </h1>
      <div className="flex gap-4 items-center">
        <span>Olá, {user}</span>

        <button
          className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded-lg"
          onClick={logout}
        >
        <LogOut size={20} />Logout
        </button>
      </div>
    </nav>
  );
}
