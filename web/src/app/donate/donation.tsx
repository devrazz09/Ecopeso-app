"use client";

import { useState } from "react";

import dynamic from "next/dynamic";
import DonationCard from "@/components/donation"

const DonationModal = dynamic(() => import("./donation-modal"), { ssr: false });



export default function DonationSection(){
    
    const [ showModal, setShowModal ] = useState<boolean>(false);
    const popUpModal = (status : boolean) => setShowModal(status);

    return(
        <section className="w-full h-dvh relative -top-48">
            { showModal && <DonationModal /> }
            <div className="w-4/5 h-fit flex flex-wrap justify-center items-center gap-7 m-auto">
                <DonationCard title="Customized" popUpModal={popUpModal}/>
                <DonationCard title={100} popUpModal={popUpModal}/>
                <DonationCard title={500} popUpModal={popUpModal}/>
                <DonationCard title={1000} popUpModal={popUpModal}/>
            </div>
        </section>
    )
}