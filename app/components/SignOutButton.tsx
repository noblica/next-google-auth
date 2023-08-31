"use client"

import { useRouter } from "next/navigation"

export const SignOutButton = () => {
  const { push } = useRouter();
  return (
    <button className="text-black hover:text-sky-600" 
      onClick={() => push("/signin")}
    >Sign out</button>
  )
}