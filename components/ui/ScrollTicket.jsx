import { useInView } from "react-intersection-observer";

import { FaTicket } from "react-icons/fa6";

import { useRouter } from "next/navigation";
import "./ticket.css";

export default function ScrollTicket() {
  const router = useRouter();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <>
      {/* Invisible trigger */}
      <div ref={ref} style={{ height: "1px" }}></div>

      {/* Ticket */}
      {inView && (
        <div
          className="ticket-fixed ticket-expand"
          onClick={() => {
            router.replace("/pass");
          }}
        >
          <FaTicket size={28} className="rotate_by_90" />
          <span className="rotate_text font-bold text-[2px]">PASSES</span>
        </div>
      )}

      {/* Slide-in panel */}
    </>
  );
}
