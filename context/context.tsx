'use client';
import { NewArticleProps, BlogProviderProps,  BlogContextType} from '@/types';
import { createContext, useState, useContext } from 'react';


// Create the context ( accept NewArticleProps interface or undefined ) with an initial value of undefined
const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({children} : BlogProviderProps) => {
    const [blogDetail, setBlogDetail] = useState<NewArticleProps | null>(null);

    const blogInfo = (blogDetails : NewArticleProps) => {
        setBlogDetail(blogDetails);
    };

    return (
        <BlogContext.Provider value={{blogInfo, blogDetail}}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = (): BlogContextType => {
    const context = useContext(BlogContext);

    if (!context) {
        throw new Error('useBlog must be used within an BlogProvider');
    }

    return context;
};