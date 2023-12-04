import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useState, useEffect } from "react";
import GroupSettingsModal from "./GroupSettingsModal";

export default function GroupSettings({ id }: { id: string }) {
  const [groupData, setGroupData] = useState({} as Group);
  const [isOpen, setOpen] = useState(false);
  
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
  }, [id]);

  return (
    <span className="flex space-x-2">
      <button
        onClick={() => {
          setOpen(true)
        }}
      >
        <Cog6ToothIcon className="w-6" />
      </button>
      <h1>{id}</h1>
      <GroupSettingsModal
        isOpen={isOpen}
        closeModal={() => {
          setOpen(false);
        }}
        group={groupData}
      />
    </span>
  );
}
