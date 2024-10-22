import { FC } from "react";
import { Button } from "../../Types/Types";
const CustomButton: FC<Button> = ({text, type, onClick, isModal})=>{
    return (
        <>
            {
                isModal ? 
                (
                    <button 
                    type={type} 
                    onClick={onClick}
                    className={
                        (text === "Start" || text === "Submit")
                        ? `bg-[#009EFD] rounded-xl text-[#000] text-2xl h-[40px] w-[114px]` 
                        : `bg-[#fff] border-2 border-[#009EFD] rounded-xl text-[#505050] text-2xl w-[144px] h-[40px]`
                    }>
                        {text}
                    </button>
                )
            : (
                    <button 
                    type={type} 
                    onClick={onClick}
                    className={
                        (text === "Start" || text === "Submit")
                        ? `bg-[#009EFD] rounded-xl text-[#000] text-2xl h-[60px] w-[500px]` 
                        : `bg-[#fff] border-2 border-[#009EFD] rounded-xl text-[#505050] text-2xl w-[144px] h-[40px]`
                    }>
                        {text}
                    </button>
            )
            }
        </>
    );
}
export default CustomButton;