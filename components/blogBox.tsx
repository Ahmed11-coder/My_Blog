"use client";
import Image from "next/image";
import { BlogProps } from "@/types";
import Link from "next/link";
import { useBlog } from "@/context/context";

export default function BlogBox(props: BlogProps) {

    const { blogInfo } = useBlog();
    const passBlog = () => {
        blogInfo(props);
    }

    return (
        <div className="w-[25%] relative p-3 border border-slate-400 rounded-xl">
            <Image 
                src={props.img_src}
                alt="blog_image"
                width={500}
                height={400}
            />
            <div className="info w-full mt-5">
                <h2 className="text-2xl font-bold">{props.blog_title}</h2>
                <p className="text-gray-500">{props.blog_des}</p>
                <div className="flex items-end justify-between mt-3">
                    <div className="text-gray-400">
                        <p>Posted by: {props.author}</p>
                        <p>{new Date().toDateString()}</p>
                    </div>
                    <Link href={`/blog/${props.blog_title.replaceAll(" ", "_")}`} onClick={passBlog} className="custom-btn">
                        {"Read More"}
                    </Link>
                </div>
            </div>
        </div>
    );
}