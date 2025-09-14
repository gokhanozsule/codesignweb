import AboutClientComponent from "@/app/about/client";
import { backgroundImages } from "@/constants";

export default function AboutPage() {
  return (
    <div
      className="w-full h-full rounded-3xl bg-cover bg-center custom-shadow flex flex-col relative select-none"
      style={{ backgroundImage: `url(${backgroundImages.about})` }}
    >
      <div className="w-full h-full bg-black opacity-45 absolute left-0 right-0"></div>
      <div className="flex flex-row h-full w-full justify-between px-4 py-12 sm:pr-24 sm:pl-24 relative">
        <div className="flex flex-col h-full justify-start items-center text-start w-full text-white">
          <div className="flex w-full text-xs pt-12 ">GOKHAN OZSULE</div>
          <div className="flex w-full text-2xl ">CoDeSiGn</div>
          <p className="flex w-full text-sm pt-4">
            Graduated from METU Architecture Faculty
          </p>
          <p className="flex w-full text-sm">
            Continued Design Academy Eindhoven
          </p>
          <p className="flex w-full text-sm pt-4">
            Has been working as a professional Architect for 15+ years
          </p>
          <p className="flex w-full text-sm pt-4">Most recent roles are;</p>
          <div className="flex w-full text-sm text-red-400">
            Design and Construction Chief for
          </div>
          <a
            href="https://www.joali.com/joali-being/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full text-sm text-red-400"
          >
            Joali Being Maldives / 4 years
          </a>
          <div className="flex w-full text-sm">
            <img
              src={`${backgroundImages.Joali}`}
              alt="JoaliBeing_aerial"
              className="w-56 lg:w-[65%] rounded-3xl flex "
            />
          </div>
          <div className="flex w-full text-sm pt-1 text-red-400">
            Design Lead and Construction Consultant for
          </div>
          <a
            href="https://www.emaarsquaremall.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full text-sm text-red-400"
          >
            EmaarSquare Istanbul / 6 years
          </a>
          <div className="flex w-full text-sm pt-1">
            <img
              src={`${backgroundImages.Emaar}`}
              alt="Emaar_aerial"
              className="w-56 lg:w-[65%] rounded-3xl flex "
            />
          </div>
        </div>
        <div className="flex flex-col h-full justify-center items-center text-center w-full text-white">
          <div className="flex flex-col justify-start items-end h-full w-full text-2xl pt-24">
            <div>Why 3D Web</div>
            <p className="flex w-full items-end text-end justify-end text-sm pt-8">
              Every idea starts with a model
            </p>
            <p className="flex w-full items-end text-end justify-end text-sm pt-1">
              3D AR/VR experiences are gradually developing
            </p>
            <p className="flex w-full items-end text-end justify-end text-sm pt-1">
              Designing a web flow in 3D is exciting
            </p>
            <p className="flex w-full items-end text-end justify-end text-sm pt-1">
              3D web ui offers more creative interactions
            </p>
            <p className="flex w-full items-end text-end justify-end text-base pt-8">
              Why not to build 3D websites together?
            </p>
            <p className="flex w-full items-end text-end justify-end text-sm pt-8">
              Eagerly growing <br />
              understanding of :<br /> React
            </p>
            <p className="flex w-full items-end text-end justify-end text-sm pt-1">
              React Three Fiber
            </p>
            <p className="flex w-full items-end text-end justify-end text-sm pt-1">
              Javascript
            </p>
            <p className="flex w-full items-end text-end justify-end text-sm pt-1">
              THREE.js
            </p>
            <p className="flex w-full items-end text-end justify-end text-sm pt-1">
              Css
            </p>
            <p className="flex w-full items-end text-end justify-end text-sm pt-1">
              Tailwind
            </p>
            <p className="flex w-full items-end text-end justify-end text-sm pt-1">
              AI
            </p>
            <p className="flex w-full items-end text-end justify-end text-sm pt-1">
              And a curious mind <br />
              to discover more...
            </p>
          </div>
        </div>
        <AboutClientComponent />
      </div>
    </div>
  );
}
