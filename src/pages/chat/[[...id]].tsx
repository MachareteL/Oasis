import InputStandard from "@/components/InputStandard";
import Message from "@/components/Message";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Iaxios } from "@/adapters/axios";

const Page: NextPage = () => {
  // const { query } = useRouter();
  // useEffect(() => {
  //   console.log(query);
  // }, [query]);

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
      console.log({ msgCache });

      return Iaxios.post("/gepete2", newMessage).then(({ data }) => data);
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
    mutate(
      { question: currentMsg },
      {
        // onSuccess: (data) => {
        //   console.log("on success called");
        // },
      },
    );
  }

  return (
    <>
      <div className="container mx-auto flex h-[90vh] flex-col justify-end overflow-hidden">
        {/* <button onClick={marketing}>LOG</button> */}
        <ul className="">
          {msgCache?.map((message, index) => (
            <Message {...message} loading={isLoading} key={index} />
          ))}
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
          <button className="w-7" type="submit" disabled={true}>
            <PaperAirplaneIcon className="text-bosch-dark-gray-200 hover:text-oasis-aqua-400 disabled:cursor-wait dark:text-bosch-dark-gray-200 dark:hover:text-oasis-aqua-300" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
