import { useState } from "react";


const Accordion = () => {
    const modules = [
      { title: "Módulo 1 | Bienvenido", content: "En este módulo te damos la bienvenida y te mostramos cómo aprovechar al máximo el curso. Descubre la estructura, recursos y tips para iniciar tu camino en la teoría musical." },
      { title: "Módulo 2 | ¿Comencemos!", content: "Aquí comenzamos con los conceptos básicos de la música. Aprenderás sobre notas, ritmos y cómo empezar a leer partituras de manera sencilla." },
      { title: "Módulo 3 | Construyamos las escalas", content: "Explora qué son las escalas musicales, cómo se construyen y por qué son fundamentales para cualquier músico. Ejercicios prácticos incluidos." },
      { title: "Módulo 4 | Conozcamos las escalas menores", content: "Sumérgete en el mundo de las escalas menores, aprende sus diferencias y cómo aplicarlas en tu instrumento para dar un nuevo color a tu música." },
      { title: "Módulo 5 | Construye tus primeros acordes", content: "Aprende a formar acordes básicos y a entender su función en la música. Ejercicios para que puedas tocarlos en tu instrumento desde el primer día." },
      { title: "Módulo 6 | Elevemos el nivel", content: "Profundiza en conceptos intermedios como inversiones, acordes extendidos y progresiones armónicas. Lleva tu comprensión musical al siguiente nivel." },
      { title: "Módulo 7 | ¿La Música tiene colores?", content: "Descubre el fascinante mundo de la armonía y el color musical. Aprende cómo los acordes y escalas pueden transmitir emociones y sensaciones." },
      { title: "Módulo 8 | El rol de la melodía", content: "Entiende la importancia de la melodía en la música, cómo crear líneas melódicas y cómo se relacionan con la armonía y el ritmo." },
    ];

    // React state for open accordion index
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (idx: number) => {
      setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
      <div className="grid place-items-center justify-center gap-2 mt-4">
        {modules.map((mod, idx) => (
          <div key={idx} className="rounded-b-sm overflow-hidden w-[90%]">
            <button
              className="w-full flex justify-between items-center bg-black text-white font-semibold px-4 py-3 gap-2 focus:outline-none transition-colors"
              onClick={() => handleToggle(idx)}
              type="button"
            >
              <span className="max-w-[70%] text-left ml-2">{mod.title}</span>
              <span className="text-xl transition-transform duration-300" style={{ transform: openIndex === idx ? "rotate(45deg)" : "rotate(0deg)" }}>
                +
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out bg-gray-100 text-black px-4 overflow-hidden ${openIndex === idx ? "max-h-40 py-3 opacity-100" : "max-h-0 py-0 opacity-0"}`}
            >
              <div className="text-base">
                {mod.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  export default Accordion;