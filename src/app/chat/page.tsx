"use client";
import InputStandart from "@/components/InputStandart";
import Message from "@/components/Message";
import ReadRoomInfosModal from "@/components/ReadRoomInfosModal";
import axiosGlobal from "@/lib/axios";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Page: NextPage = () => {
  const [msgCache, setMsgCache] = useState<MessageProps[]>();
  const [msgCacheLocal, setMsgCacheLocal] = useState<MessageProps>();
  const [currentMsg, setCurrentMsg] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSendQuestion(e: React.FormEvent) {
    e.preventDefault();
    setMsgCacheLocal({
      author: "user",
      content: currentMsg,
      createdAt: new Date(),
      createdByCurrentUser: true,
    });
    setCurrentMsg("");
    const { data } = await axios.post("/api/postQuery", {
      data: { question: currentMsg },
    });
    setMsgCacheLocal({
      author: "Oasis",
      content: data.answer,
      createdAt: new Date(),
      createdByCurrentUser: false,
    });
    // setMsgCache([
    //   ...(msgCache ?? []),
    //   {
    //     author: "Oasis",
    //     content: data.answer,
    //     createdAt: new Date(),
    //     createdByCurrentUser: false,
    //   },
    // ]);
    // setMsgCacheLocal([

    // ])
    // console.log(data);
  }
  useEffect(() => {
    if (!msgCacheLocal) return;
    setMsgCache([...(msgCache ?? []), msgCacheLocal]);
  }, [msgCacheLocal]);
  function marketing() {
    console.log(msgCache);
  }
  return (
    <>
      <ReadRoomInfosModal />
      <div className="container mx-auto flex h-screen absolute top-0 flex-1 flex-col justify-end px-5 pb-4 pt-3">
        {/* <button onClick={marketing}>LOG</button> */}
        <ul className="mb-4 space-y-4">
          {msgCache?.map((message, index) => (
            <Message {...message} loading={loading} key={index} />
          ))}
        </ul>
        <form
          onSubmit={handleSendQuestion}
          className="flex w-full space-x-6 border-t border-bosch-light-gray-200  pt-5 dark:border-bosch-dark-gray-300"
        >
          <InputStandart
            placeholder="Type here"
            onChange={(e) => {
              setCurrentMsg(e.target.value);
            }}
            value={currentMsg}
            disabled={loading}
          />
          <button className="w-7" type="submit" disabled={loading}>
            <PaperAirplaneIcon className="text-bosch-dark-gray-200 hover:text-oasis-aqua-400 dark:text-bosch-dark-gray-200 dark:hover:text-oasis-aqua-300" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
