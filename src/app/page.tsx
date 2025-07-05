import Image from "next/image";
import Link from "next/link";

import { ButtonIcon } from "@/components/ui/ButtonIcon";
import { Button } from "@/components/ui/Button";

import { data } from "@/data/personal-data";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-y-4 p-8 sm:p-20">
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
          <h1 className="text-center text-4xl font-extrabold">Silvio Cesar</h1>
          <h3 className="text-midground text-center font-light">
            FullStack Developer
          </h3>
        </div>
      </div>

      <div>
        <ul className="flex items-center gap-1 text-2xl">
          {data.socials.map((social, index) => (
            <li key={index}>
              <Link href={social.url}>
                <ButtonIcon title={social.title}>
                  <social.icon />
                </ButtonIcon>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-foreground w-full border-b-2 text-wrap sm:w-[80%]">
        <ul>
          {data.links.map((link, index) => (
            <li key={index}>
              <Link href={link.url}>
                <Button type="button">{link.title}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
