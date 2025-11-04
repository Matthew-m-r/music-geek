import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AccordionQuestions = () => {
  const questions = [
    { title: "Nunca he tocado la guitarra antes. ¿Todavía puedo tomar este curso?", content: "¡Absolutamente! ¡El curso está diseñado para guiar a los principiantes a través de sus primeros acordes, escalas, técnicas y para tocar riffs y solos épicos! No necesitas ninguna experiencia previa para empezar a aprender." },
    { title: "¿Qué tan pronto puedo esperar para tocar mi primera canción?", content: "¡Desarrollarás las habilidades para tocar tu primer riff muy rápidamente!" },
    { title: "¿Necesito un tipo específico de guitarra para este curso?", content: "No, el curso es apto tanto para guitarra acústica como eléctrica. Se trata de dominar los conceptos básicos y sentirse cómodo con el instrumento." },
    { title: "¿Qué pasa si no entiendo algo en el curso?", content: "Se te brindaran las mejores herramientas para llevar tu aprendizaje por un ruta concreta, además tendrás canales de soporte exclusivos para estudiantes donde se te aclarara cualquier duda que te impida seguir adecuadamente con tu aprendizaje." },
    { title: "¿Cómo están organizadas las lecciones de este curso?", content: "El curso está diseñado en un formato progresivo, donde cada lección se basa en la anterior. Este enfoque estructurado es la manera más eficiente de aprender porque siempre estás reforzando y construyendo sobre lo que acabas de aprender." },
    { title: "¿Puedo conectarme con otros estudiantes que toman este curso? (en el futuro)", content: "" },
    { title: "¿Este curso es autodidáctico?", content: "Sí, puedes aprender a tu propio ritmo y revisar cualquier lección cuando quieras. ¡Tienes acceso de por vida! Cada uno aprende a un ritmo diferente y nuestra plataforma se adapta a eso." },
    { title: "¿Qué sucede si decido que este curso no es para mí?", content: "“¿No puedes tocar? No pagues” significa que si por alguna razón no te gusta este curso en la primera semana de probarlo, te daremos un reembolso completo." },
    { title: "¿Dónde recibiré los datos para acceder al curso?", content: "Una vez hagas el pago correspondiente a tu correo llegarán los accesos del curso en los cuales podrás activar tu cuenta y comenzar." },
    { title: "¿Cómo funciona la garantía de 7 días?", content: "Tan fácil cómo comunicarte a los canales de soporte que tendrás dentro del curso para poder solicitarlo." },
  ];

  // React state for open accordion index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="grid place-items-center justify-center gap-2 mt-4">
      {questions.map((mod, idx) => (
        <div key={idx} className="rounded-b-sm overflow-hidden w-[90%]">
          <button
            className="w-full flex items-center bg-black text-white font-semibold px-4 py-6 gap-2 focus:outline-none transition-colors"
            onClick={() => handleToggle(idx)}
            type="button"
          >
            <span className="text-xl transition-transform duration-300 mr-3" style={{ transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)" }}>
              <IoIosArrowDown />
            </span>
            <span className="flex text-left">{mod.title}</span>
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

export default AccordionQuestions;