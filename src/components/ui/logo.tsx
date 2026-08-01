import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label={siteConfig.name}>
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white">
        <Image
          src="/logos/bethrass_logo_wb.png"
          alt="Bethrass Solution Limited"
          width={40}
          height={40}
          className="h-full w-full object-cover"
        />
      </div>
    </Link>
  );
}
