import Link from 'next/link';
export default function LetsGrowTogetherSection(){
    return(
        <section className="w-full h-[70dvh] flex flex-col  items-center gap-8 relative">
            <img className='absolute -top-4' src="/globeleaf.png" alt="" />
            <img className='mt-12 relative top-12' src="/leafbreak.png" alt="" />
            <p className='text-[40px] text-foreground font-bold mt-18'>Let's Grow Together!</p>
            <p className='w-[55%] text-center text-xl text-foreground font-semibold'>Reforestation plays a crucial role in mitigating climate change impacts. While a billion trees may seem daunting, we're confident that with your invaluable support and participation, we can achieve this ambitious goal and make a significant environmental difference."</p>
            <Link className='bg-primary text-white px-8 py-4 rounded-lg' href={'/'}>Join Us Now</Link>
        </section>  
    )
}