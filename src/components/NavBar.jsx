import Logo from "./Logo";

export default function NavBar() {
  const linksMenu = [
    {
      name: "Services",
      link: "#",
    },
    {
      name: "Our work",
      link: "#",
    },
    {
      name: "About us",
      link: "#",
    },
    {
      name: "Insights",
      link: "#",
    },
    {
      name: "Contact us",
      link: "#",
    },
  ];

  return (
    <div className="fixed z-[999] w-full py-5 px-10 max-w-screen-3xl -translate-x-1/2 left-1/2 flex items-center justify-between">
      <div className="w-2/6">
        <Logo />
      </div>
      <div className="flex justify-end gap-[2vw] items-start flex-1 text-xl font-light">
        {linksMenu.map((link, index) => (
          <a
            href="#"
            key={index}
            className={`font-montreal tracking-wide font-thin ${
              index === 4 && "ml-[315px]"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
