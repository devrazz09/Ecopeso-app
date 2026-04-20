import DonationCard from "@/components/donation"
export default function DonationSection(){
    return(
        <section className="w-full h-dvh relative -top-48">
            <div className="w-4/5 h-fit flex flex-wrap justify-center items-center gap-7 m-auto">
                <DonationCard title="Customized"/>
                <DonationCard title={100}/>
                <DonationCard title={500} />
                <DonationCard title={1000}/>
            </div>
        </section>
    )
}