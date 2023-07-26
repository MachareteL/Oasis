import Button from "@/components/Button";
import { Modal } from "@/components/Modal";

export default function Home() {
  return (
    <>
      <div className="bg-bosch-gray-550 h-screen">
        <Modal title="Title Here" >
          <>
          Body Here
          </>
        </Modal>
        <Button className="bg-bosch_green-7">Confirm</Button>
      </div>
    </>
  )
}
