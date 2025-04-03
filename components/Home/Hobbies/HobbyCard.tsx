// import Image from "next/image";
// import React from "react";

// //define props type
// type Props = {
//   name: string;
//   review: string;
//   rating: number;
//   profession: string;
//   image: string;
// };

// const HobbyCardCard = ({ hobbies }: Props) => {
//   const { name, description } = hobbies;

//   return (
//     <div className="rounded-md overflow-hidden bg-[#140c1c] m-4">
//       <div className="p-6">
//         <Image src="/images/q.png" alt="image" width={50} height={50} />
//         <p className="text-white opacity-70">{description}</p>
//         <Image
//           src="/images/q.png"
//           alt="image"
//           width={50}
//           height={50}
//           className="ml-auto"
//         />
//       </div>
//       <div className="bg-gray-100">
//         <div className="p-6 flex items-center space-x-6">
//           <div>
//             <h1 className="text-lg font-bold">{name}</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HobbyCardCard;


// import Image from "next/image";
// import React from "react";

// // Define the correct props type for hobbies
// type Hobby = {
//   name: string;
//   description: string;
// };

// type Props = {
//   hobby: Hobby; // Accepts a single hobby object
// };

// const HobbyCard = ({ hobby }: Props) => {
//   const { name, description } = hobby;

//   return (
//     <div className="rounded-md overflow-hidden bg-[#140c1c] m-4">
//       <div className="p-6">
//         <Image src="/images/q.png" alt="quote-start" width={50} height={50} />
//         <p className="text-white opacity-70">{description}</p>
//         <Image
//           src="/images/q.png"
//           alt="quote-end"
//           width={50}
//           height={50}
//           className="ml-auto"
//         />
//       </div>
//       <div className="bg-gray-100">
//         <div className="p-6 flex items-center space-x-6">
//           <div>
//             <h1 className="text-lg font-bold">{name}</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HobbyCard;


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