import { ChevronRight } from "lucide-react";
import Link from "next/link";

type MyLinkProps = {
  label: string;
  href: string;
};

const MyLink = ({ label, href }: MyLinkProps) => {
  return (
    <Link
      href={href}
      className="flex justify-center items-center text-center text-pink-600 hover:text-pink-800 mr-2"
    >
      {label}
      <ChevronRight />
    </Link>
  );
};

export default MyLink;
