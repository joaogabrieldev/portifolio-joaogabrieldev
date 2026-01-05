import React from "react";
import "./PhotoSpace.css";
import Image from "next/image";
import profilePic from "@/assets/images/profile-pic.jpg";

const PhotoSpace = () => {
  return (
    <div className="flex h-90 w-full items-center justify-center border-2 border-white lg:h-125">
      <div
        className="flex aspect-square h-90 w-90 items-center justify-center rounded-4xl border-2 text-4xl text-white lg:h-100 lg:w-100"
        id="photoSpace"
      >
        <Image
          src={profilePic}
          width={600}
          height={600}
          alt={"profile-pic"}
          className="rounded-4xl object-fill"
          priority
        />
      </div>
    </div>
  );
};

export default PhotoSpace;
