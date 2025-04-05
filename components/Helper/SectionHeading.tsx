import React, { ReactNode } from "react";

//define props type
type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className="bg-blue-600 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase rounded-4xl font-semibold">
      {children}
    </h1>
  );
};

export default SectionHeading;

// -rotate-6