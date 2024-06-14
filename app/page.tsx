"use client";
import { RootState } from "@reduxjs/toolkit/query";
import { useAppSelector, useAppDispatch } from "../hooks/selector";
import { fetchUsers } from "@/store/actions/usersAction";
import { useRouter } from "next/navigation";
export default function Home() {
  const { users } = useAppSelector((state: any) => state.users);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleClick = async () => {
    dispatch(fetchUsers(router));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button
        className="bg-violet-500 text-center rounded-md text-slate-50 px-3 py-2"
        onClick={handleClick}
      >
        Load Data
      </button>

      {}
    </div>
  );
}
