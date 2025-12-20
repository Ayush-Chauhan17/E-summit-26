import Image from "next/image";
import "./TicketCard.css";

export default function TicketCard({ title, features, info_div_classes }) {
  return (
    <div className="inline-block">
      <div className="flex border-2 items-stretch border-black">
        <img
          src="/Esummit26logo.png"
          alt="e-summit-logo"
          height={150}
          width={170}
        />

        <div className={`pt-2 ${info_div_classes} text-black px-8 py-3`}>
          <h2 className="text-xl text-black font-bold mb-2 ">{title}</h2>
          <ul className="list-disc">
            {features.map((f) => {
              return <li key={f}>{f}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
