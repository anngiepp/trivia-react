import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Entities from "./pages/Entities";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFF1F7] text-[#3b2b35] px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entities" element={<Entities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}