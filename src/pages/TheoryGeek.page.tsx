import Accordion from "../components/Accordion"
import CustomButton from "../components/CustomButton";
import { modules } from "../contants/modules";
import mainLogo from "/src/assets/theoryGeek/22 - Theorygeek logo.png";
import piano from "/src/assets/theoryGeek/25 - piano con celular.png";
import garantia from "/src/assets/guitarGeek/17 - garantia.png";
import cursorStructure from "/src/assets/theoryGeek/28 - pc con piano.png";
import contentDetails from "/src/assets/theoryGeek/29 - que vas a obtener.png";
import tutor2Img from "/src/assets/theoryGeek/30 santi con saxo.png";
import tutor from "/src/assets/theoryGeek/26 - santi con logo.png";

const TheoryGeekPage = () => {

  return (
    <div className="leading-[22px]">
      <div className="flex flex-col ">
        <section className="flex flex-col py-5 px-10">
          <div className="flex gap-2 mb-5">
            <img width={"100%"} src={mainLogo} alt="" />
          </div>

          <div className="flex flex-col my-2 py-5 px-4 text-center">
            <h4 className="text-2xl">¡Describe todo lo que necesitas para</h4>
            <h4 className="text-2xl mb-6 text-purple-700 font-bold">Dominar la Teoria Musical desde cero y aplicarla en tu instrumento!</h4>
            <CustomButton>COMPRAR ESTE CUSO AHORA</CustomButton>
          </div>
        </section>

        <section className="flex flex-col bg-white py-5 px-10 gap-6">
          <div className="flex flex-col text-center justify-center py-0.5 px-4 rounded-2xl bg-gray-100 text-black">
            <h6 className="font-bold mt-3 mb-4 italic">Querido amante de la música,</h6>
            <p>Querido amante de la música,
              ¿Alguna vez has sentido que la teoría musical es un laberinto imposible de entender?
            </p>
            <p>
              ¿Te has frustrado intentando llevar esa teoría a la práctuca en tu instrumento?
            </p>
            <h6 className="font-bold my-6">¡No estás solo!</h6>
          </div>
          <p className="text-black text-center m-auto">
            La teoría musical puede ser intimidante al principio, pero
            estamos aquí para mostrarte el camino; En TheoryGeek <span className="text-purple-700 font-bold">te ofrecemos una guía completa </span>
            diseñada especificamente para principiantes, donde explorarás:
          </p>
        </section>

        <section className="flex flex-col bg-black text-center gap-5 p-20">
          <h6>¿Sientes que la música es un enigma incomprensible?</h6>
          <h6>¿Te resulta complicado llevar la teoría musical a la práctica con tu instrumento?</h6>
          <h6 className="text-purple-700 font-bold">Entendemos tus frustraciones, y estamos aquí para ayudarte a superarlas.</h6>
        </section>

        <section className="flex flex-col bg-white text-center gap-5 text-black py-5 px-10">
          <img src={piano} alt="piano" />
          <p>¿Sientes que la música es un enigma incomprensible?</p>
          <p>¿Te resulta complicado llevar la teoría musical a la práctica con tu instrumento?</p>
          <p>Entendemos tus frustraciones, y estamos aquí para ayudarte a superarlas.</p>
        </section>

        <section className="flex flex-col bg-black gap-5 py-5 px-10">
          <div className="mt-5">
            <h1 className="text-center text-3xl">Acerca de tu mentor</h1>
            <h1 className="mb-2 text-purple-700 font-bold text-3xl text-center">Santiago</h1>
          </div>
          <img src={tutor} alt="tutor" className="rounded-lg" />
          <h6 className="font-bold mt-3 text-2xl">Permitenos presentarte a Santiago,</h6>
          <p>
            el mentor detrás TheoryGeek. Con más de 10 años de experiencia en el mundo de la música, Santiago es un verdadero experto en la teoría musical.
            <br /> <br /> Lo que hace que un mentor sea excepcional es su enfoque estructurado. Él comprende la importancia de una base sólida y te llevará paso a paso, asegurándose de que cada lección se base en la anterior. Esto significa que, sin importar tu nivel de habilidad, te sentirás cómodo y seguro mientras avanzas en tu aprendizaje.
            <br /> <br />Su instrumento principal, el saxofón, le ha proporcionado una comprensión única de la teoría musical, gracias a la intrincada anatomía del instrumento.
            <br /> <br />Santiago está comprometido a compartir sus conocimientos contigo y convertirte en un
            músico versátil y
            <br /> <br />
          </p>
        </section>

        <section className="flex flex-col bg-red-50 text-black justify-center align-middle py-5 px-10">
          <h6 className="my-2 mx-auto font-bold text-2xl mb-6">Estructura del curso</h6>
          <img src={cursorStructure} alt="contentStructure" />
          <Accordion />
        </section>

        <section className="flex flex-col bg-black text-center gap-5 py-5 px-10">
          <h6 className="my-6 font-bold text-2xl">¿Qué vas a obtener?</h6>
          <img src={contentDetails} alt="" />
          <div className="flex flex-col gap-3 ml-3 mb-6">
            {modules.map((module) => {
              return (
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="purple"
                    strokeWidth="2"
                    className="inline-block"
                  >
                    <circle cx="12" cy="12" r="10" stroke="purple" strokeWidth="2" fill="none" />
                    <path d="M8 12.5l2.5 2.5 5-5" stroke="purple" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h6>{module}</h6>
                </div>
              )
            })}
            <CustomButton customStyles={'my-6'}>COMPRAR ESTE CURSO AHORA</CustomButton>
          </div>
        </section>

        <section className="flex flex-col bg-black gap-5 py-5 px-10">
          <img src={garantia} alt="tutor" className="rounded-lg w-[60%] m-auto" />
          <h2 className="text-2xl font-bold">Sabemos que <span className="text-purple-700"> nuestro enfoque funciona</span></h2>
          <p>
            Es por eso que ofrecemos una garantía de devolución de dinero sin preguntas "¿Se te complica aprender? No pagues".
            <br /><br />Si por alguna razón no te gusta este curso en la primera semana de probarlo, te daremos un
            reembolso completo.
            <br /><br />Aunque con un indice de satisfacción del 99,7%, creemos que estás a punto de hacer la inversión más valiosa para aprender todo
            acerca de la teoría musical.
          </p>
          <CustomButton customStyles={'my-6'}>COMPRAR ESTE CURSO AHORA</CustomButton>
        </section>

        <section className="flex flex-col bg-white text-black justify-center align-middle py-5 px-10">
          <h2 className="my-2 mx-auto font-bold text-2xl text-center leading-6">En caso de que te estes preguntando</h2>
          <img src="" alt="" />
          <Accordion />
        </section>

        <section className="flex flex-col bg-black justify-center align-middle py-5 px-10">
          <h2 className="mx-auto text-center text-2xl my-6 leading-7">¡Es hora de que descubras lo que realmente está sucediendo detrá de las canciones que amas!</h2>
          <img className="mt-3.5" src={tutor2Img} alt="" />
          <p>
            La música es un lenguaje universal, y la teoría musical es la clave que te permitirá desentrañar los misterios que se ocultan en cada nota y acorde.
            <br /><br />Con TheoryGeek, no solo aprenderás teoría musical, <span className="font-bold">sino que también podrás aplicarla en tu instrumento de manera efectiva.</span>
            <br /><br />No dejes pasar esta oportunidad de elevar tus habilidades musicales al siguiente nivel.
          </p>
          <p className="mb-6 text-purple-500 font-bold mt-5">
            ¡Inscribete en nuestro curso de teoría musical y comienza tu viaje hacia la comprensión  profunda de la música hoy mismo!
          </p>
          <CustomButton>COMPRAR ESTE CURSO AHORA</CustomButton>
        </section>

        <div className="w-[90%] mx-auto border-t border-gray-300 my-8" />

        <div className="flex flex-col items-center justify-center gap-2 my-6">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="text-white font-semibold">@nimbus.sax</span>
        </div>
      </div>
    </div>
  )
}

export default TheoryGeekPage