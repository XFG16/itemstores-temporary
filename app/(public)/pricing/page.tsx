"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/useMobile";
import { ArrowDown, ArrowLeftRight, Check, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUsps } from "react-icons/fa";

export default function PricingPage() {
  const isMobile = useIsMobile(640);
  const [monthlyLabels, setMonthlyLabels] = useState(50);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#reality-check") {
      const realityCheckSection = document.getElementById("reality-check");
      if (realityCheckSection) {
        const yOffset = -200; // 200 pixels above the element
        const y =
          realityCheckSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, []);

  // Calculate savings based on average shipping label cost of $8
  const avgLabelCost = 8;
  const discount = 0.5; // 50% off
  const regularCost = monthlyLabels * avgLabelCost;
  const discountedCost = regularCost * (1 - discount);
  const monthlySavings = regularCost - discountedCost;
  const yearlySavings = monthlySavings * 12;
  const monthsToPayoff =
    monthlySavings > 0 ? Math.ceil(499 / monthlySavings) : 0;

  // Competitor data for the overcharge section
  const competitors = [
    {
      name: "OrderMyGear",
      logo: "/static/images/logos/ordermygear.png",
      width: 80,
      height: 45,
      cost: ["$1,899 upfront", "$49/store/mo", "6.85% + $0.30 fee"],
    },
    {
      name: "Deconetwork",
      logo: "/static/images/logos/deconetwork.png",
      width: 130,
      height: 65,
      cost: ["$499 upfront", "$3,588/year", "Hidden fees"],
    },
    {
      name: "Chipply",
      logo: "/static/images/logos/chipply.png",
      width: 100,
      height: 50,
      cost: ["$1,000 upfront", "6.4% + $0.30 fee"],
    },
    {
      name: "Inksoft",
      logo: "/static/images/logos/inksoft.png",
      width: 120,
      height: 60,
      cost: ["$3,768/year", "Hidden fees"],
    },
    {
      name: "Shopify",
      logo: "/static/images/logos/shopify.png",
      width: 120,
      height: 60,
      cost: ["$3,588/year", "No custom links", "Add. fees"],
    },
  ];

  return (
    <div className="mt-32 sm:mt-44 flex justify-center">
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 flex justify-center items-center flex-col w-full max-w-[945px] pb-20">
        {/* <h2 className="text-2xl font-medium tracking-tight text-neutral-500 line-through">
          Annoying monthly subscriptions
        </h2> */}
        <h1 className="mx-4 text-[40px] sm:text-5xl md:text-[56px] lg:text-[64px] font-semibold tracking-tighter lg:tracking-[-0.3rem] leading-[40px] md:leading-[56px] lg:leading-[64px] text-center">
          Beautiful online stores for free.
          {/* {" "}
          <span className="bg-gradient-to-br from-emerald-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
            free.
          </span> */}
        </h1>
        <h2 className="mt-8 text-sm text-neutral-500 sm:mx-4 text-center">
          Built on top of your favorite services
        </h2>
        <div className="mt-8 flex items-center space-x-6 sm:space-x-9 [&>*]:h-fit [&>*]:pointer-events-none [&>*]:select-none">
          <Image
            src="/static/images/logos/aws.png"
            alt="AWS Logo"
            width={70}
            height={50}
            className="opacity-[68%] w-12 sm:w-16"
            style={{ filter: "brightness(0)" }}
          />
          <Image
            src="/static/images/logos/stripe.png"
            alt="Stripe Logo"
            width={90}
            height={50}
            className="opacity-[68%] w-14 sm:w-20"
            style={{ filter: "brightness(0)" }}
          />
          <Image
            src="/static/images/logos/usps.svg"
            alt="USPS Logo"
            width={180}
            height={70}
            className="mb-1 grayscale w-[140px] sm:w-40"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 sm:mt-24 w-full">
          <Card className="w-full pb-3">
            <CardHeader className="pb-0">
              <CardTitle className="font-semibold text-2xl tracking-tighter">
                Starter license
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <h1 className="font-semibold text-[40px] tracking-tighter">
                  $0
                </h1>
                <p className="mb-2.5 text-muted-foreground">Free forever</p>
              </div>
              <p>For small stores and those who are just starting out.</p>
              <Button
                className="w-full mt-4 h-10 text-base font-normal"
                variant="secondary"
                size="mdRounded"
                asChild
              >
                <Link href="/auth/signup"> Start for free</Link>
              </Button>
              <ul className="mt-8 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> 5 stores per month
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> 20 products per
                  store
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-blue-500 mt-1" />
                  <div className="space-y-1">
                    <p>Heavily discounted USPS shipping labels</p>
                    <p className="text-sm text-blue-500">
                      Up to 50% off retail rates
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> $0 website hosting
                  fees
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> Online stores that
                  actually look good
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> Automatic tax
                  collection
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> Refund and dispute
                  handling
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> 5.9% platform fee
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mt-6 lg:mt-0 w-full pb-3 border-2 border-blue-500 relative">
            <div className="absolute -top-6 left-5">
              <p className="bg-blue-500 text-white text-sm font-medium tracking-tight px-2 h-6 flex items-center rounded-t-lg shadow">
                One-time purchase
              </p>
            </div>
            <CardHeader className="pb-0">
              <CardTitle className="font-semibold text-2xl tracking-tighter">
                Full license
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <h1 className="font-semibold text-[40px] tracking-tighter">
                  $399
                </h1>
                <p className="mb-2.5 text-muted-foreground line-through">
                  $499
                </p>
                <p className="mb-2.5 bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent">
                  (20% off)
                </p>
              </div>
              <p>
                Experience the full power of Itemstores and maximize savings as
                your business scales.
              </p>
              <Button
                className="w-full mt-4 h-10 text-base"
                variant="vibrant"
                size="mdRounded"
                asChild
              >
                <Link href="/auth/signup">Unlock all features</Link>
              </Button>
              <ul className="mt-8 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> 100 stores per
                  month
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> 200 products per
                  store
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-blue-500 mt-1" />
                  <div className="space-y-1">
                    <p>Heavily discounted USPS shipping labels</p>
                    <p className="text-sm text-blue-500">
                      Up to 50% off retail rates
                      <br />
                      Live shipment tracking
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> $0 website hosting
                  fees
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> Online stores that
                  actually look good
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> Automatic tax
                  collection
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> Refund and dispute
                  handling
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-blue-500 mt-1" />
                  <div className="space-y-1">
                    <p>2.9% platform fee</p>
                    <p className="text-sm text-blue-500">
                      Save 3% per transaction compared to starter license
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-blue-500" /> Priority customer
                  support
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card
          className="!mt-10 relative w-full pb-3 border-2 border-red-500"
          id="reality-check"
        >
          <p className="-top-6 left-5 absolute bg-destructive text-white w-fit px-2 h-6 flex items-center text-sm mb-4 rounded-t font-medium tracking-tight">
            Reality check <ArrowDown className="ml-0.5 inline-block size-4" />
          </p>
          <CardHeader className="pb-4">
            <CardTitle className="font-semibold text-2xl tracking-tighter leading-tight">
              Don&apos;t get{" "}
              <span className="text-destructive">overcharged</span> for
              launching online stores
            </CardTitle>
            <p className="hidden sm:block">
              Itemstores outprices other platforms because we only focus on the
              features that matter. Unlike other software, our platform has no
              fluff and no hidden fees.
            </p>
          </CardHeader>
          <CardContent className="mt-2">
            {/* Competitor layout: two-column grid, each box split left (logo + name) and right (cost) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {competitors.map((c) => (
                <div
                  key={c.name}
                  className="bg-red-50/80 hover:bg-red-100/60 transition-colors relative flex items-stretch justify-between sm:gap-4 rounded-lg p-4 sm:px-8 sm:py-6 overflow-hidden"
                >
                  <div className="relative flex flex-col items-center justify-center gap-2 min-w-0 text-center z-10">
                    <Image
                      src={c.logo}
                      alt={`${c.name} Logo`}
                      width={c.width}
                      height={c.height}
                      className="sm:shrink-0 pointer-events-none select-none w-20 sm:w-auto"
                    />
                    {/* <p className="text-xs font-medium text-muted-foreground leading-snug max-w-[150px]">
                      {c.name}
                    </p> */}
                  </div>
                  <div className="z-10 flex items-center">
                    <div className="max-w-[300px] text-red-500 font-semibold tracking-tighter text-right space-y-0.5">
                      {c.cost.map((costItem, index) => (
                        <div
                          key={index}
                          className="text-xl sm:text-2xl leading-tight"
                        >
                          <span className="inline-flex w-full items-center justify-end gap-2">
                            <span>{costItem}</span>
                            {costItem === "Hidden fees" && (
                              <TooltipProvider delayDuration={150}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      type="button"
                                      className="text-red-500/80 hover:text-red-600 mt-[1px]"
                                      aria-label="Hidden fees details"
                                    >
                                      <Info
                                        className="size-4 lg:size-5"
                                        strokeWidth={2.5}
                                      />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-[240px]">
                                    Platform/card processing fees not mentioned
                                    on website
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                            {costItem === "Add. fees" && (
                              <TooltipProvider delayDuration={150}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      type="button"
                                      className="text-red-500/80 hover:text-red-600 mt-[1px]"
                                      aria-label="Additional fees details"
                                    >
                                      <Info
                                        className="size-4 lg:size-5"
                                        strokeWidth={2.5}
                                      />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-[240px]">
                                    Extra platform/card processing fees
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="w-full mt-4 pb-2">
          <CardHeader className="pb-0 flex-row justify-between">
            <div className="space-y-1.5">
              <CardTitle className="font-semibold text-2xl tracking-tighter flex items-start gap-2">
                <FaUsps className="size-[30px] mt-[1px]" /> Ship and save
              </CardTitle>{" "}
              <p>
                Purchase {monthlyLabels} shipping labels per month and the full
                license pays for itself in{" "}
                <span className="inline-block font-semibold tracking-tight bg-emerald-50 px-1.5 py-0.5 rounded text-emerald-600">
                  {monthsToPayoff > 0 ? monthsToPayoff : "—"}{" "}
                  {monthsToPayoff === 1 ? "month" : "months"}
                </span>
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-10 mt-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-lg space-y-2">
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Original cost per month
                    <TooltipProvider delayDuration={150}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className="text-muted-foreground/80 hover:text-muted-foreground inline-block ml-1 translate-y-[2px]"
                            aria-label="Original cost per month assumption"
                          >
                            <Info className="size-3.5" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[220px] text-xs">
                          Assumes $8 per shipping label
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="font-semibold text-4xl md:text-[40px] tracking-tighter py-2 text-neutral-900">
                    ${regularCost.toLocaleString()}
                  </div>
                </div>

                <div className="rounded-lg space-y-2">
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Itemstores discount
                  </div>
                  <div className="font-semibold text-4xl md:text-[40px] tracking-tighter py-2 text-emerald-800">
                    -50%
                  </div>
                </div>

                <div className="rounded-lg space-y-2">
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Savings per month
                  </div>
                  <div className="font-semibold text-4xl md:text-[40px] tracking-tighter py-2 text-emerald-600">
                    ${monthlySavings.toLocaleString()}
                  </div>
                </div>

                <div className="rounded-lg space-y-2">
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Savings per year
                  </div>
                  <div className="font-semibold text-4xl md:text-[40px] tracking-tighter py-2 text-emerald-600">
                    ${yearlySavings.toLocaleString()}
                  </div>
                </div>
              </div>

              <div>
                <Slider
                  min={0}
                  max={500}
                  step={10}
                  value={[monthlyLabels]}
                  onValueChange={(value) => setMonthlyLabels(value[0])}
                  className="w-full"
                />
                <div className="grid grid-cols-3 mt-2 text-sm text-muted-foreground">
                  <p>0</p>
                  <p className="text-neutral-900 text-center">Labels</p>
                  <p className="text-right">500+</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full mt-4 border-2 border-red-600">
          <CardHeader>
            <CardTitle className="font-semibold text-2xl tracking-tighter flex items-start gap-2">
              <ArrowLeftRight className="mt-[3px]" /> Switching from another
              platform?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-red-600 rounded-lg p-4 mb-3 pt-3.5 text-white">
              <h3 className="font-semibold text-xl sm:text-2xl tracking-tight mb-1">
                Our free migration promise
              </h3>
              <p className="text-sm sm:text-base">
                Show us proof of your current platform subscription/license and
                we&apos;ll upgrade you to the full license for free.
              </p>
            </div>
            <div className="flex items-center gap-4 sm:gap-5 mt-6 mb-2">
              <h1 className="line-through text-4xl sm:text-[48px] text-neutral-400 font-light">
                $499
              </h1>
              <Button
                size={isMobile ? "mdRounded" : "lgRounded"}
                variant={"outlineHeavy"}
                className="font-normal"
                asChild
              >
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full mt-4 pb-4">
          <CardHeader className="pb-0 flex-row justify-between">
            <div className="space-y-3">
              <CardTitle className="hidden sm:block font-semibold text-2xl tracking-tighter">
                We proudly partner with
              </CardTitle>
              <Image
                src="/static/images/logos/stripe.png"
                alt="Stripe Logo"
                width={100}
                height={50}
                className="w-24 sm:w-auto"
              />
            </div>
            <div className="flex flex-col items-end gap-1 mr-1.5">
              <h1 className="font-semibold text-2xl tracking-tighter leading-none">
                2.9% + $0.30
              </h1>
              <p className="mb-2.5 text-muted-foreground text-sm sm:text-base">
                Card processing fee
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="mt-4 space-y-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-blue-500" /> Secure payment
                processing
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-blue-500" /> Support for 135+
                currencies
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-blue-500" /> Fast payouts to your
                bank account
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-blue-500" /> Fraud prevention
                tools
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-blue-500" /> Integrated payment
                forms
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-blue-500" /> Priority customer
                support
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-16 sm:mt-20 w-full max-w-[600px] flex flex-col items-center">
          <h1 className="font-semibold text-4xl tracking-tighter text-center">
            Frequently asked questions
          </h1>
          <Accordion
            type="multiple"
            className="w-full mt-12 px-6 sm:px-0 sm:mt-16"
          >
            <AccordionItem value="item-0">
              <AccordionTrigger className="text-md">
                Are there any subscription fees?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500">
                No. You pay once for the full license and get lifetime access to
                all features.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-md">
                How do I get paid?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500">
                Customer payments initially go to your Itemstores account. Once
                orders are placed, payouts to your bank account follow
                Stripe&apos;s standard schedule (usually 2-3 business days).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-md">
                What payment methods are supported?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500">
                All major credit/debit cards are accepted at checkout.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-md">
                Can I print packing slips?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500">
                Absolutely. You can generate packing slips and download order
                reports for easy fulfillment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-md">
                Can I buy shipping labels?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500">
                Absolutely. You can buy and print (discounted) shipping labels
                directly from Itemstores. We also offer calculated shipping
                rates based on customer location and package weight.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-md">
                How does calculated shipping work?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500">
                Calculated shipping uses real-time rates from major carriers
                like USPS. Rates are based on package weight, dimensions, and
                destination. We do the heavy lifting so you can focus on
                selling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-md">
                Can I let the customer pick up their items in store?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500">
                Absolutely. You can enable free shipping and give them
                instructions for in-store pickup at checkout.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-md">
                Are payments and payouts secure?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500">
                Absolutely. We partner with Stripe to handle payments. Stripe is
                certified as PCI Service Provider Level 1. This is the most
                stringent level of certification available in the industry.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-md">
                Can I refund a customer?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500">
                Absolutely. You can issue refunds directly from Itemstores.
                However, you will need to communicate with the customer on your
                own (typically by email or phone).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
