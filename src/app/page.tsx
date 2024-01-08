import ContainerT from "@/components/ContainerT";

import Image from 'next/image'
export default function page() {



    return (
        <>
            <ContainerT>
                <div className="h-screen  grid content-center">
                    <div className=" ">
                        <div className="lg:flex gap-4  mt-20 lg:px-40 sm:px-10 px-2 " >
                            <div className="bg-white box-border border-2 h-72 w-80 mx-auto mb-5 lg:mb-0 shadow" />
                            <div className="w-full grid gap-4">
                                <div className="bg-white  box-border border-4   px-10 p-10 py-4 lg:py-0 shadow flex items-center" >
                                    <div className="flex gap-5 lg:gap-10 justify-center w-full">
                                        <Image
                                            src="/Facebook_icon.svg"
                                            width={45}
                                            height={45}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src="/Instagram_icon.svg"
                                            width={45}
                                            height={45}
                                            alt="Picture of the author"
                                        />

                                        <Image
                                            src="/Line_icon.svg"
                                            width={45}
                                            height={45}
                                            alt="Picture of the author"
                                        />

                                        <Image
                                            src="/github.svg"
                                            width={45}
                                            height={45}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                </div>
                                <div className="bg-white box-border border-2   h-auto  p-10 shadow w-full indent-8" >

                                    <p className="whitespace-normal indent-2">
                                        My name is thynne.In my favorite about write programe anything.I'am like to
                                        depverlopment and study new information about programe.Deverlop is Turn
                                        More Dreams Into Reality

                                    </p>

                                </div>
                            </div>
                        </div></div>
                </div>
                <div className=" lg:px-40  sm:px-10  h-60 bg-white mx-2 lg:mx-28 lg:mt-20">

                 
                </div>

                <div className="flex gap-4  mt-20 lg:px-16 sm:px-10 px-2" style={{ height: "90vh" }}>
                    <div className="hidden md:block bg-white box-border border-2 h-auto w-96 shadow p-5" >
                        <div className="text-end text-lg "> Menu</div>
                        <hr />
                        <div className="text-center text-lg my-1"> JavaScript </div>
                        <div className="m-5 grid gap-2">
                            <div>
                                0.1
                            </div>
                            <div>
                            0.2
                            </div>
                            <div>
                                0.3
                            </div>
                        </div>
                    </div>
                    <div className="w-full grid gap-4 ">
                        <div className="bg-white box-border border-2   h-auto  p-10 row-span-1 shadow" ></div>
                        <div className="bg-white box-border border-2   h-auto  p-10 row-span-5" ></div>
                        <div className="bg-white box-border border-2   h-auto  p-10 row-span-12" ></div>
                    </div>
                </div>

                <div className="flex mt-20 lg:px-40 sm:px-10 px-2 " style={{ height: "40vh" }}>
                    <div className="bg-white box-border border-2 h-auto w-full " />

                </div>
            </ContainerT >
        </>
    )
}
