import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Iaxios } from "@/adapters/axios";
import { useRouter } from "next/router";
export default function GroupSettingsModal({
  isOpen,
  closeModal,
  group,
}: {
  isOpen: boolean;
  closeModal: () => void;
  group: Group;
}) {
  const { reload } = useRouter();
  function generateInviteCode(id: string) {
    Iaxios.patch("/api/group/generatecode", { id })
      .then(({ data }) => {
        reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl border p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6">
                  <b>Group code </b> {group.id}
                </Dialog.Title>
                <table className="my-4 w-full">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <th className="py-2 pl-2 pr-6">Name</th>
                      <td>{group.name}</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="py-2 pl-2 pr-6">Description</th>
                      <td>{group.description}</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="py-2 pl-2 pr-6">Join Code</th>
                      <td>
                        {group.code ?? (
                          <button
                            onClick={() => {
                              generateInviteCode(group.id);
                            }}
                            className="my-2 rounded-md border px-2 py-1 hover:bg-bosch-dark-gray-400"
                          >
                            Generate an Invite code
                          </button>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Confirmar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
