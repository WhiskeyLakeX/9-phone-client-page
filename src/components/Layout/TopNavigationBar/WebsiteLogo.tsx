import React from "react";
import Image from "next/image";
import Airbnb_logo from "@/assets/img/airbnb.png";

const WebsiteLogo = () => {
  return (
    <div className={"flex flex-row items-center gap-x-5"}>
      <Image
        src={Airbnb_logo}
        alt={"Airbnb WebsiteLogo"}
        width={50}
        height={50}
      />
      <p className={"text-red-500 font-mono font-semibold text-4xl"}>AirBnb</p>
    </div>
  );
};

export default WebsiteLogo;
