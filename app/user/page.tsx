"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/selector";
import { fetchUsers } from "@/store/actions/usersAction";

import React from "react";

type Props = {};

const page = (props: Props) => {
  const { users } = useAppSelector((state: any) => state.users);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fetchUsers())
  };

  console.log("user", users);
  return (
    <div>
      <button onClick={handleClick} className="bg-green-400 px-4 py-2 rounded-md shadow-sm">Click Me</button>
      <div>{users && users.map((user:any,i:string) => (
        <div key={i}>
          {user.name}
        </div>
      ))}</div>
    </div>
  );
};

export default page;
