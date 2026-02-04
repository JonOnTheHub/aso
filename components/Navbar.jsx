import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-900 py-4 text-white">
      <div className="mx-auto my-0 flex max-w-5xl items-center justify-between">
        <Link
          href={"/"}
          className="text-3xl font-bold tracking-tight transition-colors hover:text-slate-300"
        >
          ASO
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href={"/"}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Home
          </Link>
          <Link
            href={"/catalogue"}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Catalogue
          </Link>
          <Link
            href={"/about"}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            About Us
          </Link>
          <Link
            href={"/contact"}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

{
  /* <header className="border-b border-slate-800 bg-slate-900 py-4 text-white">
  <div className="mx-auto my-0 flex max-w-5xl items-center justify-between px-6">
    <Link href={"/"} className="text-3xl font-bold tracking-tight transition-colors hover:text-slate-300">
      ASO
    </Link>
    <nav className="flex items-center gap-8">
      <Link href={"/"} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
        Home
      </Link>
      <Link href={"/about"} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
        About Us
      </Link>
      <Link href={"/portfolio"} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
        Portfolio
      </Link>
      <Link href={"/contact"} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
        Contact Us
      </Link>
    </nav>
  </div>
</header> */
}
