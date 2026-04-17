import FeatureCard from "@/components/featurecard"
export default function HowItWorksFeatures(){
    return(
        <section className="w-full h-[80dvh] flex flex-col items-center gap-2 font-bold">
            <img className="mb-6" src="/leafbreak.png" alt="" />
            <p className="text-xl text-primary">Empowering Change</p>
            <p className="text-[40px] text-foreground mb-6">EcoPeso's Tree Planting Initiative</p>
            <div className="w-[85%] flex flex-wrap justify-between gap-6">
                <FeatureCard title="Ai Chat Support" description="Our AI chat support is available 24/7 to help you with any inquiries, provide information, and guide you through the process." image="/ai.png"/>
                <FeatureCard title="Real-Time Donation Monitoring" description="With our real-time donation tracking feature, you can see how your donations are being used and the immediate impact on our tree planting projects." image="/graph.png"/>
                <FeatureCard title="Maintenance and Monitoring" description="We provide ongoing maintenance and monitoring to ensure the trees thrive in their new environment, maximizing their environmental impact." image="/maintenance.png"/>
                <FeatureCard title="Choose Location" description="Prepare the chosen site for planting, ensuring it meets ecopeso's specific requirements for soil preparation and environmental conditions." image="/maps.png"/>
            </div>
        </section>
    )
}