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

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          <div className="space-y-4">
            <p className="text-3xl font-bold tracking-tight">ASO</p>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Celebrating African heritage through modern fashion and design.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Shop
            </p>
            <div className="flex flex-col gap-2 text-sm font-light text-primary-foreground/70">
              <Link href="/catalogue" className="hover:text-secondary transition-colors">
                New Arrivals
              </Link>
              <Link href="/catalogue" className="hover:text-secondary transition-colors">
                Men
              </Link>
              <Link href="/catalogue" className="hover:text-secondary transition-colors">
                Women
              </Link>
              <Link href="/catalogue" className="hover:text-secondary transition-colors">
                Accessories
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Support
            </p>
            <div className="flex flex-col gap-2 text-sm font-light text-primary-foreground/70">
              <Link href="/help" className="hover:text-secondary transition-colors">
                Help Center
              </Link>
              <Link href="/returns" className="hover:text-secondary transition-colors">
                Returns
              </Link>
              <Link href="/shipping" className="hover:text-secondary transition-colors">
                Shipping Info
              </Link>
              <Link href="/size-guide" className="hover:text-secondary transition-colors">
                Size Guide
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Stay Connected
            </p>
            <div className="flex items-center gap-5 font-light text-primary-foreground/70">
              <Link href="#" className="hover:text-secondary transition-colors">
                <Mail size={18} />
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Facebook size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-primary-foreground/15" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-primary-foreground/60 md:flex-row">
          <p>© 2026 ASO Fashion. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </footer>

  );
};

export default Footer;