import InputStandard from "@/components/InputStandard";
import Message from "@/components/Message";
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
      <div className="container mx-auto flex h-[90vh] flex-col justify-end overflow-hidden">
        {/* <button onClick={marketing}>LOG</button> */}
        <ul className="">
          {msgCache?.map((message, index) => (
            <Message {...message} loading={loading} key={index} />
          ))}
        </ul>
        <form
          onSubmit={handleSendQuestion}
          className="flex space-x-6 border-t border-bosch-light-gray-200 pt-5 dark:border-bosch-dark-gray-300"
        >
          <InputStandard
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
