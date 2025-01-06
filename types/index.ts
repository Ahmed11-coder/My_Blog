import { ReactNode } from "react";

export interface BlogProps {
    img_src: string,
    author: string,
    blog_title: string,
    blog_des:string,
}

export interface CustomBottom {
    text: string,
    link: string,
    blogDetails: BlogProps,
}

export interface BlogContextType {
    blogInfo : (blog: BlogProps) => void;
    blogDetail: BlogProps | null;
}

export interface BlogProviderProps {
    children? : React.ReactNode;
}