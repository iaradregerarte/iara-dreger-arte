import { StaticImageData } from "next/image";

export interface ImageData {
  imageSrc: string | StaticImageData;
  Untitled: string;
  title: string;
  size: string;
  description: string;
  price: string;
  soldOut?: boolean;
}
