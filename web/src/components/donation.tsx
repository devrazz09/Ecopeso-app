type DonationTitle = string | number;

interface DonatioCardProps {
    title: DonationTitle;
}


export default function DonationCard({ title } : DonatioCardProps ){
    return(
        <div className="w-123.5 h-128.25 flex flex-col justify-center items-center gap-6 bg-white rounded-3xl shadow-[0px_0px_5px_1px_rgba(162,162,162,0.8)] font-mono">
            <img className="px-6 py-4 bg-primary rounded-full" src="/donationcardleaf.png" alt="" />
            <p className="text-3xl font-bold">{title} Donation</p>
            <p className="w-[90%] text-base font-semibold text-center">Raising funds to educate the public about environmental issues</p>
            <button className="bg-primary text-white px-6 py-4 rounded-lg">Donate Now</button>
        </div>
    )
}