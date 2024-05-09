"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import Input from "../components/input";
import Button from "../components/button";
import { smsLogin } from "./actions";
import { error } from "console";

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogin, initialState);
  return (
    <div className="flex flex-col gap-10 py-6">
      <div
        className="flex flex-col gap-2
      *:font-medium"
      >
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify ypur phone number</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        {state?.token ? (
          <Input
            name="token"
            type="number"
            placeholder="Verification code"
            min={100000}
            max={999999}
            required
          />
        ) : (
          <Input
            name="phone"
            type="text"
            placeholder="Phone number"
            errors={state?.error?.formErrors}
            required
          />
        )}
        <Button text={state.token ? "Verify Token" : "Send Verification SMS"} />
      </form>
    </div>
  );
}
