import { Link, NavLink } from "react-router";
import { Home, List, Mail } from "lucide-react";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-[#D1F985] text-[#FC97B7] px-4 py-2 rounded-md font-bold shadow"
      : "text-[#FC97B7] hover:bg-[#FFE1E7] px-4 py-2 rounded-md font-bold";

  return (
    <nav className="bg-white/80 border-b-2 border-[#FC97B7] px-8 py-4 flex justify-between items-center">
      <Link to="/" className="font-black text-3xl text-[#FC97B7] tracking-wide">
        🐱 Trivia <span className="text-[#9bdc4c] text-xl">⸜(｡˃ ᵕ ˂ )⸝</span>
      </Link>

      <div className="flex gap-4">
        <NavLink to="/" className={linkClass}>
          <Home className="inline w-4 h-4 mr-1" /> HOME
        </NavLink>
        <NavLink to="/entities" className={linkClass}>
          <List className="inline w-4 h-4 mr-1" /> ENTITIES
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          <Mail className="inline w-4 h-4 mr-1" /> CONTACT
        </NavLink>
      </div>
    </nav>
  );
}