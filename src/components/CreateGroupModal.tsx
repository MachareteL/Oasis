import Button from "./Button";
import Modal from "@mui/material/Modal";
import InputStandart from "./InputStandard";
import {
  ArrowDownTrayIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Autocomplete, TextField, styled, AutocompleteGetTagProps } from "@mui/material";
import { Iaxios } from "@/adapters/axios";
import CustomizedHook from "./CustomizedHook";
const MAX_COUNT = 10;

interface FileObject {
  name: string;
}

export default function CreateRoomModal() {
  const [open, setOpen] = useState(false);
  const [roomData, setRoomData] = useState({
    title: "",
    description: "",
    areas: "CaP/ETS",
    members: ["lucas@login.com"],
  });
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  const [uploadedFiles, setUploadedFiles] = useState<FileObject[]>([]);
  const [userList, setUserList] = useState([]);
  const [itemArea, setItemArea] = useState<FileObject[]>([]);
  const [itemPeople, setItemPeople] = useState<FileObject[]>([]);

  function createRoom() {
    Iaxios.post("/api/group/create", {
      name: roomData.title,
      description: roomData.description,
      area: roomData.areas,
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    Iaxios.get<{ users: { email: string; name: string }[] }>("/api/user/public")
      .then(({ data }) => {
        let users: any = [];
        data.users.map(({ name }) => {
          users.push({ label: name, value: name });
        });
        setUserList(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUploadFiles = (files: FileObject[]) => {
    const uploaded: FileObject[] = [...uploadedFiles];
    let limitExceeded = false;

    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);

        // if (uploaded.length === MAX_COUNT) setFileLimit(true);

        // if (uploaded.length > MAX_COUNT) {
        //   alert(`You can only add a maximum of ${MAX_COUNT} files`);
        //   setFileLimit(false);
        //   limitExceeded = true;
        //   return true;
        // }
      }
    });

    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosenFiles = Array.from(e.target.files || []);
    const fileObjects = chosenFiles.map((file) => ({
      name: file.name,
    }));
    handleUploadFiles(fileObjects);
  };

  const removeFiles = (file: FileObject) => {
    const files = uploadedFiles.filter((element) => element !== file);
    setUploadedFiles(files);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="absolute right-6 top-28 shadow-none"
        id="createGroup_btn"
      >
        <PlusIcon className="w-9 hover:text-oasis-aqua-400 dark:hover:text-oasis-aqua-300" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
        id="createGroup_modal"
      >
        <div className="m-10 flex w-full max-w-2xl flex-col rounded-2xl bg-bosch-white px-8 py-5 dark:bg-bosch-dark-gray-500 sm:px-12 sm:py-8">
          <p className={"text-xl font-bold text-bosch-light-gray-300 dark:text-bosch-dark-gray-200"}>Create a New Group</p>
          <h1 className="-mx-2 mb-5 mt-3 h-0.5 bg-bosch-light-gray-100 dark:bg-bosch-dark-gray-300" />
          <div className="space-y-5">
            <InputStandart
              id="createGroup_title"
              placeholder="Title"
              onChange={({ target }) => {
                setRoomData({ ...roomData, title: target.value });
              }}
            />
            <InputStandart
              id="createGroup_description"
              placeholder="Description"
              onChange={({ target }) => {
                setRoomData({ ...roomData, description: target.value });
              }}
            />
                <CustomizedHook />
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between text-bosch-light-gray-250 shadow-none ">
                <label
                  htmlFor="file"
                  className="flex cursor-pointer items-center space-x-2 rounded-md border border-bosch-light-gray-250 border-opacity-60 px-3 py-2 hover:bg-bosch-light-gray-100 dark:hover:bg-bosch-dark-gray-400"
                >
                  <ArrowDownTrayIcon className="mr-2 w-5" id="ArrowDownTrayIcon_file" />
                  Add Files
                </label>
                <input
                  name="file"
                  id="file"
                  type="file"
                  multiple
                  onChange={handleFileEvent}
                  className="hidden"
                ></input>
                itens: {uploadedFiles.length}
              </div>
              <div className="max-h-28 overflow-y-scroll rounded-lg border border-bosch-light-gray-200 dark:border-bosch-dark-gray-300">
                {uploadedFiles.map((file, index) => (
                  <div key={`Modal-key-${index}`} className="flex justify-between border-b border-bosch-light-gray-200 px-2 pb-1 pt-2 text-sm hover:bg-bosch-light-gray-100   dark:border-bosch-dark-gray-300 dark:hover:bg-bosch-dark-gray-400">
                    {file.name}
                    <button
                      id="removeFiles_btn"
                      onClick={() => {
                        removeFiles(file);
                      }}
                    >
                      <XMarkIcon className="w-4 text-bosch-light-gray-300 hover:text-oasis-aqua-400 dark:hover:text-oasis-aqua-300" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-10">
            <Button
              id="handleClose_btn"
              onClick={handleClose}
              className="border border-bosch-light-gray-200 text-bosch-light-gray-300 hover:bg-bosch-light-gray-100 dark:border-bosch-dark-gray-300   dark:hover:bg-bosch-dark-gray-400"
            >
              Cancel
            </Button>
            <Button 
              id="createRoom_btn"
              onClick={createRoom}
              className=" bg-oasis-aqua-400 text-bosch-white hover:bg-oasis-aqua-500"
            >
              Create
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
