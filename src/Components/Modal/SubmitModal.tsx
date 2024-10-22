import CustomButton from "../CustomButton/CustomButton";
import { Submitmodal } from "../../Types/Types";
const SubmitModal = ({ cancel, submit }: Submitmodal)=>{

    return(
        <>
            <div className="flex flex-col items-center justify-center w-[100%] h-[100%] bg-[#000] bg-opacity-50 absolute top-0 b0ttom-0 left-0 right-0 z-[30]">
                <div className="flex flex-col items-center justify-center bg-[#fff] absolute z-[50] font-sansM  w-[600px] p-10 rounded-md top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <p className="text-[#505050] text-xl font-medium">
                        Are you sure you want to submit?
                    </p>
                    <p className="text-[#505050] text-lg font-normal">
                        Corrections cannot be made after submitting test
                    </p>
                    <div className="flex items-center justify-evenly w-full mt-5">
                        <CustomButton type="submit" text="Cancel" onClick={cancel} isModal={true} />
                        <CustomButton type="submit" text="Submit"  onClick={submit} isModal={true} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default SubmitModal;