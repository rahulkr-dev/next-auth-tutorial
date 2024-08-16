import { FaRegCheckCircle } from "react-icons/fa";

export const FormSuccess = ({ message }: { message: string }) => {
    if(!message) return null;
  return (
    <div className="bg-emerald-200 flex gap-4 justify-center items-center py-2 text-emerald-800  rounded-md shadow-md">
      <span><FaRegCheckCircle /></span>
      <span>

      {message}
      </span>
    </div>
  );
};
