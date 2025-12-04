import React, { FunctionComponent } from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  title: {
    default: "Contact | E-Summit'25 IIT BHU",
    template: "%s | Contact | E-Summit'25 IIT BHU",
  },
};
interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className="pt-16 justify-center w-full min-h-screen">
        <Contact />
      </div>
    </section>
  );
};

export default page;
