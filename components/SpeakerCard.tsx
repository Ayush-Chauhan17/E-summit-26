import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface OwnProps {
  name: string;
  des: string;
  instaURL: string;
  linkedinURL: string;
  twitterURL?: string;
  imgURL: string;
}

type Props = OwnProps;

const SpeakerCard: FunctionComponent<Props> = (props: OwnProps) => {
  return (
    <div
      className="
        relative flex flex-col h-full w-64 m-4 md:m-2 rounded-2xl 
        bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#151515]
        border border-yellow-300/50 shadow-[0_0_20px_rgba(35,192,173,0.15)]
        hover:shadow-[0_0_30px_rgba(72,122,250,0.25)]
        transition-all duration-300 hover:scale-[1.04] hover:border-[#487AFA]/40
      "
    >
      {/* Image Section */}
      <div
        className="
          relative mx-4 mt-4 overflow-hidden rounded-xl
          border border-[#23C0AD]/30 shadow-inner
        "
      >
        <Image
          unoptimized
          width={500}
          height={800}
          src={props.imgURL}
          alt={props.name}
          className="
            w-full object-cover rounded-xl 
            hover:scale-105 transition-transform duration-500
          "
        />
      </div>

      {/* Text Section */}
      <div className="p-6 text-center">
        <h4
          className="
            mb-2 font-semibold text-2xl
            bg-gradient-to-r from-[#F1E821] via-[#23C0AD] to-[#487AFA]
            bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_6px_rgba(35,192,173,0.3)]
          "
        >
          {props.name}
        </h4>
        <p className="text-sm text-gray-300 leading-relaxed">
          {props.des}
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center p-6 pt-2 gap-7">
        {props.instaURL && (
          <Link
            className="hover:scale-125 transition-transform duration-300"
            href={props.instaURL}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-[#F1E821] text-2xl hover:text-[#23C0AD] transition-colors duration-300" />
          </Link>
        )}

        <Link
          className="hover:scale-125 transition-transform duration-300"
          href={props.linkedinURL}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-[#23C0AD] text-2xl hover:text-[#487AFA] transition-colors duration-300" />
        </Link>

        {props.twitterURL && (
          <Link
            className="hover:scale-125 transition-transform duration-300"
            href={props.twitterURL}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="text-[#487AFA] text-2xl hover:text-[#23C0AD] transition-colors duration-300" />
          </Link>
        )}
      </div>

      {/* Optional glow behind card */}
      <div className="absolute inset-0 -z-10 opacity-40 blur-[90px] bg-gradient-to-br from-[#23C0AD]/10 via-[#487AFA]/10 to-[#F1E821]/10" />
    </div>
  );
};

export default SpeakerCard;
