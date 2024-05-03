"use server";

import { error } from "console";
import { redirect } from "next/navigation";

export const handleForm = async (prevState: any, formData: FormData) => {
  await new Promise<string>((resolve) => setTimeout(resolve, 3000));
  console.log("logged in");
  redirect("/");
  return {
    errors: ["wrong password", "password is too short"],
  };
};
