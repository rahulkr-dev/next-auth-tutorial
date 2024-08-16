import { AuthCardWrapper } from "./auth-card-wrapper";

export const LoginForm = () => {
  return (
    <AuthCardWrapper
      headerTitle="🧸Login"
      backButtonTitle="don't have an account"
      backButtonHref="/auth/signup"
      socials={true}
      
    >
      <div>
        <h1>Login Form</h1>
      </div>
    </AuthCardWrapper>
  );
};
