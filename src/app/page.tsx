import Image from "next/image";
import Link from "next/link";

import { data } from "@/data/personal-data";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-y-4">
      <div className="flex flex-col items-center">
        <div className="border-foreground h-48 w-48 self-center overflow-hidden rounded-full border-2">
          <Image
            priority
            src={"/profile.jpg"}
            alt="Icon Pic"
            width={320}
            height={320}
          />
        </div>
        <div>
          <h1 className="text-center text-4xl font-bold">Silvio Cesar</h1>
          <h2 className="text-midground text-center font-light">
            FullStack Developer
          </h2>
        </div>
      </div>

      <div>
        <ul className="flex items-center gap-1 text-2xl">
          {data.socials.map((social, index) => (
            <li key={index}>
              <Link
                role="button"
                href={social.url}
                className="hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background inline-flex cursor-pointer items-center justify-center rounded-full p-1.5 transition-all duration-300 ease-in-out focus:outline-0"
                target="_blank"
              >
                <social.icon />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-foreground w-full border-b-2 text-pretty md:w-[80%]">
        <ul>
          {data.links.map((link, index) => (
            <li key={index}>
              <Link
                role="button"
                className="hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background inline-flex w-full cursor-pointer items-center justify-center py-1 transition-all duration-300 ease-in-out focus:outline-0"
                href={link.url}
                target="_blank"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
