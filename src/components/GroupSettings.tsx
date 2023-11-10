import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import React from "react";

export default function GroupSettings({ id }: { id: string }) {
  axios({
    method: "GET",
    url: "http://localhost:3000/api/group/getdata",
    params: { id },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <span className="flex space-x-2">
      <Cog6ToothIcon className="w-6" />
      <h1>{id}</h1>
    </span>
  );
}
