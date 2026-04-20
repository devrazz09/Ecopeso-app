import MerchandiseCard from "@/components/merchandisecard"
export default function MerchandiseSection(){
    return(
        <section className="w-[90%] h-fit flex flex-col justify-start items-center gap-12 font-mono mb-24">   
            <img src="/leafbreak.png" alt="" />
            <div className="font-bold w-fit">
                <p className="text-xl text-center">Earth-Friendly Essentials</p>
                <p className="text-[40px]">Sustainable Solutions for a Greener Future</p>
            </div>
            <div className="w-full h-fit flex flex-wrap justify-between items-center gap-y-10">
                <MerchandiseCard image="/product1.png" name="Bio Paper Tube" price={95} description="Made from biodegradable materials, it offers a stylish and environmentally conscious alternative to traditional packaging."/>
                <MerchandiseCard image="/product2.png" name="Eco Bag" price={15} description="reusable and environmentally friendly alternatives to single-use plastic bags. Made from sustainable materials, they help reduce waste and support eco-conscious living"/>
            </div>
        </section>
    )
}