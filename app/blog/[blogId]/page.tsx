import BlogContent from "@/components/blogContext";

export default function BlogPage({params}: {
    params: {
        blogId:string
    };
}) {
    return(
        <>
            <BlogContent />
        </>
    );
}