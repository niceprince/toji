"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = () => {
    document.cookie = "auth_token=; Max-Age=0; path=/";
    router.push("/admin");
  };

  return (
    <button
      onClick={logout}
      className="rounded bg-gray-300 px-4 ml-4 text-black cursor-pointer"
    >
      Logout
    </button>
  );
}
