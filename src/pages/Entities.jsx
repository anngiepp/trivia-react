import { useEffect, useState } from "react";
import { getTriviaQuestions } from "../services/triviaService";
import Loader from "../components/Loader";
import TriviaCard from "../components/TriviaCard";

export default function Entities() {
  const [trivias, setTrivias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTriviaQuestions()
      .then(setTrivias)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="max-w-6xl mx-auto space-y-6">
      <h2 className="text-4xl font-black text-[#FC97B7] text-center">Entities</h2>
      <p className="text-[#6b5a63] font-medium">
        Se muestran propiedades como pregunta, categoría, tipo y dificultad.
      </p>

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