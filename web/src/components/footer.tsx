import Link from "next/link"

export default function Footer(){
    return(
        <footer className="w-full h-[70dvh] relative flex justify-center items-end bg-[url(/footerbg.png)] bg-cover bg-no-repeat bg-center font-mono">
            <div className="w-4/5 h-[30dvh] mb-26 flex justify-between items-center">
                <div className="w-1/3 h-full flex flex-col justify-start items-start gap-4">
                   <div className="flex justify-start items-center">
                        <img src="/logo.png" width={60} height={60} alt="" />
                        <p className="text-4xl font-semibold text-textMainColor">ECO<span className="text-secondary">PESO</span></p>
                    </div>
                    <p className="text-2xl w-3/4 text-white/80">Partner with us to plant trees and nurture a healthier planet.</p>
                </div>
                <div className="w-2/3 h-full flex justify-start items-start gap-32">
                    <div className="flex flex-col justify-start items-start gap-4">
                        <div>
                            <p className="text-3xl text-textMainColor">Navigation</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2 text-2xl text-white/80">
                            <Link href={'/'}>Home</Link>
                            <Link href={'/'}>Donate</Link>
                            <Link href={'/'}>Merchs</Link>
                            <Link href={'/'}>How It Works</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-4">
                        <div>
                            <p className="text-3xl text-textMainColor">About</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2 text-2xl text-white/80">
                            <Link href={'/'}>Mission & Vission</Link>
                            <Link href={'/'}>About Ecopeso</Link>
                            <Link href={'/'}>Our Story</Link>
                            <Link href={'/'}>Learn More</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-4">
                        <div>
                            <p className="text-3xl text-textMainColor">Contacts</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2 text-2xl text-white/80">
                            <Link href={'/'}>Facebook</Link>
                            <Link href={'/'}>Twitter</Link>
                            <Link href={'/'}>Youtube</Link>
                            <Link href={'/'}>Instagram</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}