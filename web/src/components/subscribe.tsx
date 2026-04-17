export default function Subscribe(){
    return(
        <section className="w-full h-[65dvh] flex justify-center items-center bg-[url(/subscribebg.png)] bg-cover bg-no-repeat relative">
            <img className="absolute left-0 bottom-32" src="/subscribe-leaf-right.png" alt="" />
            <img className="absolute right-0 bottom-10" src="/subscribe-leaf-left.png" alt="" />
            <div className="w-4/5 h-fit flex justify-between items-center">
                <div className="2/5 flex flex-col gap-2">
                    <p className="text-[40px] font-bold text-white w-3/5">Join Us in Growing a Greener Future</p>
                    <p className="text-xl font-medium text-white w-3/4">Together, we can plant trees, educate communities, and create a lasting impact on our planet's health.</p>
                </div>
                <div className="w-[45%] h-fit bg-white relative rounded-full">
                    <input className="w-full px-8 py-4 rounded-full text-base font-medium" type="text" placeholder="example@gmail.com"/>
                    <button className="absolute px-6 py-3 bg-foreground text-white rounded-full right-1 top-1">Subscribe</button>
                </div>
            </div>
        </section>
    )
}