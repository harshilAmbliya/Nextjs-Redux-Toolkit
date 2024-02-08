"use client";
import { fetchUsers } from "@/store/slices/userSlice";
import { useAppSelector, useAppDispatch } from "../hooks/selector";
import { RootState } from "@/store/store";
export default function Home() {
  const { users } = useAppSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    dispatch(fetchUsers());
  };

  console.log("users", users);
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
