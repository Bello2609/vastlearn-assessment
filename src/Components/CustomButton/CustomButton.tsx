import { FC } from "react";
import { Button } from "../../Types/Types";
const CustomButton: FC<Button> = ({text, type})=>{
    return (
        <>
            <button 
                type={type} 
                className={
                    (text === "Start" || text === "Submit")
                    ? "bg-[#009EFD] rounded-xl text-[#000] text-2xl h-[40px] w-[144px]"
                    : "bg-[#fff] border-2 border-[#009EFD] rounded-xl text-[#505050] text-2xl w-[144px] h-[40px]"
            }>
                {text}
            </button>
        </>
    );
}
export default CustomButton;