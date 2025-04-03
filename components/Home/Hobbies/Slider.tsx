// "use client";
// import { hobbies } from "@/Data/data";
// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// // import ReviewCard from "./HobbyCard";
// import HobbyCard from "./HobbyCard";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1324 },
//     items: 3,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1324, min: 764 },
//     items: 2,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 764, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

// const Slider = () => {
//   return (
//     <Carousel
//       arrows={true}
//       autoPlay={true}
//       autoPlaySpeed={5000}
//       infinite
//       responsive={responsive}
//     >
//       {hobbies.map((review, i) => {
//         return (
//           <div key={i}>
//             {/* Review Card */}
//             <HobbyCard hobbies={hobbies} />
//           </div>
//         );
//       })}
//     </Carousel>
//   );
// };

// export default Slider;


// "use client";
// import { hobbies } from "@/Data/data";
// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import HobbyCard from "./HobbyCard";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1324 },
//     items: 3,
//     slidesToSlide: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1324, min: 764 },
//     items: 2,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 764, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

// const Slider = () => {
//   return (
//     <Carousel
//       arrows={true}
//       autoPlay={true}
//       autoPlaySpeed={5000}
//       infinite
//       responsive={responsive}
//     >
//       {hobbies.map((hobby, i) => (
//         <div key={i}>
//           <HobbyCard hobby={hobby} /> {/* Pass single hobby object */}
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default Slider;


"use client";
import { hobbies } from "@/Data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HobbyCard from "./HobbyCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {hobbies.map((hobby, i) => (
        <div key={i} className="px-2 py-4">
          <HobbyCard hobby={hobby} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;