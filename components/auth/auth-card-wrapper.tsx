import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthBackButton } from "@/components/auth/auth-back-button";
import { Socials } from "@/components/auth/socials";

type AuthCardWrapperProps = {
  children: React.ReactNode;
  headerTitle: string;
  backButtonTitle: string;
  backButtonHref: string;
  socials?: boolean;
};
export const AuthCardWrapper = ({
  children,
  headerTitle,
  backButtonHref,
  backButtonTitle,
  socials,
}: AuthCardWrapperProps) => {
  return (
    <Card>
      <CardHeader>
        <AuthHeader label={headerTitle} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {socials && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <AuthBackButton label={backButtonTitle} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
