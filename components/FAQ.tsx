"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const data = [
  {
    idx: 1,
    question: "When and where is the event?",
    answer:
      "The event is taking place from 31st Jan to 2nd Feb 2024 in IIT(BHU) Varanasi. However, some of the events demand submissions prior to the main event taking place.",
  },
  {
    idx: 2,
    question: "How will I be notified about the updates?",
    answer:
      "You will be notified about all the updates via your registered email id. For urgent updates, you will be informed via phone call as well.",
  },
  {
    idx: 3,
    question: "What topics are covered in the E-Summit sessions?",
    answer:
      "E-Summits often cover a wide range of topics related to entrepreneurship, technology, and business. Common themes include startup strategies, digital innovation, leadership development, investment trends, and emerging technologies.",
  },
  {
    idx: 4,
    question: "Will there be any networking event in the Summit?",
    answer:
      "Yes, the E-Summit 25 will host a special networking event that will engage all the investors on board with esteemed professionals, startups and participants.",
  },
  {
    idx: 5,
    question: "How can a startup participate in the Summit?",
    answer:
      "Startups can become a part of the E-Summit 2025 through the Startup Expo - where they can set up their stalls for live demos of their product, and also through multiple events including the flagship event - The Million Dollar Pitch.",
  },
  {
    idx: 6,
    question: "Will accommodation be provided for interested attendees?",
    answer:
      "Yes, the team has dedicatedly made arrangements for the stay of all attendees and proper hospitality will be provided, including food. You can purchase the pass from above.",
  },
];

export default function FAQ() {
  return (
    <section className="relative flex flex-col justify-center items-center pb-20 pt-10 md:py-20 px-4">
      
      {/* Header with gradient text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Questions</span>
        </h2>
        <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full"></div>
      </div>

      <div className="w-full max-w-[850px] relative z-10">
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {data.map((faq, index) => {
            return (
              <AccordionItem
                key={index}
                value={"item-" + index}
                className="
                  border-none rounded-2xl mb-2 overflow-hidden
                  /* GLASSMOPRHISM STYLES */
                  bg-white/5 backdrop-blur-md border border-white/10
                  transition-all duration-300 ease-in-out
                  hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                  data-[state=open]:bg-white/10 data-[state=open]:border-yellow-500/30
                "
              >
                <AccordionTrigger 
                  className="
                    px-6 py-4 text-left text-lg font-medium text-gray-100 
                    hover:no-underline hover:text-yellow-400 transition-colors
                    [&[data-state=open]]:text-yellow-400
                  "
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-300 leading-relaxed font-light text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}