"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import BrowserMockup from "./_components/browserMockup";
import { Globe } from "lucide-react";
import { useIsMobile } from "@/hooks/useMobile";

export default function App() {
  const mobile = useIsMobile(640);

  return (
    <div>
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pb-8 flex justify-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" />
        <div className="mt-[80px] sm:mt-24 md:mt-28 w-full max-w-content relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] xl:text-[72px] tracking-tighter lg:tracking-[-0.3rem] font-semibold !mt-10 leading-tight sm:leading-[64px] md:leading-[72px] lg:leading-[88px] xl:leading-[96px]">
              Launch your{" "}
              <Link
                href="/auth/signup"
                className="gap-1 inline-flex items-center hover:opacity-90 transition-opacity ml-0.5 rounded-lg animate-slide-reveal bg-blue-600 text-white px-2 py-1.5 sm:px-3 sm:py-2 md:pl-3 md:pr-4 md:py-3 xl:pl-4 xl:pr-5 xl:py-4 leading-none"
              >
                item.store/today
              </Link>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl px-4 sm:px-0 mt-6 sm:mt-8">
              Itemstores provides everything you need to rapidly launch{" "}
              <Link
                href="/examples"
                className="hover:opacity-80 inline-block border-b-2 border-b-gray-700"
              >
                <Globe className="inline size-4 sm:size-5 mb-0.5" /> online
                stores
              </Link>{" "}
              at the lowest cost in the industry.
            </p>
            <div className="w-full py-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-3 sm:mt-6">
              <Button
                size={mobile ? "mdRounded" : "lgRounded"}
                variant="outlineHeavy"
                asChild
                className="w-full sm:w-auto font-normal"
              >
                <Link href="/demo">Request a demo</Link>
              </Button>
              <Button
                size={mobile ? "mdRounded" : "lgRounded"}
                asChild
                className="w-full sm:w-auto font-normal"
              >
                <Link href="/auth/signup">Start for free</Link>
              </Button>
              {!mobile && (
                <p className="text-center sm:text-left leading-5 text-muted-foreground text-sm sm:text-base">
                  $0/mo
                  <br />
                  Free forever
                </p>
              )}
            </div>
          </div>
          <div className="relative mt-8 sm:mt-16 w-full flex justify-center">
            <BrowserMockup />
          </div>
        </div>
      </div>
    </div>
  );
}
