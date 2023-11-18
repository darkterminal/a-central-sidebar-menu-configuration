import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function UserCard() {

  return (
    <div className="py-2 px-4 flex items-center justify-start gap-3 border-b mb-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <strong>Operator Name</strong>
        <small>Operator: Admin</small>
      </div>
    </div>
  );
}
