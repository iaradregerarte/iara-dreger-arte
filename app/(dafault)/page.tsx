import { useEffect } from "react";
import { useRouter } from "next/router";

import Hero from "@/components/hero";
import { Zigzag } from "@/components/zigzag";

export const metadata = {
  title: "Iara Dreger Arte",
  description: "Page description",
};

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.hostname.startsWith("www.")
    ) {
      router.replace(
        window.location.href.replace(
          /^https?:\/\/(?:www\.)?(.+)$/,
          "https://$1"
        )
      );
    }
  }, [router]);

  return (
    <>
      <Hero />
      <Zigzag />
    </>
  );
}
