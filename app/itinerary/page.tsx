import React, { FunctionComponent } from "react";
import { Poppins } from "next/font/google";
import InteractiveBackground from "@/components/InteractiveBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface OwnProps {}
type Props = OwnProps;

const Page: FunctionComponent<Props> = () => {
  return (
    
    <section className={`w-full pt-16 ${poppins.className}`}>
        <InteractiveBackground />
      <div className="relative w-full min-h-screen overflow-x-auto px-4">
        <table
          className="
            border-collapse border-4 border-[#011854]
            w-full max-w-5xl
            mx-auto my-12
            text-lg text-center
            rounded-2xl overflow-hidden
            backdrop-blur-sm bg-black/30
          "
        >
          <thead>
            <tr className="bg-[#23C0AD] text-black font-bold text-xl">
              <th className="border-4 border-[#011854] p-6">Date</th>
              <th className="border-4 border-[#011854] p-6">
                Track A
                <br />
                Events & Competitions
              </th>
              <th className="border-4 border-[#011854] p-6">
                Track B
                <br />
                Talks & Panels
              </th>
              <th className="border-4 border-[#011854] p-6">
                Track C
                <br />
                Showcase & Networking
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
              <td className="border-4 border-[#011854] p-6 text-[#F1E821] font-semibold">
                30th Jan, 2026
              </td>
              <td className="border-4 border-[#011854] p-6 text-left leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>Innovation Crucible – Finale</li>
                  <li>CaseX – Finale</li>
                  <li>Adventure: The Branding Challenge – Finale</li>
                  <li>The Verdict Arena – Finale</li>
                  <li>Million Dollar Pitch – Finale</li>
                  <li>Fusion Forge – Finale</li>
                  <li>Design Rush – Finale</li>
                  <li>Shipwreck – Finale</li>
                </ul>
              </td>
              <td className="border-4 border-[#011854] p-6">—</td>
              <td className="border-4 border-[#011854] p-6">—</td>
            </tr>

            <tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
              <td className="border-4 border-[#011854] p-6 text-[#F1E821] font-semibold">
                31st Jan, 2026
              </td>
              <td className="border-4 border-[#011854] p-6">
                Founder's Gambit
              </td>
              <td className="border-4 border-[#011854] p-6">—</td>
              <td className="border-4 border-[#011854] p-6">—</td>
            </tr>

            <tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
              <td className="border-4 border-[#011854] p-6 text-[#F1E821] font-semibold">
                1st Feb, 2026
              </td>
              <td className="border-4 border-[#011854] p-6">—</td>
              <td className="border-4 border-[#011854] p-6">—</td>
              <td className="border-4 border-[#011854] p-6">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Page;