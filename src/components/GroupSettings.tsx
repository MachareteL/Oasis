import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import React from "react";
export default function GroupSettings({ id }: { id: string }) {
    
  return (
    <span className="flex space-x-2">
      <Cog6ToothIcon className="w-6" />
      <h1>{id}</h1>
    </span>
  );
}