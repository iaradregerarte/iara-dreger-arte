"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

import AOS from "aos";
import "aos/dist/aos.css";

import { Footer } from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname.startsWith('www.')) {
      router.replace(window.location.href.replace(/^https?:\/\/(?:www\.)?(.+)$/, 'https://$1'));
    }

    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, [router]);

  return (
    <>
      <main className="grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
