import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useState, useEffect } from "react";

export default function GroupSettings({ id }: { id: string }) {
  const [groupData, setGroupData] = useState({});

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/api/group/getdata",
      params: { id },
    })
      .then(({ data }) => {
        setGroupData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <span className="flex space-x-2">
      <button
        onClick={() => {
          console.log(groupData);
        }}
      >
        <Cog6ToothIcon className="w-6" />
      </button>
      <h1>{id}</h1>
    </span>
  );
}
