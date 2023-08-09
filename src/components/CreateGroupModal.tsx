// import React from "react";

// export function Modal({ title, children }: ModalProps) {
//   return (
//     <div className="m-10 flex h-96 max-w-3xl flex-col rounded-2xl bg-bosch-white py-5 px-8">
//       <p className="text-lg font-bold">{title}</p>
//       <h1 className="bg-bosch-gray-100 -mx-2 h-0.5 mt-3 mb-5"></h1>
//       {children}
//     </div>
//   );
// }
"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "./Input";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
        <div className="m-10 flex h-96 max-w-3xl flex-col rounded-2xl bg-bosch-white px-8 py-5">
          <p className="text-lg font-bold text-bosch-light-gray-400">Create a New Group</p>
          <h1 className="bg-bosch-light-gray-200 -mx-2 mb-5 mt-3 h-0.5"/>
          <Input placeholder="Title"></Input>
        </div>
      </Modal>
    </div>
  );
}
