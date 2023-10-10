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
        createdByCurrentUser ? "text-end" : "text-start"
      } border border-bosch-light-gray-200 px-4 py-2`}
    >
      {!loading ? content : <MessagePlaceholder />}
    </li>
  );
}

function MessagePlaceholder() {
  return (
    <div className="w-full">
      <div className="flex animate-pulse space-x-4">
        <div className="h-10 w-10 rounded-full bg-slate-200"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 rounded bg-slate-200"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3">
              <div className="col-span-2 h-2 rounded bg-slate-200"></div>
              <div className="col-span-1 h-2 rounded bg-slate-200"></div>
            </div>
            <div className="h-2 rounded bg-slate-200"/>
          </div>
        </div>
      </div>
    </div>
  );
}
