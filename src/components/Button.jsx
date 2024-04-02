import { MdArrowOutward } from "react-icons/md";

export default function Button() {
  return (
    <button className="border bg-black text-white h-[4.5rem] w-56 text-lg relative flex items-center justify-between gap-5 rounded-full border-black px-5 uppercase">
      <span>read more</span>
      <span className="bg-white absolute right-2 rounded-full flex items-center p-2 justify-center w-14 h-14">
        <MdArrowOutward color="black" />
      </span>
    </button>
  );
}
