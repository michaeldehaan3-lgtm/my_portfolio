import Link from "next/link";
import { siteName } from "@/data/portfolio";

export default function SiteHeader() {
  return (
    <Link href="/architecture" className="wordmark" aria-label={`${siteName} — Home`}>
      <img
        src="/wordmark.png"
        alt={siteName}
        width={200}
        height={48}
        className="wordmark__img"
      />
    </Link>
  );
}
