"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const route = useRouter();
  return (
    <div>
      <h1>Login page</h1>
      <button
        onClick={() => {
          route.push("/auth/register");
        }}
      >
        Dang ky tai khoan
      </button>
    </div>
  );
}
