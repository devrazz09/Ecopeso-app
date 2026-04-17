export default function Marquee(){
    return(
        <section className="w-full h-[50dvh] overflow-hidden flex justify-center items-center">
            <div className="w-fit h-fit flex">
                <div className="inline-block animate-marquee mr-[10%]">
                    <div className="flex justify-center items-center gap-4">
                        <img src="/marquee-leaf.png" alt="" />
                        <p className="text-4xl font-bold text-foreground">GreenGeneration</p>
                        <img src="/marquee-leaf.png" alt="" />
                        <p className="text-4xl font-bold text-foreground">GreenGeneration</p>
                        <img src="/marquee-leaf.png" alt="" />
                        <p className="text-4xl font-bold text-foreground">GreenGeneration</p>
                        <img src="/marquee-leaf.png" alt="" />
                        <p className="text-4xl font-bold text-foreground">GreenGeneration</p>
                        <img src="/marquee-leaf.png" alt="" />
                        <p className="text-4xl font-bold text-foreground">GreenGeneration</p>
                        <img src="/marquee-leaf.png" alt="" />
                        <p className="text-4xl font-bold text-foreground">GreenGeneration</p>
                    </div>
                </div>
                <div className="inline-block animate-marquee">
                    <div className="flex justify-center items-center gap-4">
                        <img src="/marquee-leaf.png" alt="" />
                        <p className="text-4xl font-bold text-foreground">GreenGeneration</p>
                        <img src="/marquee-leaf.png" alt="" />
                        <p className="text-4xl font-bold text-foreground">GreenGeneration</p>
                        <img src="/marquee-leaf.png" alt="" />
                        <p className="text-4xl font-bold text-foreground">GreenGeneration</p>
                        <img src="/marquee-leaf.png" alt="" />
                        <p className="text-4xl font-bold text-foreground">GreenGeneration</p>
                        <img src="/marquee-leaf.png" alt="" />
                        <p className="text-4xl font-bold text-foreground">GreenGeneration</p>
                        <img src="/marquee-leaf.png" alt="" />
                        <p className="text-4xl font-bold text-foreground">GreenGeneration</p>
                    </div>
                </div>
            </div>
        </section>
    )
}