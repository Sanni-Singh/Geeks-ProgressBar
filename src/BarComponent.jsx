import { useEffect } from "react";
import { useState } from "react";

const BarComponent = ()=>{

    const [val ,setVal] = useState(0);

    useEffect(()=>{
        let timeOut = setInterval(()=>{
        if(val < 100) setVal(val  + 1)
        },100)
        return()=> clearInterval(timeOut)
    },[val])
    
    return(
        <div className="w-[500px] py-4  h-[100%] flex flex-col gap-4 justify-center items-center">
            <p className="text-3xl font-bold">Progress Bar</p>
            <div className="w-[100%] bg-slate-300 relative h-[30px] rounded-xl flex justify-center">
                <p className=" relative z-10 text-lg">{val+"%"}</p>
                <div className="absolute top-0 left-0 bg-green-500  h-[100%] rounded-xl" style={{width:`${val}%`}}></div>
            </div>
            <p className="text-xl">{val === 100 ? "Completed !!!" : "Loading..."}</p>
        </div>

    )
}
export default BarComponent;