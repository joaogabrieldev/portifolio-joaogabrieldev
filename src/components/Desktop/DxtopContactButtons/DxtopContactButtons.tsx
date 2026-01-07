import React, { useRef } from "react";
import "./DxtopContactButtons.css";
import Image from "next/image";
import OutlookLogo from "@/assets/icons/icons8-outlook-96.png";
import GmailLogo from "@/assets/icons/gmail-icon.svg";
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { urlWhatsapp, urlOutlook, urlGmail } from "@/utils/linksToGo";

const DxtopContactButtons = () => {
  const whatsappWindowRef = useRef<Window | null>(null);
  const outlookWindowRef = useRef<Window | null>(null);
  const gmailWindowRef = useRef<Window | null>(null);

  const handleWhatsappClick = () => {
    if (whatsappWindowRef.current && !whatsappWindowRef.current.closed) {
      whatsappWindowRef.current.focus();
    } else {
      whatsappWindowRef.current = window.open(urlWhatsapp, "whatsappWindow");
    }
  };

  const handleOutlookClick = () => {
    if (outlookWindowRef.current && !outlookWindowRef.current.closed) {
      outlookWindowRef.current.focus();
    } else {
      outlookWindowRef.current = window.open(urlOutlook, "outlookWindow");
    }
  };

  const handleGmailClick = () => {
    if (gmailWindowRef.current && !gmailWindowRef.current.closed) {
      gmailWindowRef.current.focus();
    } else {
      gmailWindowRef.current = window.open(urlGmail, "gmailWindow");
    }
  };

  return (
    <div className="dock-container">
      <div className="dock-background"></div>

      <div className="icons-wrapper">
        <div
          className="icon-item icon-outlook"
          id="icon-linkedin"
          onClick={handleOutlookClick}
        >
          <Image src={OutlookLogo} alt={""} width={45} />
        </div>
        <div
          className="icon-item icon-github"
          id="icon-github"
          onClick={handleWhatsappClick}
        >
          <SiWhatsapp />
        </div>

        <div
          className="icon-item icon-gmail"
          id="icon-gmail"
          onClick={handleGmailClick}
        >
          <Image src={GmailLogo} alt={""} width={70} height={70} />
        </div>
      </div>
    </div>
  );
};

export default DxtopContactButtons;
