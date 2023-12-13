import Button from "@/components/Button";
import { NextPage } from "next";
import Image from "next/image";
import boschSuperGraph from "../../../public/bosch-supergraphic-oasis.svg";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Oasis from "@/components/Oasis";
import InputStandart from "@/components/InputStandard";
import { BoschSansLight } from "@/fonts/fonts";
import { FormEvent, useState } from "react";
import { Iaxios } from "@/adapters/axios";
import { useMutation } from "react-query";


const Register: NextPage = () => {
    const [user, setUser] = useState<{name: string, email: string, password: string, confirmPassword: string}>({name: "", email: "", password: "", confirmPassword: ""});
    const mutation = useMutation({
        mutationFn: (newGroup: any) =>
          Iaxios.post('/api/user/create', newGroup).then(({data})=>data),
          onSuccess: (data) => {
          signIn("credentials",{email: data.email, password: user.password, callbackUrl: "/"})
          }
      })

    async function handleRegister(event : FormEvent) {
        event.preventDefault()
    if (user?.password != user?.confirmPassword) {
        alert("Password does not match")
        return
    }
    mutation.mutate(user)
  }

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-bosch-black">
        <Image
          src={boschSuperGraph}
          alt=""
          className="h-full w-full object-cover opacity-75"
        />
      </div>
      <div className="container mx-auto flex h-full items-center">
        <div className="z-10 flex h-fit w-full flex-col space-y-4 rounded-2xl bg-bosch-white p-20 dark:bg-bosch-dark-gray-400 md:ml-auto md:mt-0 md:w-2/3 lg:w-2/4 xl:w-5/12 opacity-90">
          <div className="flex flex-col">
            <Oasis />
            <h1 className={`flex justify-center text-xl sm:text-2xl ${BoschSansLight.className}`}>
              Register
            </h1>
          </div>
          <form className="space-y-12" onSubmit={handleRegister}>
            <div className="space-y-4">
              <div>
                <InputStandart placeholder="Name" className="text-white" name="name" required={true} onChange={({target})=>{setUser({...user, name: target.value})}}/>
              </div>
              <div>
                <InputStandart placeholder="E-mail" name="email" required={true} onChange={({target})=>{setUser({...user, email: target.value})}}/>
              </div>
              <div>
                <InputStandart placeholder="Password" name="password" required={true} onChange={({target})=>{setUser({...user, password: target.value})}} type="password"/>
              </div>
              <div>
                <InputStandart placeholder="Confirm Password" name="confirmPassword" required={true} onChange={({target})=>{setUser({...user, confirmPassword: target.value})}} type="password"/>
                <span className="flex justify-end space-x-1 pt-2 text-bosch-dark-gray-200">
                  <p>Already have an account?</p>
                  <Link href={"/signup"} className="text-oasis-standard-200">
                    Sign In
                  </Link>
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                className="bg-oasis-aqua-400 text-bosch-white hover:bg-oasis-aqua-500"
                type="submit"
              >
                Create an Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;