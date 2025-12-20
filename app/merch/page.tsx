"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function CardWithForm() {
  return (
    <>
      {/* Interactive Background */}
      <InteractiveBackground />

      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        <div className="mt-0 mb-0 text-center">
          <p
            className="font-bold text-3xl inline-block"
            style={{
              background: "linear-gradient(180deg, #F1E821, #23C0AD,#487AFA )",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Merchandise
          </p>
        </div>

        <hr />

        {/* Cards Container */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 mt-5 lg:mt-5">
          {/* Card 1 */}
          <Card className="w-[90%] sm:w-[48%] md:w-[45%] lg:w-[40%] xl:w-[35%] bg-transparent border border-black bg-white rounded-lg">
            <CardContent>
              <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-md">
                <Image
                  unoptimized
                  src="/images/T-Shirt Front.png"
                  alt="E-Summit 2024 Merchandise Front"
                  width={600}
                  height={450}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="w-[90%] sm:w-[48%] md:w-[45%] lg:w-[40%] xl:w-[35%] bg-transparent border border-white bg-white rounded-lg">
            <CardContent>
              <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-md">
                <Image
                  unoptimized
                  src="/images/T-Shirt Back.png"
                  alt="E-Summit 2024 Merchandise Back"
                  width={600}
                  height={450}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Button for redirecting to Google Forms */}
        <Link
          href="https://forms.gle/ybXS7KoaHxqDSkH79"
          target="_blank"
          passHref
        >
          <Button
            className="mt-5"
            variant={"default"}
            style={{
              background:
                "linear-gradient(120deg, #F1E821, #23C0AD,#487AFA )",
              color: "white",
              border: "none",
              padding: "0.5rem 1.5rem",
              fontWeight: "bold",
              borderRadius: "0.375rem",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Buy Merch
          </Button>
        </Link>
      </div>
    </>
  );
}
