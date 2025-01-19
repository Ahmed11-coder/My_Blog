"use client"
import { useState, useRef } from "react";

export default function CreateBlog() {

    let [title, setTitle] = useState("");
    let [author, setAuthor] = useState("");
    let [content, setContent] = useState("");
    let [imgURL, setImgURL] = useState("");
    let [popup, setPopup] = useState(false);
    const TitleElement = useRef<HTMLInputElement>(null);
    const AuthorElement = useRef<HTMLInputElement>(null);
    const ContentElement = useRef<HTMLTextAreaElement>(null);
    const ImgURLElement = useRef<HTMLInputElement>(null);

    function handleArt(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        fetch('/api', {
            method: "POST",
            body: JSON.stringify({
                title: title,
                author: author,
                content: content,
                imgURL: imgURL,
                data: new Date().toDateString(),
            }),
            headers: {
                "Content-Type": "application/json", 
            }
        })
        setPopup(true);
        setTimeout(()=> {
            setPopup(false);
        }, 1400)
        
        

        TitleElement.current!.value = "";
        AuthorElement.current!.value = "";
        ContentElement.current!.value = "";
        ImgURLElement.current!.value = "";
    }

    return (
        <>
            <form action="" onSubmit={(e)=> handleArt(e)} className="grid grid-cols-2 gap-5 mt-10 justify-center">
                <input ref={AuthorElement} onChange={(e)=> setAuthor(e.currentTarget.value)} type="text" placeholder="Author" className="create-info"/>
                <input ref={TitleElement} onChange={(e)=> setTitle(e.currentTarget.value)} type="text" placeholder="Title" className="create-info"/>
                <textarea ref={ContentElement} onChange={(e)=> setContent(e.currentTarget.value)} placeholder="Content" className="create-info"></textarea>
                <input ref={ImgURLElement} onChange={(e)=> setImgURL(e.currentTarget.value)} type="text" placeholder="Image URL" className="create-info"/>
                <button type="submit" className="custom-btn w-[100px]">Add</button>
            </form>
            {
                popup && (
                    <div className="top-5 left-1/2 absolute -translate-x-1/2 -trasnlate-y-1/2 bg-blue-500/75 font-semibold p-5 rounded-3xl text-white">
                        Article Saved Successfully
                    </div>
                )
            }
        </>
    ); 
}