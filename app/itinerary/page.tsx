import React, { FunctionComponent } from "react";
import InteractiveBackground from "@/components/InteractiveBackground";

interface OwnProps {}
type Props = OwnProps;

const Page: FunctionComponent<Props> = () => {
  return (
    <>
      {/* Interactive Background */}
      <InteractiveBackground />

      <section
        className="w-full pt-16"
        style={{ fontFamily: "'Vampire Makers', cursive" }}
      >
        <div className="relative w-full min-h-screen overflow-x-auto">
          <table className="border-collapse border-4 border-[#011854] w-[98%] mx-auto my-12 text-lg text-center rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-[#23C0AD] text-black font-bold text-xl">
                <th className="border-4 border-[#011854] p-6">Date</th>
                <th className="border-4 border-[#011854] p-6">
                  Track A<br />Events & Competitions
                </th>
                <th className="border-4 border-[#011854] p-6">
                  Track B<br />Talks & Panels
                </th>
                <th className="border-4 border-[#011854] p-6">
                  Track C<br />Showcase & Networking
                </th>
              </tr>
            </thead>

            <tbody>
              {/* 30th Jan 2026 */}
              <tr className="bg-black text-white hover:bg-[#6B9CFA]/20 transition">
                <td className="border-4 border-[#011854] p-6 text-[#F1E821]">
                  30th Jan, 2026
                </td>

                <td className="border-4 border-[#011854] p-6 text-left leading-relaxed">
                  <ul className="list-disc list-inside">
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

              {/* 31st Jan 2026 */}
              <tr className="bg-black text-white hover:bg-[#6B9CFA]/20 transition">
                <td className="border-4 border-[#011854] p-6 text-[#F1E821]">
                  31st Jan, 2026
                </td>

                <td className="border-4 border-[#011854] p-6">
                  Founder's Gambit
                </td>

                <td className="border-4 border-[#011854] p-6">—</td>
                <td className="border-4 border-[#011854] p-6">—</td>
              </tr>

              {/* 1st Feb 2026 */}
              <tr className="bg-black text-white hover:bg-[#6B9CFA]/20 transition">
                <td className="border-4 border-[#011854] p-6 text-[#F1E821]">
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
    </>
  );
};

export default Page;
