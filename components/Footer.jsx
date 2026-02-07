import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-primary py-12 text-primary-foreground">
      <footer className="mx-auto my-0 max-w-5xl px-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm">
            <div>
              <p className="text-primary-foreground/60">
                © 2026 ASO. All Rights Reserved
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href={"/"}
                className="text-primary-foreground/70 transition-colors hover:text-secondary"
              >
                Instagram
              </Link>
              <Link
                href={"/"}
                className="text-primary-foreground/70 transition-colors hover:text-secondary"
              >
                Twitter
              </Link>
              <Link
                href={"/"}
                className="text-primary-foreground/70 transition-colors hover:text-secondary"
              >
                LinkedIn
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href={"/"}
                className="text-primary-foreground/70 transition-colors hover:text-secondary"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/"}
                className="text-primary-foreground/70 transition-colors hover:text-secondary"
              >
                ToS
              </Link>
              <Link
                href={"/"}
                className="text-primary-foreground/70 transition-colors hover:text-secondary"
              >
                Legal
              </Link>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20" />

          <div className="py-4 text-center">
            <h2 className="text-9xl font-black tracking-tight text-primary-foreground md:text-9xl">
              ASO
            </h2>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
