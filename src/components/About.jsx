import Homepage from "../assets/Homepage-Photo.jpg";
import Button from "./Button";
export default function About() {
  return (
    <div className="w-full bg-[#CDEA68] relative z-50 rounded-[2.5rem] -my-8 text-black h-[95em]">
      <div className="px-10 py-20 border-slate-700 border-b-[1px]">
        <h1 className="font-montreal whitespace-wrap text-[3.7vw] w-5/6 leading-none font-normal">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to
          <span className="mx-5">
            raise funds, sell products, explain complex ideas,
          </span>
          and
          <span className="mx-5">hire great people.</span>
        </h1>
      </div>
      <div className="px-10 justify-end flex text-[1.3rem] font-normal py-5">
        <div className="justify-start w-1/2">
          <h6>What you can expect :</h6>
        </div>
        <div className="flex gap-10 w-1/2">
          <h6 className="flex gap-10 flex-col w-1/2 max-w-[350px]">
            <span>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it is live or digital,
              delivered for one or a hundred people.
            </span>
            <span>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing and captivating.
            </span>
          </h6>
          <h6 className="w-1/2 flex flex-col justify-end items-center">
            <span className="flex flex-col w-fit">
              <span className="mb-10">S:</span>
              <a className="underline" href="#">
                Instagram
              </a>
              <a className="underline" href="#">
                LinkedIn
              </a>
              <a className="underline" href="#">
                Behance
              </a>
              <a className="underline" href="#">
                Facebook
              </a>
            </span>
          </h6>
        </div>
      </div>
      <div className="px-10 border-slate-700 border-t-[1px] mt-16">
        <div className="max-w-screen-3xl mx-auto flex w-full py-5">
          <div className="w-1/2">
            <h1 className="font-montreal whitespace-wrap text-[3.5vw]  w-4/5 leading-tight font-normal">
              Our Approach :
            </h1>
            <Button />
          </div>
          <div className="w-1/2 ">
            <img
              src={Homepage}
              alt="homepage"
              className="w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
