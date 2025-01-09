"use client";
import { useBlog } from "@/context/context";
import Image from "next/image";


export default function BlogContent() {
    const {blogDetail} = useBlog();

    return (
        <>
            {blogDetail?.img_src && <Image src={blogDetail.img_src} alt="image" width={100} height={100} priority unoptimized={true} className="w-full h-[370px] object-cover rounded-bl-full"/>}
            <h1 className="text-5xl mt-6 mb-3 font-bold">{blogDetail?.blog_title}</h1>
            <p className="leading-7">{blogDetail?.blog_des}</p>
        </>
    )
}