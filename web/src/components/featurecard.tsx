interface FeatureCardProps {
    title: string;
    description: string;
    image: string;
}

export default function FeatureCard({ title, description, image } : FeatureCardProps){
    return(
        <div className="w-[49%] h-41 shadow-md shadow-gray-300 rounded-lg flex justify-center items-center gap-4">
            <div className="w-[85%] h-4/5 flex justify-center items-start gap-3">
                <div className="p-3 bg-primary flex justify-center items-center rounded-full mt-4">
                    <img  src={image} alt="" />
                </div>
                <div className="w-[85%] h-full flex flex-col justify-center ">
                    <p className="text-2xl font-semibold">{title}</p>
                    <p className="text-base font-semibold w-full">{description}</p>
                </div>
            </div>
        </div>
    )
}