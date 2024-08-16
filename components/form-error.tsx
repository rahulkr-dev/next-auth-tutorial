import { BsExclamationTriangle } from "react-icons/bs";

export const FormError = ({ message }: { message: string }) => {
    if(!message) return null;

  return (
    <div className="bg-destructive/20 flex gap-4 justify-center items-center py-3 text-destructive  rounded-md shadow-md">
      <span><BsExclamationTriangle /></span>
      <span>

      {message}
      </span>
    </div>
  );
};
