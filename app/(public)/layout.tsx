"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useMobile";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile(1100);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 75 && currentScrollY > lastScrollY) {
        setHeaderOpacity(0);
      } else {
        setHeaderOpacity(1);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <header
        className="border-b-[1px] border-b-gray-300 fixed flex w-full flex-col bg-white z-50 transition-opacity duration-300 overflow-x-hidden"
        style={{
          opacity: headerOpacity,
          pointerEvents: headerOpacity ? "all" : "none",
        }}
      >
        <div className="w-full bg-gradient-to-r from-blue-800 via-purple-700 to-red-400">
          <Link href="/pricing#reality-check" className="group block w-full">
            <div className="mx-auto max-w-content-large flex justify-center items-center text-xs sm:text-sm gap-0.5 px-4 sm:px-6 py-2.5 font-medium text-white group-hover:opacity-70 transition-opacity">
              <div className="flex items-center justify-center flex-wrap gap-x-1">
                <span className="text-center whitespace-nowrap">
                  Save 90% per year compared to other platforms
                </span>
                <ArrowRight className="inline-block size-3 sm:size-4 text-white flex-shrink-0" />
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex items-center justify-between w-full max-w-content-large px-4 sm:px-6 md:px-10 xl:px-20 py-3">
            <div className="flex items-center gap-3 sm:gap-5 lg:gap-7 [&>a]:py-0.5 mr-2 sm:mr-4 lg:mr-6">
              <Link
                href="/"
                className="hover:opacity-70 transition-opacity w-fit flex items-center gap-2.5"
              >
                <p className="font-semibold text-2xl sm:text-3xl tracking-tighter mr-4">
                  itemstores/
                </p>
              </Link>
              {!isMobile && (
                <>
                  <Link
                    href="/solutions"
                    className="border-b-2 border-transparent hover:opacity-60 hover:border-neutral-700 transition-all"
                  >
                    Solutions
                  </Link>
                  <Link
                    href="/examples"
                    className="border-b-2 border-transparent hover:opacity-60 hover:border-neutral-700 transition-all"
                  >
                    Example stores
                  </Link>
                  <Link
                    href="/blog"
                    className="border-b-2 border-transparent hover:opacity-60 hover:border-neutral-700 transition-all"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/pricing"
                    className="border-b-2 border-transparent hover:opacity-60 hover:border-neutral-700 transition-all"
                  >
                    Pricing
                  </Link>
                </>
              )}
            </div>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              {!isMobile ? (
                <>
                  <Link
                    href="/auth/login"
                    className="hidden lg:block mr-0 sm:mr-2.5 border-b-2 py-0.5 border-transparent hover:opacity-60 hover:border-neutral-700 transition-all text-sm lg:text-base"
                  >
                    Log in
                  </Link>
                  <Button
                    variant="outlineHeavy"
                    size="lgRounded"
                    asChild
                    className="hidden md:flex"
                  >
                    <Link href="/demo">Request a demo</Link>
                  </Button>
                  <Button
                    size="lgRounded"
                    asChild
                    className="text-sm sm:text-base px-4 sm:px-6"
                  >
                    <Link href="/auth/signup">Start for free</Link>
                  </Button>
                </>
              ) : (
                <Link href="/auth/signup" className="text-sm sm:text-base underline mr-2">
                  Start for free
                </Link>
              )}

              {/* Mobile Menu */}
              {isMobile && (
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <span className="hover:opacity-60 cursor-pointer">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle menu</span>
                    </span>
                  </SheetTrigger>
                  <SheetContent
                    side="bottom"
                    className="bg-white max-w-[600px] w-full h-full flex flex-col"
                  >
                    <nav className="flex flex-col gap-0 mt-8 flex-1">
                      <Link
                        href="/solutions"
                        className="text-2xl tracking-tight py-4 border-b border-gray-200 hover:opacity-60 transition-opacity"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Solutions
                      </Link>
                      <Link
                        href="/examples"
                        className="text-2xl tracking-tight py-4 border-b border-gray-200 hover:opacity-60 transition-opacity"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Example stores
                      </Link>
                      <Link
                        href="/blog"
                        className="text-2xl tracking-tight py-4 border-b border-gray-200 hover:opacity-60 transition-opacity"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/pricing"
                        className="text-2xl tracking-tight py-4 border-b border-gray-200 hover:opacity-60 transition-opacity"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Pricing
                      </Link>
                      <div className="mt-auto pb-4 flex flex-col gap-2">
                        <Button
                          variant="outlineHeavy"
                          size="lgRounded"
                          asChild
                          className="w-full rounded-full border-2"
                        >
                          <Link
                            href="/auth/login"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Log in
                          </Link>
                        </Button>
                        <Button
                          size="lgRounded"
                          asChild
                          className="w-full rounded-full"
                        >
                          <Link
                            href="/auth/signup"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Start for free
                          </Link>
                        </Button>
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="pt-4 pb-24 w-full">{children}</main>
    </div>
  );
}
