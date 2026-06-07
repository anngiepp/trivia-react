import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getTriviaQuestions } from "../services/triviaService";
import Loader from "../components/Loader";
import TriviaCard from "../components/TriviaCard";

export default function Home() {
  const [trivias, setTrivias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTriviaQuestions()
      .then((data) => {
        setTrivias(data);
        toast.success("Preguntas cargadas correctamente");
      })
      .catch(() => {
        toast.error("Error al cargar la API");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4 py-10">
        <p className="text-[#9bdc4c] font-bold text-2xl tracking-[0.4em]">
          quiz challenge
        </p>

        <h1 className="text-6xl font-black text-[#FC97B7] drop-shadow">
          Angie Portocarrero
        </h1>

        <p className="text-[#FC97B7] font-semibold">
          Preguntas aleatorias desde Open Trivia DB
        </p>

        <div className="flex justify-center gap-5 pt-5">
          <div className="bg-[#D1F985] px-10 py-3 rounded-lg shadow">
            <strong>Preguntas</strong>
            <p>{trivias.length}</p>
          </div>

          <div className="bg-[#FFE1E7] px-10 py-3 rounded-lg shadow">
            <strong>Categorías</strong>
            <p>Variadas</p>
          </div>

          <div className="bg-[#D1F985] px-10 py-3 rounded-lg shadow">
            <strong>Dificultad</strong>
            <p>Mixta</p>
          </div>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {trivias.map((trivia, index) => (
            <TriviaCard key={index} trivia={trivia} />
          ))}
        </div>
      )}
    </section>
  );
} 