import Link from "next/link";
import { Img } from "../img";
import logo from "@/public/images/icon.jpeg";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Cruip">
              <Img
                style={{ width: 50, height: 50, borderRadius: "50%" }}
                alt="lgo"
                src={logo}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
