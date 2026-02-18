import { useMemo } from "react";

const ObfuscatedEmail = () => {
  const email = useMemo(() => {
    const parts = ["info", ".", "roman", ".", "dev", ".", "tech", "@", "gmail", ".", "com"];
    return parts.join("");
  }, []);

  return (
    <a
      href={`m${""}a${""}i${""}l${""}t${""}o${""}:${email}`}
      className="text-primary hover:opacity-80 transition-opacity"
    >
      {email}
    </a>
  );
};

export default ObfuscatedEmail;
