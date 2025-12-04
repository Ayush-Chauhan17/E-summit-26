import React, { FunctionComponent } from "react";
import {
  funEvents,
  // schoolEvents,
  startupEvents,
  stategyEvents,
} from "@/app/events/eventsData";
import EventsSection from "@/app/events/EventsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  title: {
    default: "Events | E-Summit'25 IIT BHU",
    template: "%s | Events | E-Summit'25 IIT BHU",
  },
};
interface OwnProps {}

type Props = OwnProps;

const gradientTextStyle = {
  background: "linear-gradient(90deg, #6A23A6, #E91045)", 
  WebkitBackgroundClip: "text", 
  WebkitTextFillColor: "transparent", 
};

const page: FunctionComponent<Props> = (props) => {
  return (
    <section className="pt-16 justify-center w-full min-h-screen">

      <EventsSection sectionTitle="Startup Events" events={startupEvents} />
      <EventsSection sectionTitle="Strategy Events" events={stategyEvents} />
      <EventsSection sectionTitle="Fun Events" events={funEvents} />
      {/* <EventsSection sectionTitle="School Event" events={schoolEvents} /> */}
    </section>


  //   <section className="flex justify-center items-center w-full min-h-screen">
  //   <div>
  //     <h1
  //       className="text-6xl m-4 font-semibold sm:py-6"
  //       style={{
  //         background: "linear-gradient(90deg, #6A23A6, #E91045)",
  //         WebkitBackgroundClip: "text",
  //         WebkitTextFillColor: "transparent",
  //         display: "inline-block",
  //       }}
  //     >
  //       COMING SOON...
  //     </h1>
  //   </div>
  // </section>
  );
};

export default page;
