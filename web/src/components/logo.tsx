export default function logoComponent(){
    return(
        <div className="w-fit h-fit flex items-center justify-between font-mono font-bold">
            <img src="/logo.png" alt="logo" fetchPriority="high" loading="lazy"/>
            <p className="text-xl text-textMainColor">ECO<span className="text-secondary">PESO</span></p>
        </div>
    )
}