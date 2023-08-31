"use client"

import { useRouter } from "next/navigation"
// import { signOut } from "next-auth/react"

export const SignOutButton = () => {
  const { push } = useRouter();
  return (
    <button className="text-black hover:text-sky-600" 
      // onClick={() => signOut()}
      onClick={() => push("/signin")}
    >Sign out</button>
  )
}