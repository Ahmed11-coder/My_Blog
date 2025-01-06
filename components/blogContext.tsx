"use client";
import { useBlog } from "@/context/context";
import Image from "next/image";


export default function BlogContent() {
    const {blogDetail} = useBlog();

    return (
        <>
            {blogDetail?.img_src && <Image src={blogDetail.img_src} alt="image" width={800} height={600}/>}
            <h1>{blogDetail?.blog_title}</h1>
            <p>{blogDetail?.blog_des}</p>
        </>
    )
}