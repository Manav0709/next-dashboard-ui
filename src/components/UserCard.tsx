import React from "react";
import Image from "next/image";
const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="odd:bg-purple even:bg-yellow flex-1 p-4 min-w-[130px] rounded-2xl">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl my-4 font-semibold">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
