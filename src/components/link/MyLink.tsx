import { ChevronRight } from "lucide-react";
import Link from "next/link";

export type MyLinkProps = {
  label: string;
  href: string;
};

const MyLink = ({ label, href }: MyLinkProps) => {
  return (
    <Link
      href={href}
      className="flex justify-center items-center font-bold text-center hover:text-accent mr-2"
    >
      {label}
      <ChevronRight />
    </Link>
  );
};

export default MyLink;
