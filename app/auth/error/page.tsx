import { AuthCardWrapper } from "@/components/auth/auth-card-wrapper";

export default function Error() {
  return (
    <div className="h-screen flex justify-center items-center">
    <AuthCardWrapper
      headerTitle="Authentication Error"
      backButtonTitle="Back to Login"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold text-red-600">Error</h1>
        <p className="text-center text-gray-500">
          An error occurred while trying to authenticate you. Please try again.
        </p>
      </div>
    </AuthCardWrapper>
    </div>
  );
}
