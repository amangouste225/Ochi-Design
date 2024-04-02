export default function Eyes() {
  return (
    <div className="w-full -z-10 h-screen overflow-hidden">
      <div className="relative bg-eyes h-full w-full bg-cover bg-center bg-no-repeat">
        <div className="absolute gap-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-between">
          <div className="w-[16rem] h-[16rem] relative bg-white rounded-full flex justify-center items-center">
            <div className="w-2/3 h-2/3 flex items-center bg-black rounded-full ">
              <span className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-2xl">
                play
              </span>
              <span className="h-10 w-full relative rotate-90 flex items-center px-1">
                <span className="h-6 w-6 bg-white absolute rounded-full"></span>
              </span>
            </div>
          </div>
          <div className="w-[16rem] h-[16rem] relative bg-white rounded-full flex justify-center items-center">
            <div className="w-2/3 h-2/3 flex items-center bg-black rounded-full ">
              <span className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-2xl">
                play
              </span>
              <span className="h-10 w-full relative rotate-0 flex items-center px-1">
                <span className="h-6 w-6 bg-white absolute rounded-full"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
