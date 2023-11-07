import React from "react";

export default function Message({
  content,
  createdAt,
  createdByCurrentUser,
  loading,
}: MessageProps & { loading: boolean }) {
  return (
    <li
      className={`${
        createdByCurrentUser ? "text-end " : "text-start border-oasis-standard-100"
      } border border-bosch-light-gray-200 px-4 py-2 rounded`}
    >
      {content}
    </li>
  );
}


