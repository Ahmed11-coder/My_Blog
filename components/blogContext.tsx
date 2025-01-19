"use client";
import { useBlog } from "@/context/context";
import Image from "next/image";


export default function BlogContent() {
    const {blogDetail} = useBlog();

    return (
        <>
            {blogDetail?.imgURL && <Image src={blogDetail.imgURL} alt="image" width={100} height={100} priority unoptimized={true} className="w-full h-[370px] object-cover rounded-bl-full"/>}
            <h1 className="text-5xl mt-6 mb-3 font-bold">{blogDetail?.title}</h1>
            <p className="leading-7">{blogDetail?.content}</p>
        </>
    )
}