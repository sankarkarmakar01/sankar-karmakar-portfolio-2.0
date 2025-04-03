// import Image from "next/image";
// import React from "react";

// //define prop type
// type Props = {
//   id: number;
//   title: string;
//   image: string;
//   percent: string;
// };

// const SkillCard = ({ skill }: Props) => {
//   const { image, title } = skill;
//   return (
//     <div className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
//       <Image
//         src={image}
//         alt={title}
//         width={80}
//         height={80}
//         className="object-cover mx-auto"
//       />
//       <h1 className="text-[18px] mt-4 text-white font-[600]">{title}</h1>
//     </div>
//   );
// };

// export default SkillCard;


import Image from "next/image";
import React from "react";

// Define prop type
type Skill = {
  id: number;
  title: string;
  image: string;
};

type Props = {
  skill: Skill; // Accepts a single skill object
};

const SkillCard = ({ skill }: Props) => {
  const { image, title } = skill;

  return (
    <div className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900 h-full">
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="object-cover mx-auto"
        />
        <h1 className="text-[18px] mt-4 text-white font-[600]">{title}</h1>
      </div>
    </div>
  );
};

export default SkillCard;