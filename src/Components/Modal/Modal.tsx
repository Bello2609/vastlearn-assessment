import CustomButton from "../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { ConfirmModal } from "../../Types/Types";
const Modal = ({ msg }: ConfirmModal)=>{
    const navigate = useNavigate();
    return(
        <>
            <div className="flex flex-col items-center justify-center font-sansM font-medium w-[600px] p-10 shadow-xl">
                <p className="text-[#505050] text-xl">
                    {msg}
                </p>
                <div className="flex items-center justify-evenly w-full mt-5">
                    <CustomButton type="submit" text="Cancel" onClick={()=>navigate(-1)} isModal={true} />
                    <CustomButton type="submit" text="Start"  onClick={()=> navigate("/test")} isModal={true} />
                </div>
            </div>
        </>
    );
}
export default Modal;