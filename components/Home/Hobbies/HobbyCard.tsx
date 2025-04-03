import Image from "next/image";
import React from "react";

type Hobby = {
  name: string;
  description: string;
};

type Props = {
  hobby: Hobby;
};

const HobbyCard = ({ hobby }: Props) => {
  const { name, description } = hobby;
  return (
    <div className="rounded-md overflow-hidden bg-[#140c1c] m-4 h-full">
      <div className="p-6">
        <Image
          src="/images/q.png"
          alt="quote-start"
          width={50}
          height={50}
          className="mb-4"
        />
        <p className="text-white opacity-70 min-h-[120px]">{description}</p>
        <Image
          src="/images/q.png"
          alt="quote-end"
          width={50}
          height={50}
          className="ml-auto mt-4"
        />
      </div>
      <div className="bg-gray-100 p-6">
        <h1 className="text-lg font-bold">{name}</h1>
      </div>
    </div>
  );
};

export default HobbyCard;
