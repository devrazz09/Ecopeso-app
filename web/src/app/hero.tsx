export default function HeroSection(){
    return(
        <section className="w-full h-dvh p-2">
            <div className="w-full h-dvh flex flex-col justify-center items-center gap-6 bg-[url(/herotrees.png)] bg-cover bg-no-repeat bg-bottom">
                <p className="text-8xl font-bold text-textMainColor mt-32">Sustain a Tree with</p>
                <p className="text-8xl font-bold text-textMainColor">Every <span className="text-secondary">Peso</span></p>
                <div className="w-2/5 h-fit mb-18">
                    <p className="text-textHighlight text-xl text-center">Discover how even a single peso donation can nurture and protect our planet by planting one tree.</p>
                </div>
                <div className="flex gap-4 mb-18">
                    <a className="px-8 py-3 border-2 border-primary bg-primary text-white rounded-lg" href="">Discover More</a>
                    <a className="px-8 py-3 border-white border-2 text-white rounded-lg" href="">How can I help</a>
                </div>
                <div className="w-[65%] h-fit flex justify-between font-bold text-white">
                    <div className="w-[24%] h-25 flex flex-col justify-center items-center gap-1 bg-white/5 backdrop-blur-xs rounded-lg">
                        <p className="text-[32px]">100K+</p>
                        <p className="text-base font-medium">Volunteers</p>
                    </div>
                    <div className="w-[24%] h-25 flex flex-col justify-center items-center gap-1 bg-white/5 backdrop-blur-xs rounded-lg">
                        <p className="text-[32px]">70+</p>
                        <p className="text-base font-medium">Acres Restored</p>
                    </div>
                    <div className="w-[24%] h-25 flex flex-col justify-center items-center gap-1 bg-white/5 backdrop-blur-xs rounded-lg">
                        <p className="text-[32px]">75K+</p>
                        <p className="text-base font-medium">Trees Planted</p>
                    </div>
                    <div className="w-[24%] h-25 flex flex-col justify-center items-center gap-1 bg-white/5 backdrop-blur-xs rounded-lg">
                        <p className="text-[32px]">40+</p>
                        <p className="text-base font-medium">Reforestration</p>
                    </div>
                </div>
            </div>
        </section>
    )
}