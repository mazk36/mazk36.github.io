import Image from "next/image";

export function SocialIcon({ url }: { url: string }) {
  const host = (() => {
    try {
      return new URL(url).hostname;
    } catch {
      return "";
    }
  })();
  const name = (
    {
      "github.com": "github",
      "www.linkedin.com": "linkedin",
      "www.instagram.com": "instagram",
      "www.tiktok.com": "tiktok",
    } as Record<string, string>
  )[host];
  if (!name) return null;
  return (
    <Image
      className={`social-icon social-icon-${name}`}
      src={`/images/social/${name}.webp`}
      alt=""
      width={24}
      height={24}
    />
  );
}
