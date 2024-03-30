import { LuArrowUpRight } from "react-icons/lu";
import Images1 from "../assets/content-image01.jpg";

export default function Landing() {
  return (
    <div className="max-w-screen-3xl mx-auto h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-48 px-10">
        {["We create", "Eye Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker overflow-hidden">
            <div className="w-fit flex gap-[1vw] items-end">
              {index === 1 && (
                <div className="bg-red-900 overflow-hidden w-[9vw] h-[6vw] rounded-md">
                  <img
                    src={Images1}
                    alt="Landing"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <h1 className="font-grotesk h-full uppercase text-[9vw] leading-[7vw] font-normal">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex items-center px-20 pt-5 justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-xl font-light tracking-wider leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2 justify-end">
          <button className="px-6 border-zinc-400 py-2 border uppercase tracking-wider font-light rounded-full">
            Start the project
          </button>

          {/* ARROWS */}
          <LuArrowUpRight
            className="border border-[1px] border-zinc-400 rounded-full p-1.5 text-zinc-400"
            size={40}
          />
        </div>
      </div>
    </div>
  );
}
