"use client";

import React from "react";
import Image from "next/image";
import styles from "./sponsor_card.module.css";
import SvgDefs from "./svg_defs";

import inflection from "../../public/carousel/Inflection-removebg-preview.png";
import hundred from "../../public/carousel/100x-removebg-preview.png";
import antler from "../../public/carousel/Antler-removebg-preview.png";
import axilor from "../../public/carousel/axilor-removebg-preview.png";
import faad from "../../public/carousel/faad-removebg-preview.png";
import fibonacci from "../../public/carousel/FibbonacciX-removebg-preview.png";
import fluid from "../../public/carousel/fluidventures-removebg-preview.png";
import forty from "../../public/carousel/FortyTwo.Vc-removebg-preview.png";
import kae from "../../public/carousel/kae-removebg-preview.png";
import launch from "../../public/carousel/LaunchX-removebg-preview.png";
import lets from "../../public/carousel/LetsVenture-removebg-preview.png";
import pedal from "../../public/carousel/PedalStart-removebg-preview.png";
import sooni from "../../public/carousel/Soonicorn-removebg-preview.png";
import west from "../../public/carousel/westbridge-removebg-preview.png";
import xscale from "../../public/carousel/Xscale-removebg-preview.png";
import yours from "../../public/carousel/Yournest.png";
import gs from "../../public/carousel/growth.png";
import aws from "../../public/carousel/aws-removebg-preview.png";
import amul from "../../public/carousel/amul-removebg-preview.png";
import digital from "../../public/carousel/digitalocean.png";
import zee from "../../public/carousel/zee-removebg-preview.png";
import unstop from "../../public/carousel/unstop-removebg-preview.png";
import jag from "../../public/carousel/jaguar.png";
import micro from "../../public/carousel/microsoft-removebg-preview.png";
import redbus from "../../public/carousel/redbus-removebg-preview.png";
import un from "../../public/carousel/unacademy.png";
import zoho from "../../public/carousel/zoho.png";
import fresh from "../../public/carousel/freshworks.png";
import icici from "../../public/carousel/icici-removebg-preview.png";
import bob from "../../public/carousel/bob.png";
import se from "../../public/carousel/safe.png";
import gfg from "../../public/carousel/gfg.png";
import go from "../../public/carousel/grabon.png";

const SPONSORS = [
  inflection, hundred, antler, axilor, faad, forty, fibonacci, fluid,
  kae, launch, lets, pedal, sooni, west, xscale, yours, gs, aws,
  amul, digital, zee, unstop, jag, micro, redbus, un, zoho,
  fresh, icici, bob, se, gfg, go
];

const MarqueeGroup = () => (
  <div className={styles.marquee__group}>
    {SPONSORS.map((img, index) => (
      <Image
        key={index}
        src={img}
        alt="Sponsor Logo"
        height={140}
        width={200}
        className={styles.cardh}
      />
    ))}
  </div>
);

const MarqueeComponent = () => {
  return (
    /* isme {styles.root rahega}*/
    <div className= {styles.root}> 
      <h2 className="text-center text-4xl md:text-6xl font-bold text-white mb-10">
        <span
          style={{
            background: "linear-gradient(90deg, #487AFA, #23C0AD, #F1E821)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Previous Sponsors
        </span>
      </h2>

      <div className={styles.wrapper}>
        <SvgDefs />

        <div className={styles.marquee}>
          <MarqueeGroup />
          <MarqueeGroup aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
