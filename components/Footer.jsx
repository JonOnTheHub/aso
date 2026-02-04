import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-slate-900 py-12 text-white">
      <footer className="mx-auto my-0 max-w-5xl px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm">
            <div>
              <p className="text-slate-400">© 2026 ASO. All Rights Reserved</p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href={"/"}
                className="text-slate-300 transition-colors hover:text-white"
              >
                Instagram
              </Link>
              <Link
                href={"/"}
                className="text-slate-300 transition-colors hover:text-white"
              >
                Twitter
              </Link>
              <Link
                href={"/"}
                className="text-slate-300 transition-colors hover:text-white"
              >
                LinkedIn
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href={"/"}
                className="text-slate-300 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/"}
                className="text-slate-300 transition-colors hover:text-white"
              >
                ToS
              </Link>
              <Link
                href={"/"}
                className="text-slate-300 transition-colors hover:text-white"
              >
                Legal
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-700"></div>

          <div className="py-4 text-center">
            <h2 className="text-9xl font-black tracking-tight md:text-9xl">ASO</h2>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
