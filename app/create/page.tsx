
export default function CreateBlog() {
    return (
        <>
            <form action="" className="grid grid-cols-2 gap-5 mt-10 justify-center">
                <input type="text" placeholder="Author" className="create-info"/>
                <input type="text" placeholder="Title" className="create-info"/>
                <input type="text" placeholder="Description" className="create-info"/>
                <input type="text" placeholder="Image URL" className="create-info"/>
                <input type="submit" value="Add" className="custom-btn w-[100px]"/>
            </form>
        </>
    ); 
}