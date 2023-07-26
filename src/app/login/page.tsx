import Input from "@/components/Input";
import { Modal } from "@/components/Modal";
import { NextPage } from "next";

interface Props {}

const Login: NextPage<Props> = ({}) => {
  return <div className="bg-pink-500 flex justify-center">
    <text>Login</text>
    <h1></h1>
    <Input placeholder="User..." maxLength={20}/>
    <Input placeholder="Password..."/>
  </div>;
};

export default Login;
