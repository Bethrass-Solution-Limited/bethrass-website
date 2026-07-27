import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label={siteConfig.name}>
      <Image
        src="/bethrass-logo.png"
        alt={siteConfig.name}
        width={40}
        height={40}
        className="w-auto"
      />
    </Link>
  );
}
