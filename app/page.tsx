"use client";
import BlogBox from "@/components/blogBox";
import { ArticleProps } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setDate] = useState([]);
  useEffect(()=> {
    fetch('/api')
    .then((response)=> response.json())
    .then((result)=> setDate(result));
  }, [])

  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-3 gap-8 mt-10">
      {
        data.map((blog: ArticleProps)=> (
          <BlogBox key={blog.id} content={`${blog.content}`} title={`${blog.title}`} author={`${blog.author}`} imgURL={`${blog.imgURL}`} date={`${blog.date}`} />
        ))
      }
    </div>
  );
}