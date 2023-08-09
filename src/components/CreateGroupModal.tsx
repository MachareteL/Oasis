"use client";
import * as React from "react";
import Button from "./Button";
import Modal from "@mui/material/Modal";
import Input from "./InputStandart";
import InputStandart from "./InputStandart";

export default function CreateGroupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <div className="m-10 flex w-96 max-w-3xl flex-col rounded-2xl bg-bosch-white px-8 py-5 sm:px-12 sm:py-8 dark:bg-bosch-dark-gray-500 sm:w-2/6">
          <p
            className={`text-lg font-bold text-bosch-black dark:text-bosch-dark-gray-100`}
          >
            Create a New Group
          </p>
          <h1 className="-mx-2 mb-5 mt-3 h-0.5 bg-bosch-light-gray-100 dark:bg-bosch-dark-gray-300" />
          <div className="space-y-4">
            <InputStandart placeholder="Title" />
            <InputStandart placeholder="Description" />
            <div className="flex space-x-3">
              <div className="w-2/5">
                <InputStandart placeholder="Areas" />
              </div>
              <div></div>
              <div className="">
                <InputStandart placeholder="People" />
              </div>
            </div>
            <Button className="border border-bosch-light-gray-200 shadow-none text-bosch-light-gray-300 text-opacity-60 hover:bg-bosch-light-gray-100 hover:text-bosch-light-gray-300">
              Add Files
            </Button>
          </div>
          <div className="flex justify-end pt-10 space-x-3">
            <Button className="border border-bosch-light-gray-200 text-bosch-light-gray-300 hover:bg-bosch-light-gray-100">Cancel</Button>
            <Button className=" bg-oasis-aqua-400 text-bosch-white hover:bg-oasis-aqua-500">
              Create
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
