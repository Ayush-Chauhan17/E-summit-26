"use client";

import Particle from "@/components/particle";
import PassCard from "../../components/ui/TicketCard";
import Link from "next/link";
import "./pass.css";

export default function PassPage() {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <Particle />
      </div>

      <div className="pass-container gap-10 justify-center mb-10 ">
        <PassCard
          title="Silver Pass"
          originalPrice={799}
          priceText="₹649/-"
          features={[
            { label: "Hospitality Kit", available: true },
            { label: "Keynote Speaker Session", available: true },
            { label: "Fireside Chat with Founders", available: true },
            { label: "Networking at Startup Expo", available: true },
            { label: "Events and Competitions", available: true },
            { label: "Access to Panel Discussions", available: true },
            { label: "Accomodation", available: false },
            { label: "Vouchers and Perks from sponsors", available: false },
            { label: "E-summit Merch", available: false },
            { label: "Food from Fri. night to Sun. night", available: false },
          ]}
        />
        <PassCard
          title="Gold Pass"
          originalPrice={2099}
          priceText="₹1899/-"
          features={[
            { label: "Hospitality Kit", available: true },
            { label: "Keynote Speaker Session", available: true },
            { label: "Fireside Chat with Founders", available: true },
            { label: "Networking at Startup Expo", available: true },
            { label: "Events and Competitions", available: true },
            { label: "Access to Panel Discussions", available: true },
            { label: "Accomodation", available: true },
            { label: "Vouchers and Perks from sponsors", available: true },
            { label: "E-summit Merch", available: false },
            { label: "Food from Fri. night to Sun. night", available: false },
          ]}
        />
        <PassCard
          title="Diamond Pass"
          originalPrice={2399}
          priceText="₹2199/-"
          features={[
            { label: "Hospitality Kit", available: true },
            { label: "Keynote Speaker Session", available: true },
            { label: "Fireside Chat with Founders", available: true },
            { label: "Networking at Startup Expo", available: true },
            { label: "Events and Competitions", available: true },
            { label: "Access to Panel Discussions", available: true },
            { label: "Accomodation", available: true },
            { label: "Vouchers and Perks from sponsors", available: true },
            { label: "E-summit Merch", available: true },
            { label: "Food from Fri. night to Sun. night", available: true },
          ]}
        />
      </div>
      <div className="flex justify-center">
        <Link href="/payment" className="inline-block text-center">
          <button className="pass-button">Get Pass</button>
        </Link>
      </div>
    </div>
  );
}
