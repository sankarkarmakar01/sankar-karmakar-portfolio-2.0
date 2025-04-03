// import SectionHeading from "@/components/Helper/SectionHeading";
// import React from "react";
// import Slider from "./Slider";

// const Hobbies = () => {
//   return (
//     <div className="pt-16 pc-16 bg-[#050709]">
//       <SectionHeading>Hobbies</SectionHeading>
//       <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
//         {/* Slider */}
//         <Slider />
//       </div>
//     </div>
//   );
// };

// export default Hobbies;


import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Slider from "./Slider";

const Hobbies = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <div className="container mx-auto px-4">
        <SectionHeading>Hobbies</SectionHeading>
        <div className="mt-20">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;