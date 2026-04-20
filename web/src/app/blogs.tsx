import BlogCard from "@/components/blogcard"
export default function BlogSection(){
    return(
        <section className="w-full h-[50dvh] flex flex-col items-center justify-start gap-12 relative -top-36">
            <img src="/leafbreak.png" alt="leafbreak" />
            <p className="text-[40px] font-bold">Latest Blog Posts</p>
            <div className="w-full flex justify-around">
                <p>No Blogs</p>
            </div>
        </section>
    )
}