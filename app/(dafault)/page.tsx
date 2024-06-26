export const metadata = {
  title: "Iara Dreger Arte",
  description: "Page description",
};

import Hero from "@/components/hero";
import { Zigzag } from "@/components/zigzag";

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      {/* <Newsletter /> */}
    </>
  );
}
