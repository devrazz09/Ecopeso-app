export default function HowItWorksContent(){
    return(
        <section className="w-full h-dvh flex justify-between text-foreground font-bold">
            <div className="w-2/4 h-full flex flex-col items-center justify-center">
                <div className="w-[68%] h-fit flex flex-col gap-6 justify-start items-start mr-5">
                    <p className="text-5xl font-bold leading-snug">Sustainable Tree Planting: Making a Difference with EcoPeso</p>
                    <p className="text-lg font-semibold">Explore EcoPeso's innovative approach to sustainable tree planting, where nature's beauty thrives through ethical cultivation and community-driven initiatives.</p>
                    <a className="bg-primary text-white text-base px-7 py-4 rounded-lg mt-4 font-medium" href="">Discover More</a>
                </div>
            </div>
            <div className="w-2/4 h-full relative flex justify-center items-center">
                <img src="/howitworks-plant-pic1.png" alt="" />
                <img className="absolute top-65 left-48" src="/howitworks-plant-pic2.png" alt="" />
                <img className="absolute bottom-63 left-61" src="/howitworks-plant-pic3.png" alt="" />
            </div>
        </section>
    )
} 