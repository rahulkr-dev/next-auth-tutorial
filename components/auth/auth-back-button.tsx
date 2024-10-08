import Link from "next/link";
import { Button } from "../ui/button";

type AuthBackButtonProps = {
  label: string;
  href: string;
};
export const AuthBackButton = ({ label, href }: AuthBackButtonProps) => {
  return (
    <Button className="text-center w-full text-sm" variant={"link"} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
