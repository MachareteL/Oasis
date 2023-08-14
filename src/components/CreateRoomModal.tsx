"use client";
import Button from "./Button";
import Modal from "@mui/material/Modal";
import InputStandart from "./InputStandart";
import {
  ArrowDownTrayIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import * as React from "react";
import ItemRoom from "./ItemRoom";

const MAX_COUNT = 10;

interface FileObject {
  name: string;
}

const CreateRoomModal: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [uploadedFiles, setUploadedFiles] = React.useState<FileObject[]>([]);
  const [fileLimit, setFileLimit] = React.useState(false);
  const [itemArea, setItemArea] = React.useState<FileObject[]>([]);
  const [itemPeople, setItemPeople] = React.useState<FileObject[]>([]);

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

  const remover = (file: FileObject) => {
    const files = uploadedFiles.filter((element) => element !== file);
    setUploadedFiles(files);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="absolute right-6 top-28 shadow-none"
      >
        <PlusIcon className="w-9 hover:text-oasis-aqua-400 dark:hover:text-oasis-aqua-300" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <div className="m-10 flex w-full max-w-2xl flex-col rounded-2xl bg-bosch-white px-8 py-5 dark:bg-bosch-dark-gray-500 sm:px-12 sm:py-8">
          <p className={"text-lg font-bold  "}>Create a New Group</p>
          <h1 className="-mx-2 mb-5 mt-3 h-0.5 bg-bosch-light-gray-100 dark:bg-bosch-dark-gray-300" />
          <div className="space-y-5">
            <InputStandart placeholder="Title" />
            <InputStandart placeholder="Description" />
            <div className="flex justify-between space-x-3">
              <div className="w-2/5  space-y-2">
                <InputStandart placeholder="Areas" />
                <div className="flex flex-wrap">
                  <ItemRoom title={"ETS"}/>
                  <ItemRoom title={"EXEMPLO"}/>
                  <ItemRoom title={"DSO"}/>
                </div>
                <div className="max-h-28 overflow-y-scroll">
                  {itemArea.map((item) => (
                    <ItemRoom />
                  ))}
                </div>
              </div>
              <div className="w-3/5 space-y-2">
                <InputStandart placeholder="People" />
                <div className="flex flex-wrap">
                  <ItemRoom title={"raissa"}/>
                  <ItemRoom title={"lucas"}/>
                  <ItemRoom title={"gustavo"}/>
                  <ItemRoom title={"livea"}/>
                </div>
                <div className="max-h-28 overflow-y-scroll">
                  {itemPeople.map((item) => (
                    <ItemRoom />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between text-bosch-light-gray-250 shadow-none ">
                <label
                  htmlFor="file"
                  className="flex cursor-pointer items-center space-x-2 rounded-md border border-bosch-light-gray-250 border-opacity-60 px-3 py-2 hover:bg-bosch-light-gray-100 dark:hover:bg-bosch-dark-gray-400"
                >
                  <ArrowDownTrayIcon className="mr-2 w-5" />
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
                {uploadedFiles.map((file) => (
                  <div className="flex justify-between border-b border-bosch-light-gray-200 px-2 pb-1 pt-2 text-sm hover:bg-bosch-light-gray-100   dark:border-bosch-dark-gray-300 dark:hover:bg-bosch-dark-gray-400">
                    {file.name}
                    <button
                      onClick={() => {
                        remover(file);
                      }}
                    >
                      <XMarkIcon className=" w-4 text-bosch-light-gray-300 hover:text-oasis-aqua-400 dark:hover:text-oasis-aqua-300" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-10">
            <Button
              onClick={handleClose}
              className="border border-bosch-light-gray-200 text-bosch-light-gray-300 hover:bg-bosch-light-gray-100 dark:border-bosch-dark-gray-300   dark:hover:bg-bosch-dark-gray-400"
            >
              Cancel
            </Button>
            <Button className=" bg-oasis-aqua-400 text-bosch-white hover:bg-oasis-aqua-500">
              Create
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateRoomModal;
