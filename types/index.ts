import { ReactNode } from "react";

export interface ArticleProps {
    id : number;
    title : string;
    content: string;
    imgURL: string;
    date : string;
    author: string;
}

export interface NewArticleProps {
    title : string;
    content: string;
    imgURL: string;
    date : string;
    author: string;
}

export interface CustomBottom {
    text: string,
    link: string,
    blogDetails: NewArticleProps,
}

export interface BlogContextType {
    blogInfo : (blog: NewArticleProps) => void;
    blogDetail: NewArticleProps | null;
}

export interface BlogProviderProps {
    children? : React.ReactNode;
}
