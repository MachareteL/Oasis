"use client";
import Button from "./Button";
import Modal from "@mui/material/Modal";
import InputStandart from "./InputStandart";
import * as React from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";

const JoinGroupModal: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="shadow-none absolute right-6 top-52">
        <UserGroupIcon className="w-9 hover:text-oasis-aqua-400 dark:hover:text-oasis-aqua-300" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <div className="m-10 flex w-full max-w-2xl flex-col rounded-2xl bg-bosch-white px-8 py-5 dark:bg-bosch-dark-gray-500 sm:px-12 sm:py-8">
          <p className="text-lg font-bold  ">Join Room</p>
          <h1 className="-mx-2 mb-5 mt-3 h-0.5 bg-bosch-light-gray-100 dark:bg-bosch-dark-gray-300" />
          <p className="text-md pb-4  ">
            Check with the room creator for the access code and enter it below:
          </p>
          <InputStandart placeholder="Code" />
          <div className="flex justify-end space-x-3 pt-10">
            <Button className="border border-bosch-light-gray-200 text-bosch-light-gray-300 hover:bg-bosch-light-gray-100 dark:border-bosch-dark-gray-300   dark:hover:bg-bosch-dark-gray-400">
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

export default JoinGroupModal;
