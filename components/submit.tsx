import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-primary/90 text-white outline-none transition-all  hover:scale-105 hover:bg-primary focus:scale-105 active:scale-105 disabled:scale-100 disabled:bg-opacity-65  "
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}
