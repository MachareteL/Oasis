import InputStandard from "@/components/InputStandard";
import Message from "@/components/Message";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Oaxios } from "@/adapters/axios";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const { query } = useRouter();
  useEffect(() => {
    console.log(query.id);
  }, [query]);

  const [msgCache, setMsgCache] = useState<MessageProps[]>();
  const [currentMsg, setCurrentMsg] = useState("");
  const { mutate, isLoading, data } = useMutation({
    mutationFn: (newMessage: { question: string }) => {
      setMsgCache([
        ...(msgCache ?? []),
        {
          author: "Lucas",
          content: newMessage.question,
          createdAt: new Date(),
          createdByCurrentUser: true,
        },
      ]);
      setCurrentMsg("");
      return Oaxios.post("/gepete", newMessage).then(({ data }) => data);
    },
  });

  useEffect(() => {
    if (!data) return;
    setMsgCache([
      ...(msgCache ?? []),
      {
        author: "Oasis",
        content: data.answer,
        createdAt: new Date(),
        createdByCurrentUser: false,
      },
    ]);
  }, [data]);

  function handleSendQuestion(e: FormEvent) {
    e.preventDefault();
    mutate({ question: currentMsg });
  }

  return (
    <>
      <div className="container mx-auto flex h-[90vh] flex-col justify-end overflow-hidden">
        <ul className="space-y-2 overflow-y-scroll">
          {msgCache?.map((message, index) => (
            <Message {...message} loading={isLoading} key={index} />
          ))}
          {isLoading && <MessagePlaceholder />}
        </ul>
        <form
          onSubmit={handleSendQuestion}
          className="flex space-x-6 border-t border-bosch-light-gray-200 px-4 py-2 pt-5 dark:border-bosch-dark-gray-300 sm:px-0"
        >
          <InputStandard
            placeholder="Type here"
            onChange={(e) => {
              setCurrentMsg(e.target.value);
            }}
            value={currentMsg}
            disabled={isLoading}
          />
          <button
            className="w-7 cursor-pointer text-bosch-dark-gray-200 hover:text-oasis-aqua-400 disabled:cursor-default disabled:hover:text-bosch-dark-gray-200 dark:text-bosch-dark-gray-200 dark:hover:text-oasis-aqua-300"
            type="submit"
            disabled={isLoading}
          >
            <PaperAirplaneIcon />
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;

function MessagePlaceholder() {
  return (
    <div className="w-full py-2">
      <div className="flex animate-pulse space-x-4">
        <div className="h-10 w-10 rounded-full bg-slate-200"></div>
        <div className="flex-1 space-y-3 py-1">
          <div className="grid grid-cols-5 gap-1">
            <div className="h-2 rounded bg-slate-200" />
            <div className="col-span-3 h-2 rounded bg-slate-200" />
            <div className="h-2 rounded bg-slate-200" />
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-1">
              <div className="col-span-2 h-2 rounded bg-slate-200"></div>
              <div className="col-span-1 h-2 rounded bg-slate-200"></div>
            </div>
            <div className="h-2 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
