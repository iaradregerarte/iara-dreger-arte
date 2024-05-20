// components/Img.tsx

import React from "react";
import NextImage, { ImageProps } from "next/image";

interface ImgProps extends ImageProps {
  alt: string;
}
export const Img: React.FC<ImgProps> = ({ src, alt, ...props }) => {
  return (
    <div
      className="relative flex justify-center items-center"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <NextImage
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
};
