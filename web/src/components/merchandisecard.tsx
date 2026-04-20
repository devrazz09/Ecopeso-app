interface ProductProps {
    image: string;
    name: string;
    price: number;
    description: string;
}

export default function MerchandiseCard({ image, name, price, description } : ProductProps ){
    return(
        <div className="w-[49%] h-167 flex flex-col justify-between gap-2 rounded-[20px] shadow-[0px_0px_5px_1px_rgba(162,162,162,0.8)] p-6 font-semibold">
            <img className="w-full h-[55%]" src={image} alt="" />
            <p className="text-[40px] font-bold">{name}</p>
            <p className="text-2xl">₱{price}.00</p>
            <p className="text-xl">{description}</p>
            <button className="w-full py-3 rounded-xl bg-primary text-white">Buy Now</button>
        </div>
    )
}