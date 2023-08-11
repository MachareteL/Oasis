"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import {
  ArrowDownTrayIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import InputStandart from "./InputStandart";

interface FileObject {
  name: string;
}

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [uploadedFiles, setUploadedFiles] = React.useState<FileObject[]>([]);

  const handleUploadFiles = (files: FileObject[]) => {
    const uploaded: FileObject[] = [...uploadedFiles];
    let limitExceeded = false;

    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);      
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
    <React.Fragment>
      <Button onClick={handleOpen} className=" bg-oasis-aqua-400 text-bosch-white hover:bg-oasis-aqua-500">Edit Room</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        className="flex items-start "
      >
        <div className="m-10 flex w-full max-w-2xl flex-col rounded-2xl bg-bosch-white px-8 py-5 dark:bg-bosch-dark-gray-500 sm:px-12 sm:py-8">
          <p
            className={'text-lg font-bold'}
          >
            Edit Room
          </p>
          <h1 className="-mx-2 mb-5 mt-3 h-0.5 bg-bosch-light-gray-100 dark:bg-bosch-dark-gray-300" />
          <div className="space-y-5">
            <InputStandart placeholder="Title" />
            <InputStandart placeholder="Description" />
            <div className="flex justify-between space-x-3">
              <div className="w-2/5">
                <InputStandart placeholder="Areas" />
              </div>
              <div></div>
              <div className="w-3/5">
                <InputStandart placeholder="People" />
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
              <div className="max-h-28 overflow-y-scroll border rounded-lg border-bosch-light-gray-200 dark:border-bosch-dark-gray-300">
                {uploadedFiles.map((file) => (
                  <div className="flex px-2 pt-2 pb-1 text-sm justify-between border-b border-bosch-light-gray-200 dark:border-bosch-dark-gray-300   hover:bg-bosch-light-gray-100 dark:hover:bg-bosch-dark-gray-400">
                    {file.name}
                    <button
                      onClick={() => {
                        remover(file);
                      }}
                    >
                      <XMarkIcon className=" w-4 text-bosch-light-gray-300   hover:text-oasis-aqua-400 dark:hover:text-oasis-aqua-300" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-10">
            <Button onClick={handleClose} className="border border-bosch-light-gray-200 text-bosch-light-gray-300 hover:bg-bosch-light-gray-100 dark:border-bosch-dark-gray-300   dark:hover:bg-bosch-dark-gray-400">
              Cancel
            </Button>
            <Button className=" bg-oasis-aqua-400 text-bosch-white hover:bg-oasis-aqua-500">
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}

const ReadRoomInfosModal: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = React.useState<FileObject[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} className="absolute right-6 shadow-none">
        <QuestionMarkCircleIcon className="w-9 hover:text-oasis-aqua-400 dark:text-bosch-dark-gray-100 dark:hover:text-oasis-aqua-300" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        className="flex items-center justify-center"
      >
        <div className="m-10 flex w-full max-w-2xl flex-col rounded-2xl bg-bosch-white px-8 py-5 dark:bg-bosch-dark-gray-500 sm:px-12 sm:py-8">
          <p className={"text-lg font-bold  "}>Room Information</p>
          <h1 className="-mx-2 mb-5 mt-3 h-0.5 bg-bosch-light-gray-100 dark:bg-bosch-dark-gray-300" />
          <div className="space-y-5">
            <p className="border-b border-bosch-light-gray-200 px-1 dark:border-bosch-dark-gray-300">
              Title
            </p>
            <p className="border-b border-bosch-light-gray-200 px-1 dark:border-bosch-dark-gray-300">
              Description
            </p>
            <div className="flex justify-between space-x-4">
              <div className="w-2/5">
                <p className="border-b border-bosch-light-gray-200 px-1 dark:border-bosch-dark-gray-300">
                  Areas
                </p>
              </div>
              <div className="w-3/5">
                <p className="border-b border-bosch-light-gray-200 px-1 dark:border-bosch-dark-gray-300">
                  People
                </p>
              </div>
            </div>
            <div className="flex justify-between border-b border-bosch-light-gray-200 px-1 dark:border-bosch-dark-gray-300">
              <p>Added Files:</p>
              <p>Items: X</p>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="max-h-28 overflow-y-scroll rounded-lg border border-bosch-light-gray-200 dark:border-bosch-dark-gray-300">
                {uploadedFiles.map((file) => (
                  <div className="flex justify-between border-b border-bosch-light-gray-200 px-2 pb-1 pt-2 text-sm hover:bg-bosch-light-gray-100   dark:border-bosch-dark-gray-300 dark:hover:bg-bosch-dark-gray-400">
                    {file.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-10">
            <Button onClick={handleClose} className="border border-bosch-light-gray-200 text-bosch-light-gray-300 hover:bg-bosch-light-gray-100 dark:border-bosch-dark-gray-300   dark:hover:bg-bosch-dark-gray-400">
              Cancel
            </Button>
            <ChildModal />
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ReadRoomInfosModal;
