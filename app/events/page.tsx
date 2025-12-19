import React, { FunctionComponent } from "react";
import {
  funEvents,
  startupEvents,
  stategyEvents,
} from "@/app/events/eventsData";
import EventsSection from "@/app/events/EventsSection";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Metadata } from "next";
import { Poppins } from "next/font/google"; 
export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  title: {
    default: "Events | E-Summit'26 IIT BHU",
    template: "%s | Events | E-Summit'26 IIT BHU",
  },
};
interface OwnProps {}
type Props = OwnProps;
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const gradientTextStyle = {
  background: "linear-gradient(90deg, #3bb7d3ff, #23C0AD, #487AFA)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const page: FunctionComponent<Props> = () => {
  return (
    <>
      <InteractiveBackground />
      <section className={`pt-16 justify-center w-full min-h-screen ${poppins.className}`}>
        <EventsSection
          sectionTitle="Startup Events"
          events={startupEvents}
        />
        <EventsSection
          sectionTitle="Strategy Events"
          events={stategyEvents}
        />
        <EventsSection
          sectionTitle="Fun Events"
          events={funEvents}
        />
      </section>
    </>
  );
};
export default page;
