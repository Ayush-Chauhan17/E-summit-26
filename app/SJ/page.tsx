import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SJPage() {
  const logos = [
    { src: "/images/logo1.png", alt: "Logo 1" },
    { src: "/images/logo2.jpg", alt: "Logo 2" },
    { src: "/images/logo3.png", alt: "Logo 3" },
    { src: "/images/logo4.jpg", alt: "Logo 4" },
  ];

  return (
    <div className="min-h-screen mt-20 text-gray-100 bg-[#0A0A0A]">
      <section className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
          <div className="w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#487AFA]">
              Startup Junction 2025
            </h1>
            <p className="text-xl md:text-2xl text-[#23C0AD] mb-6 italic">
              Where Ambition Meets Investment
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4 text-gray-300">
              An exclusive forum connecting high-potential startups with India’s top
              venture firms — in Bangalore, Delhi, and Ahmedabad.
            </p>
            <p className="text-lg font-medium mb-6 text-gray-200">
              Date:{" "}
              <span className="text-[#F1E821] font-semibold">December 6, 2025</span>
            </p>

        
            <div className="flex flex-col items-center gap-4">

              <Button
                asChild
                className="px-8 py-3 text-lg font-semibold text-black bg-gradient-to-r from-[#F1E821] via-[#23C0AD] to-[#487AFA] hover:opacity-90 transition-all duration-200"
              >
                <Link href={"/payment?type=startup_junction"}>Register Now</Link>
              </Button>

            
              <div className="mt-6 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">

                  {logos.map((lg, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center bg-[#0f0f0f]/80 border border-[#2b2b2b] rounded-xl p-5 shadow-lg h-44"
                    >
                      <div className="relative w-44 h-24 sm:w-56 sm:h-32">
                        <Image
                          src={lg.src}
                          alt={lg.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#487AFA]">
          About Startup Junction
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-300 mb-8">
          India’s metros are bursting with entrepreneurial energy — but many
          events prioritize quantity over quality. Startup Junction changes the
          game by handpicking founders and investors to foster meaningful,
          sector-focused connections.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "20+ Startups", desc: "Handpicked for relevance and readiness" },
            { title: "10+ VC Firms", desc: "From leading venture ecosystems" },
            { title: "3 Cities", desc: "Bangalore • Delhi • Ahmedabad" },
          ].map((item, i) => (
            <Card key={i} className="border-[#23C0AD]/30 bg-[#121212] shadow-md overflow-hidden">
              <CardContent className="text-center py-10">
                <h3 className="text-2xl font-semibold mb-2 text-[#23C0AD]">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#487AFA]">
          The Startup Junction Experience
        </h2>
        <div className="max-w-5xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Startup Junction 2025 is not just another startup event — it’s a bridge between
            vision and investment.
          </p>
          <p>
            Founders gain real market validation, investor feedback, and direct mentorship.
          </p>
        </div>
      </section>
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#487AFA]">
          Why Participate?
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-[#23C0AD]">For Startups</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Pitch directly to active venture capitalists</li>
              <li>Get real-time feedback and mentorship</li>
              <li>Network with founders and innovators</li>
              <li>Gain visibility among top VC firms</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-[#F1E821]">For Investors</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Discover early-stage ventures</li>
              <li>Explore curated pitch sessions</li>
              <li>Collaborate with other investors</li>
              <li>Build long-term relationships with founders</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#487AFA]">
          Legacy of Excellence — Powered by E-Cell, IIT BHU
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed">
            Startup Junction stands on the foundation of E-Cell IIT BHU’s entrepreneurial legacy.
          </p>
        </div>
      </section>

    </div>
  );
}



