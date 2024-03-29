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
      name: "Contact",
      link: "#",
    },
  ];

  return (
    <div className="fixed z-[999] w-full px-10 py-5  max-w-screen-3xl mx-auto flex items-center justify-between">
      <div className="logo w-3/6">
        <Logo />
      </div>
      <div className="flex justify-end gap-5 items-start flex-1 text-xl font-light">
        {linksMenu.map((link, index) => (
          <a
            href="#"
            key={index}
            className={`font-default tracking-wide font-thin ${
              index === 4 && "ml-[300px]"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
