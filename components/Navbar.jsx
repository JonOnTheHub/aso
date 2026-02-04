import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-slate-900 py-4 text-white">
      <div className="flex justify-between items-center mx-auto my-0 max-w-5xl px-6">
        <Link href={"/"} className="text-3xl font-bold">
          ASO
        </Link>
        <div className="flex justify-between items-center gap-16">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

{/* <header className="bg-slate-900 py-4 text-white">
      <div className="flex justify-between items-center mx-auto my-0 max-w-5xl">
        <Link href={"/"} className="text-3xl font-bold">
          Aso
        </Link>
        <div className="flex justify-between items-center gap-16">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </div>
    </header> */}