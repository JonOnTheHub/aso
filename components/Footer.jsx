import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <section className="mx-auto my-0 max-w-7xl px-4">
        {/* <div className="flex flex-col gap-8">
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
        </div> */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <p className="font-bold text-3xl">Aso</p>
            <p>Celebrating African heritage through modern fashion and design</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Shop</p>
            <div className="flex flex-col gap-4 font-light">
              <Link href="/catalogue">New Arrivals</Link>
              <Link href="/catalogue">Men</Link>
              <Link href="/catalogue">Women</Link>
              <Link href="/catalogue">Accessories</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Support</p>
            <div className="flex flex-col gap-4 font-light">
              <Link href="/catalogue">Help Center</Link>
              <Link href="/catalogue">Returns</Link>
              <Link href="/catalogue">Shipping Info</Link>
              <Link href="/catalogue">Size Guide</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Stay Connected</p>
            <div className="flex flex-row gap-4 font-light">
              <Link href="/catalogue">
                <Mail />
              </Link>
              <Link href="/catalogue">
                <Instagram />
              </Link>
              <Link href="/catalogue">
                <Twitter />
              </Link>
              <Link href="/catalogue">
                <Facebook />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <p>© 2026 Aso Fashion. All Rights Reserved</p>
          <div className="flex flex-row gap-4">
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;