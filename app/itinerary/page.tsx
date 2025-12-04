import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const Page: FunctionComponent<Props> = () => {
  return (
    <section className="w-full pt-16">
      <div className="relative w-full min-h-screen overflow-x-auto">
        <table className="border-collapse border-4 border-[#011854] w-[98%] mx-auto my-12 text-lg text-center rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-[#23C0AD] text-black font-bold text-xl">
              <th className="border-4 border-[#011854] p-6">Date</th>
              <th className="border-4 border-[#011854] p-6">Time</th>
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
            {/* 30th Jan */}
            <tr className="bg-black text-white hover:bg-[#6B9CFA]/20 transition">
              <td className="border-4 border-[#011854] p-6 text-[#F1E821]">
                30th Jan, 2025
              </td>
              <td className="border-4 border-[#011854] p-6 text-[#F1E821]">
                6:00 PM - 8:00 PM
              </td>
              <td className="border-4 border-[#011854] p-6">—</td>
              <td className="border-4 border-[#011854] p-6">—</td>
              <td className="border-4 border-[#011854] p-6">—</td>
            </tr>

            {/* 31st Jan (11 rows) */}
            {[
              "6:00 PM - 7:00 PM",
              "9:00 AM - 10:00 AM",
              "10:00 AM - 11:00 AM",
              "11:00 AM - 12:00 PM",
              "12:00 PM - 1:00 PM",
              "1:00 PM - 1:30 PM",
              "1:30 PM - 2:30 PM",
              "2:30 PM - 3:30 PM",
              "4:30 PM - 5:00 PM",
              "5:00 PM - 6:00 PM",
              "7:00 PM onwards",
            ].map((time, idx) => (
              <tr
                key={idx}
                className="bg-black text-white hover:bg-[#6B9CFA]/20 transition"
              >
                {idx === 0 ? (
                  <td
                    rowSpan={11}
                    className="border-4 border-[#011854] p-6 align-top text-[#F1E821]"
                  >
                    31st Jan, 2025
                  </td>
                ) : null}
                <td className="border-4 border-[#011854] p-6 text-[#F1E821]">
                  {time}
                </td>
                <td className="border-4 border-[#011854] p-6">—</td>
                <td className="border-4 border-[#011854] p-6">—</td>
                <td className="border-4 border-[#011854] p-6">—</td>
              </tr>
            ))}

            {/* 1st Feb (8 rows) */}
            {[
              "9:00 AM - 10:00 AM",
              "11:00 AM - 12:00 PM",
              "12:00 PM - 2:00 PM",
              "1:30 PM - 2:30 PM",
              "2:30 PM - 3:30 PM",
              "4:30 PM - 5:30 PM",
              "5:00 PM - 6:00 PM",
              "7:00 PM onwards",
            ].map((time, idx) => (
              <tr
                key={idx}
                className="bg-black text-white hover:bg-[#6B9CFA]/20 transition"
              >
                {idx === 0 ? (
                  <td
                    rowSpan={8}
                    className="border-4 border-[#011854] p-6 align-top text-[#F1E821]"
                  >
                    1st Feb, 2025
                  </td>
                ) : null}
                <td className="border-4 border-[#011854] p-6 text-[#F1E821]">
                  {time}
                </td>
                <td className="border-4 border-[#011854] p-6">—</td>
                <td className="border-4 border-[#011854] p-6">—</td>
                <td className="border-4 border-[#011854] p-6">—</td>
              </tr>
            ))}

            {/* 2nd Feb (8 rows) */}
            {[
              "9:00 AM - 10:00 AM",
              "11:00 AM - 12:00 PM",
              "12:00 PM - 2:00 PM",
              "1:30 PM - 3:30 PM",
              "3:30 PM - 5:30 PM",
              "6:00 PM - 7:00 PM",
              "7:00 PM - 8:00 PM",
              "8:00 PM onwards",
            ].map((time, idx) => (
              <tr
                key={idx}
                className="bg-black text-white hover:bg-[#6B9CFA]/20 transition"
              >
                {idx === 0 ? (
                  <td
                    rowSpan={8}
                    className="border-4 border-[#011854] p-6 align-top text-[#F1E821]"
                  >
                    2nd Feb, 2025
                  </td>
                ) : null}
                <td className="border-4 border-[#011854] p-6 text-[#F1E821]">
                  {time}
                </td>
                <td className="border-4 border-[#011854] p-6">—</td>
                <td className="border-4 border-[#011854] p-6">—</td>
                <td className="border-4 border-[#011854] p-6">—</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Page;
