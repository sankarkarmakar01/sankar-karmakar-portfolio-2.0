// import React, { ReactNode } from "react";

// //define props type
// type Props = {
//   children: ReactNode;
// };

// const SectionHeading = ({ children }: Props) => {
//   return (
//     <h1 className="bg-blue-600 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase rounded-4xl font-semibold">
//       {children}
//     </h1>
//   );
// };

// export default SectionHeading;

// // -rotate-6

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <div className="flex justify-center px-4 w-full">
      <div className="relative inline-block group w-auto">
        <h1 className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 
                      w-auto min-w-[12rem] max-w-full text-center 
                      px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 
                      mx-auto text-white 
                      text-xl sm:text-2xl md:text-3xl lg:text-4xl
                      uppercase rounded-full font-extrabold 
                      shadow-xl hover:shadow-2xl 
                      transition-all duration-500 ease-in-out 
                      transform hover:-rotate-2 hover:scale-105
                      border-2 border-blue-300 border-opacity-30
                      hover:border-opacity-50
                      tracking-wider
                      before:absolute before:inset-0 before:rounded-full 
                      before:bg-blue-700 before:opacity-0 before:transition-opacity 
                      before:duration-500 before:-z-10 before:blur-md 
                      before:group-hover:opacity-40 before:group-hover:scale-110
                      after:absolute after:inset-0 after:rounded-full 
                      after:bg-white after:opacity-0 after:transition-all
                      after:duration-700 after:-z-20 after:blur-sm
                      after:group-hover:opacity-10 after:group-hover:scale-125">
          <span className="relative z-10 drop-shadow-md px-2 whitespace-nowrap">
            {children}
          </span>
        </h1>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                      w-[80%] sm:w-3/4 h-1 bg-blue-400 rounded-full 
                      opacity-70 group-hover:opacity-100 
                      transition-opacity duration-500
                      blur-xs group-hover:blur-sm"></div>
      </div>
    </div>
  );
};

export default SectionHeading;