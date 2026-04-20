import Image from "next/image"

export default function StatisticsSection(){
    return(
        <section className="w-full h-[115dvh] flex justify-center items-center bg-[url(/homestatsbg.png)] bg-center bg-fit bg-no-repeat z-20 mix-blend-multiply relative -top-38 text-white">
            <div className="w-[90%] h-3/5 flex justify-between items-center">
                <div className="p-12 flex flex-col justify-center items-start gap-8">
                    <p className="text-base font-semibold">WHY CHOOSE US</p>
                    <p className="w-3/5 text-5xl font-semibold">Committed to a Sustainable Future</p>
                    <p className="w-1/2 text-xl font-medium">Join us in our mission to plant trees and foster a sustainable environment for future generations.</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <Image src='/circle-check-filled.svg' width={35} height={35} alt="Check Icon"/>
                            <p>Sustainable resources</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src='/circle-check-filled.svg' width={35} height={35} alt="Check Icon"/>
                            <p>75K+ Trees Planted</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src='/circle-check-filled.svg' width={35} height={35} alt="Check Icon"/>
                            <p>30M+ Donators</p>
                        </div>
                    </div>
                </div>
                <img src="/statsplant.png" alt="" />
            </div>
        </section>
    )
}