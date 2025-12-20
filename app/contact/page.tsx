import React, { FunctionComponent } from "react";
import Contact from "@/components/Contact";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  title: {
    default: "Contact | E-Summit'26 IIT BHU",
    template: "%s | Contact | E-Summit'26 IIT BHU",
  },
};

interface OwnProps {}
type Props = OwnProps;

const page: FunctionComponent<Props> = () => {
  return (
    <>
      {/* Interactive Background */}
      <InteractiveBackground />

      <section style={{ fontFamily: "'azonix', cursive" }}>
        <div className="pt-16 justify-center w-full min-h-screen">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default page;
