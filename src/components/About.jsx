export default function About() {
  return (
    <div className="w-full py-28 bg-[#CDEA68] rounded-t-[2.5rem] -mt-8 mb-10 text-black  h-[50vw]">
      <div className="px-20 border-b-zinc-900 border-b pb-20">
        <h1 className="font-montreal text-[2.8vw] leading-tight font-normal w-2/3">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to
          <span className="border-b-2 border-black mx-5">
            raise funds, sell products, explain complex ideas,
          </span>
          and
          <span className="border-b-2 border-black mx-5">
            hire great people.
          </span>
        </h1>
      </div>
      <div className="px-20 flex text-[1.4rem] font-normal py-10">
        <div className="justify-start w-2/4">
          <h6>What you can expect :</h6>
        </div>
        <div className="flex gap-10 w-1/4">
          <h6 className="flex gap-10 flex-col">
            <span>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it is live or digital,
              delivered for one or a hundred people.
            </span>
            <span>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing and captivating
            </span>
          </h6>
        </div>
        <div className="px-20 justify-end items-end gap-5 flex flex-col w-2/5">
          <h6 className="flex flex-col tracking-wide">
            <span className="text-2xl mb-5">S:</span>
            <a className="hover:underline" href="#">
              Instagram
            </a>
            <a className="hover:underline" href="#">
              Facebook
            </a>
            <a className="hover:underline" href="#">
              Linkedlin
            </a>
            <a className="hover:underline" href="#">
              Twitter
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}
