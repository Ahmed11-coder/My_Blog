"use client";
import Image from "next/image";
import { NewArticleProps } from "@/types";
import Link from "next/link";
import { useBlog } from "@/context/context";

export default function BlogBox(props: NewArticleProps) {

    const { blogInfo } = useBlog();
    const passBlog = () => {
        blogInfo(props);
    }

    return (
        <div className="relative p-3 border border-slate-400 rounded-xl">
            <Image 
                src={props.imgURL}
                alt="blog_image"
                width={500}
                height={200}
                loading="lazy"
            />
            <div className="info w-full mt-5">
                <h2 className="text-2xl font-bold">{props.title}</h2>
                <p className="blog-des">{props.content}</p>
                <div className="flex items-end justify-between mt-3">
                    <div className="text-gray-400">
                        <p>Posted by: {props.author}</p>
                        <p>{props.date ? props.date : new Date().toDateString()}</p>
                    </div>
                    <Link href={`/blog/${props.title.replaceAll(" ", "_")}`} onClick={passBlog} className="custom-btn">
                        {"Read More"}
                    </Link>
                </div>
            </div>
        </div>
    );
}