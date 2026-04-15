export default function HeroDonationSection(){
    return(
        <section className="w-full h-dvh p-2 font-mono">
            <div className="w-full h-full flex flex-col justify-center items-center gap-6 bg-[url(/hero-donate.png)] bg-cover bg-no-repeat bg-bottom">
                <div className="text-8xl flex justify-center items-center flex-col font-bold text-textMainColor">
                    <p>Plant <span className="text-secondary">a Tree,</span></p>
                    <p><span className="text-secondary">Grow</span> a Future</p>
                </div>
                <p className="w-2/5 text-xl text-white/70 text-center">Discover how even a single peso donation can nurture and protect our planet by planting one tree.</p>
                <button className="px-6 py-4 bg-primary text-white rounded-lg">Donate Now</button>
            </div>  
        </section>
    )
}