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
      className="rounded bg-red-600 px-4 py-2 text-white cursor-pointer"
    >
      Logout
    </button>
  );
}
