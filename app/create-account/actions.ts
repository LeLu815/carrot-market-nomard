"use server";
import { z } from "zod";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "../lib/constant";

const checkPassword = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

// .refine(함수, 에러메세지)
// 함수에서 조건으로 인자로 넘어온 값을 판별, 거짓이면 에러메세지를 리턴
const usernameSchema = z
  .object({
    username: z.string().trim(),
    email: z.string().email(),
    password: z
      .string()
      .trim()
      .min(PASSWORD_MIN_LENGTH)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirmPassword: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine(checkPassword, {
    message: "Both passwords should be the same!",
    path: ["confirmPassword"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  // data는 form에서 직접 들어온 날것 데이터
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  // try {
  //   // parse() => throw error
  //   usernameSchema.parse(data);
  // } catch (error) {
  //   console.log(error);
  // }
  const reuslt = usernameSchema.safeParse(data);
  if (!reuslt.success) {
    return reuslt.error.flatten();
  } else {
    console.log(reuslt.data);
  }
}
