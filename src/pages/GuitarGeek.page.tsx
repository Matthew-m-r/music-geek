import { useEffect } from "react";
import Accordion from "../components/Accordion";
import AccordionQuestions from "../components/AccordionQuestions";
import CustomButton from "../components/CustomButton"
import mainLogo from "/src/assets/guitarGeek/11 - guitargeet container.png";
import tutor from "/src/assets/guitarGeek/14 - charlie desvanecido.webp";
import cursorStructure from "/src/assets/guitarGeek/15 - curso version movil.webp";
import contentDetails from "/src/assets/guitarGeek/16 - que vas a obtener.webp";
import qualityLogo from "/src/assets/guitarGeek/17 - garantia.png";
import ipadImg from "/src/assets/guitarGeek/iPad_Mockup.png";
import charlieImg from "/src/assets/guitarGeek/18 - charlie desvanecido.webp";
import { IoMusicalNotes } from "react-icons/io5";

const GuitarGeekPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="leading-[22px]">
      <div className="flex flex-col ">
        <section className="flex flex-col py-5 px-10">
          <div className="flex flex-col py-5 text-center gap-2">
            <div className="leading-6">
              <h4 className="font-bold text-2xl">¡Todo lo que necesitas para</h4>
              <h4 className="text-red-600 font-bold text-2xl">aprender guitarra eléctrica desde cero!</h4>
            </div>
            <div className="flex gap-2 my-10 w-[80%] mx-auto">
              <img className="mx-auto" width={"80%"} src={mainLogo} alt="" />
            </div>
            <p className="text-justify">
              Una guía para principiantes sobre los acordes, las escalas y las técnicas de la guitarra moderna
              <span className="flex items-center mt-6"><IoMusicalNotes size={20} className="mr-3" color="red" /> Ruta de conocimiento de begginer a intermedio</span>
              <span className="flex items-center"><IoMusicalNotes size={20} className="mr-3" color="red" />Progresa cada vez que toques la guitarra</span>
              <span className="flex items-center"><IoMusicalNotes size={20} className="mr-3" color="red" />Entiende cómo funciona la música en tu instrumento</span>
            </p>
            <CustomButton customStyles="mt-4">COMPRAR ESTE CUSO AHORA</CustomButton>
          </div>
        </section>

        <section className="flex flex-col bg-black gap-5 py-5 px-10">
          <p className="text-center gap-2 flex flex-col mb-6">
            ¿Te sientes atrapado en la guitarra?
            <br /> <span className="font-bold text-red-600 text-2xl my-3">¡No estás solo!</span>
            <p className="text-justify">
              Muchos principiantes luchan con la coordinación de las manos, el ritmo y la comprensión de la teoría musical. El progreso se siente lento, absorbiendo la alegría de aprender a tocar la guitarra. Estos obstáculos pueden incluso hacer que desees renunciar.
              <br /><br />Pero no tiene por qué ser así. MusicGeek ofrece un sistema completo de cursos que abordan específicamente estos desafíos. Encontrarás lecciones estructuradas para todos los niveles, dirigidas por profesores que han estado en tu lugar. Nuestro enfoque ofrece resultados.
              <br /><br />Redescubre por qué querías aprender a tocar la guitarra. ¡Es tu momento de dominar verdaderamente la guitarra!
            </p>
          </p>
        </section>

        <section className="flex flex-col bg-white text-black text-center gap-5 py-5 px-10">
          <h6 className="font-bold text-2xl mb-3">Aprende <span className="text-red-600">acordes, escalas y técnicas</span> de la guitarra moderna</h6>
          <div className="flex flex-col gap-2 text-justify">
            <p>Este es un curso diseñado para brindarte todo lo que necesitas para comenzar a tocar la guitarra.</p>
            <p><span className="font-bold">Charlie</span>, con un amplio conocimiento en el mundo de la guitarra, te guiará desde los acordes básicos, con un enfoque en aprender canciones desde la primera lección.</p>
            <p>No se trata solo de aprender a tocar un instrumento, sino de dar forma a tu identidad como un guitarrista seguro.
              <img src={ipadImg} alt="ipadImg" />
              <br />El curso combina a la perfección técnicas fundamentales, ejercicios y conocimientos cruciales de teoría musical para brindarte una base sólida como músico.</p>
            <p className="my-6 font-bold">Da un paso adelante, acepta el desafío y experimenta una transformación en tu forma de tocar que te dejará con una sonrisa en la cara cada vez que tomes tu guitarra.</p>
            <CustomButton customStyles="text-white mb-4">COMPRAR ESTE CUSO AHORA</CustomButton>
          </div>
        </section>

        <section className="flex flex-col bg-black gap-5 py-5 px-10">
          <h6 className="text-center">Acerca de tu mentor</h6>
          <h1 className="mb-2 text-red-600 font-bold text-4xl text-center">CharlieOt</h1>
          <img src={tutor} alt="tutor" className="rounded-lg" />
          <h6 className="font-bold mt-3 text-2xl">Conoce a tu mentor, Charlie</h6>
          <p className="mb-6">
            Un apasionado por la música y la guitarra eléctrica que te guiará en un emocionante viaje desde cero. Charlie, con su experticia en la guitarra eléctrica posee un profundo conocimiento de todos los aspectos técnicos y teóricos de este instrumento.
            <br /> <br />Lo que hace que un mentor sea excepcional es su enfoque estructurado. Él comprende la importancia de una base sólida y te llevará paso a paso, asegurándose de que cada lección se base en la anterior. Esto significa que, sin importar tu nivel de habilidad, te sentirás cómodo y seguro mientras avanzas en tu aprendizaje.
            <br /> <br />Además, es conocido por su sentido del humor. Sus lecciones no solo son educativas, sino también entretenidas. Te hará reír, relajarte y disfrutar de cada sesión, lo que hace que el proceso de aprendizaje sea aún más atractivo. La guitarra eléctrica no solo es un instrumento, ¡es una fuente de diversión!
            <br /> <br />Con Charlie no solo aprenderás a tocar la guitarra eléctrica desde cero, sino que también se convertirá en un amigo en tu viaje musical. Con su estructura, empatía, sentido del humor y paciencia, te inspirará a alcanzar tus metas musicales de una manera divertida y enriquecedora.
          </p>
        </section>

        <section className="flex flex-col bg-[#c1c0c1] text-black justify-center align-middle py-5 px-10">
          <h6 className="my-2 mx-auto font-bold text-2xl mb-4">Estructura del curso</h6>
          <img src={cursorStructure} alt="contentStructure" className="mb-4" />
          <Accordion />
        </section>

        <section className="flex flex-col bg-black text-center gap-5 py-5 px-10">
          <h6 className="my-2 font-bold text-2xl">¿Qué vas a obtener?</h6>
          <img src={contentDetails} alt="" />
          <div className="flex flex-col gap-3 ml-3 mb-6">
            {[
              "11 módulos",
              "60+ Clases",
              "PDF descargables",
              "IOS | Android",
              "Sesiones de inicio rápido",
              "Soporte 1x1",
              "Acceso vitalicio a las clases",
              "Certificado digital",
            ].map((line) => (
              <div key={line} className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                  strokeWidth="2"
                  className="inline-block"
                >
                  <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="none" />
                  <path d="M8 12.5l2.5 2.5 5-5" stroke="red" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h6>{line}</h6>
              </div>
            ))}
            <CustomButton customStyles={'my-6'}>COMPRAR ESTE CURSO AHORA</CustomButton>
          </div>
        </section>

        <section className="flex flex-col bg-black gap-5 py-5 px-10">
          <img src={qualityLogo} width={"50%"} className="mx-auto mb-6" alt="guitarGeek" />
          <h2 className="text-2xl font-bold">Sabemos que <span className="text-red-600">nuestro enfoque funciona</span></h2>
          <p className="mb-6">
            Es por eso que ofrecemos una garantía de devolución de dinero sin preguntas "¿No puedes tocar? No pagues".
            <br /><br />Si por alguna razón no te gusta este curso en la primera semana de probarlo, te daremos un reembolso completo.
            <br /><br />Aunque con un índice de satisfacción del 99,7 %, creemos que estás a punto de hacer la inversión más valiosa para aprender a tocar guitarra.
          </p>
          <CustomButton customStyles={'mb-6'}>COMPRAR ESTE CURSO AHORA</CustomButton>
        </section>

        <section className="flex flex-col bg-white text-black justify-center align-middle py-5">
          <h2 className="my-2 mx-auto font-bold text-2xl text-center max-w-[70%]">En caso de que te estés preguntando</h2>
          <div className="flex flex-col gap-4 mt-4">
            <AccordionQuestions />
          </div>
        </section>

        <section className="flex flex-col bg-black justify-center align-middle py-5 px-10">
          <img src={charlieImg} alt="" />
          <h2 className="mt-3 mb-6 mx-auto font-bold text-center text-white text-2xl">Es hora de <span className="text-red-600">liberar a tu guitarrista</span> interior</h2>
          <p className="mb-6 text-justify">
            Imagina tocar las canciones que siempre te han gustado, mostrar tus nuevas habilidades a tus amigos e incluso escribir tu propia música.
            <br /><br />Siente la adrenalina mientras conquistas solos desafiantes y aprovechas la creatividad que está dentro de ti.
            <br /><br />Este curso te equipa no solo con habilidades técnicas, sino con una comprensión profunda de la guitarra para encontrar tu propia voz.
            <br /><br />Cómo tocar la guitarra es más que aprender algunos acordes, escalas y técnicas.
          </p>
          <CustomButton>COMPRAR ESTE CURSO AHORA</CustomButton>
        </section>

        <div className="w-[90%] mx-auto border-t border-gray-300 my-8" />

        <div className="flex flex-col items-center justify-center gap-2 my-6">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="text-white font-semibold">@soycharlieot</span>
        </div>
      </div>
    </div>
  )
}

export default GuitarGeekPage