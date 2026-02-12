"use client";

import { Camera, ShareIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

/**
 * Simplified mockup:
 * - No slide arrays
 * - Both images are always in the DOM
 * - We crossfade by toggling wrapper opacity only (no "loaded" opacity gating)
 */
export default function Mockup() {
  const [browserA, setBrowserA] = useState(false);
  const [phoneA, setPhoneA] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  // Ref to the visible mockup element so the arrow can scroll it into view
  const mockupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const browserId = setInterval(() => {
      setBrowserA((v) => !v);
    }, 10000);

    const phoneId = setInterval(() => {
      setPhoneA((v) => !v);
    }, 8000);

    return () => {
      clearInterval(browserId);
      clearInterval(phoneId);
    };
  }, []);

  return (
    <div
      className={`relative w-full transition-opacity duration-500 ${
        hasMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-center gap-6">
        {/* Browser frame */}
        <div className="relative hidden sm:block sm:flex-1 max-w-[1200px] xl:mr-10">
          <div className="bg-neutral-100 rounded-xl border border-neutral-300 overflow-hidden aspect-[16/9] flex flex-col">
            {/* Browser header */}
            <div className="flex items-center px-4 py-2 bg-neutral-100 flex-shrink-0">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="flex-1 ml-4">
                <div className="bg-white rounded-lg px-2.5 py-1.5 text-sm text-neutral-700">
                  item.store/your-website-here
                </div>
              </div>
            </div>

            {/* Browser content (two layers always present; crossfade wrappers) */}
            <div className="relative flex-1 min-h-0">
              {/* Layer A (image) */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  browserA ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={browserA ? undefined : true}
              >
                <Image
                  src="/static/images/demo1.png"
                  alt="Demo image"
                  fill
                  sizes="(min-width: 768px) 1200px, 100vw"
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>

              {/* Layer B (image) */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  browserA ? "opacity-0" : "opacity-100"
                }`}
                aria-hidden={browserA ? true : undefined}
              >
                <Image
                  src="/static/images/demo8.png"
                  alt="Demo image 3"
                  fill
                  sizes="(min-width: 768px) 1200px, 100vw"
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Phone mockup */}
        <div
          ref={mockupRef}
          className="bg-white relative w-full h-full max-w-[430px] lg:max-w-[330px] aspect-[1/1.98] rounded-3xl border border-neutral-300 shadow-lg block sm:hidden xl:block xl:-ml-48 translate-y-12 xl:translate-y-28 xl:z-20 mx-auto xl:mx-0"
        >
          <div className="absolute inset-3 rounded-2xl border overflow-hidden flex flex-col">
            {/* Phone header with search */}
            <div className="p-2 z-20">
              <div className="bg-neutral-200 bg-opacity-80 backdrop-blur-sm rounded-full px-2.5 py-1.5 flex items-center justify-between gap-2 shadow-sm">
                <Camera className="size-4 text-neutral-700" />
                <div className="text-sm text-neutral-700">
                  item.store/your-website-here
                </div>
                <ShareIcon className="size-4 text-neutral-700" />
              </div>
            </div>

            {/* Content area (images) */}
            <div className="relative flex-1">
              {/* Layer A (image) */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  phoneA ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={phoneA ? undefined : true}
              >
                <Image
                  src="/static/images/demo2.png"
                  alt="Demo mobile image"
                  fill
                  sizes="(min-width: 1280px) 330px, 240px"
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>

              {/* Layer B (image - demo4) */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  phoneA ? "opacity-0" : "opacity-100"
                }`}
                aria-hidden={phoneA ? true : undefined}
              >
                <Image
                  src="/static/images/demo4.png"
                  alt="Demo mobile image 4"
                  fill
                  sizes="(min-width: 1280px) 330px, 240px"
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
