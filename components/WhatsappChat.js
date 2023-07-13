import React from "react";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
const WhatsappChat = () => {
  return (
    <div className="">
      <div className="fixed w-16 h-16  z-50  flex justify-center items-center bottom-4 right-4  md:bottom-8  md:right-12">
        <Link
          href="https://api.whatsapp.com/send?phone=9878572898"
        >
          <Player
            autoplay
            loop
            src="https://assets4.lottiefiles.com/private_files/lf30_qnpfavmd.json"
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "50%",
            }}
          ></Player>
        </Link>
      </div>
    </div>
  );
};

export default WhatsappChat;
