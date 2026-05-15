"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../components/map"), { ssr: false });

export default function DonationModal() {
    return (
        <div className="w-1/2 h-2/3 absolute p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex justify-between items-center shadow-[0px_0px_5px_1px_rgba(162,162,162,0.8)] rounded-3xl">
            <div className="w-[49%] h-full rounded-2xl overflow-hidden">
                <Map />
            </div>
            <div className="w-[49%] h-full p-6 relative flex justify-center items-center shadow-[0px_0px_5px_1px_rgba(162,162,162,0.8)] rounded-2xl ">
                <div className="absolute border border-gray-300 px-3 py-1 top-4 right-4 text-gray-500 hover:text-gray-700 rounded-lg">
                    <button>X</button>
                </div>
                <div className="w-full h-[55%] font-mono flex flex-col justify-between items-start">
                    <p className="text-[32px] text-primary font-bold ">Make a Difference</p>
                    <p className="text-[20px] text-foreground font-semibold">Support global reforestation efforts by planting trees for a sustainable future</p>
                    <div className="w-full flex items-center juist-start gap-2"> 
                        <input className="w-1/4 py-2 px-2 border rounded-[10px]" type="text" name="Amount" placeholder="Amount" /> <label className="text-[32px] font-semibold" htmlFor="amount">PESOS</label>
                    </div>
                    <div className="w-full">
                        <select  name="currency" id="currency" className="w-full border text-base rounded-[10px] py-2 px-2">
                            <option value="San Pablo">San Pablo</option>
                            <option value="Los Baños">Los Baños</option>
                            <option value="Calauan">Calauan</option>
                            <option value="Alaminos">Alaminos</option> { /* Add more locations as needed */ }
                        </select>
                    </div>
                    <button className="w-full bg-primary text-white py-3 px-4 rounded-xl">Donate</button>
                </div>
            </div>
        </div>
    )
}