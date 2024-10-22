import { useState } from "react";
import * as images from "../../images";
import CustomButton from "../../Components/CustomButton/CustomButton";
import SubmitModal from "../../Components/Modal/SubmitModal";
import SubmitScoreModal from "../../Components/Modal/SubmitScoreModal";
const Test = ()=>{
    const [ selected, setSelected ] = useState<string>("");
    const [ isSubmitModal, setIsSubmitModal ] = useState<boolean>(false);
    const [ isSubmitScoreModal, setIsSubmitScoreModal ] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setSelected(event.target.value);
    }
    const cancelSubmit = ()=>{
        setIsSubmitModal(!isSubmitModal);
    }
    const submitModal = ()=>{
        setIsSubmitModal(!isSubmitModal);
        setIsSubmitScoreModal(!isSubmitScoreModal)
    }
    return(
        <>
            <div className="w-[75%] p-10 relative">
                <div className="flex  justify-between w-full">
                    <div className="flex items-center ">
                        <img src={images.arrowleft} className="cursor-pointer" />
                        <h4 className="font-sansM font-medium text-[#1E1E1E] text-3xl ml-4">CBT: Test Mode</h4>
                    </div>
                    <div className="flex items-center">
                        <p className="font-sansM text-[#505050] text-sm mr-4">Exam in progress</p>
                        <p className="flex justify-center text-[#fff] font-sans font-bold items-center bg-[#009EFD] rounded-md p-5">2:00:00</p>
                    </div>
                </div>
                <div className="flex mt-5">
                    {/* list of questions */}
                    <div className="flex flex-col w-1/2">
                        <div className="flex flex-col mb-5">
                            <h5 className="font-sansM font-normal text-2xl">Question 1</h5>
                            <p className="font-sansM font-medium text-[#505050] text-lg my-3">Identify the correct antonym for the word "abundant."</p>
                            <div className="flex flex-col">
                                <div className="text-lg text-[#505050] font-sansM flex">
                                    <input type="radio" style={{ width: "15px" }} checked={ selected === "Plentiful" } onChange={handleChange} value="Plentiful" />&nbsp; Plentiful
                                </div>
                                <div className="text-lg text-[#505050] font-sansM flex">
                                    <input type="radio" style={{ width: "15px" }} checked={ selected === "Sparse" } onChange={handleChange} value="Sparse" />&nbsp; Sparse
                                    
                                </div>
                                <div className="text-lg text-[#505050] font-sansM flex">
                                    <input type="radio" style={{ width: "15px" }} checked={ selected === "Overflowing" } onChange={handleChange} value="Overflowing" />&nbsp; Overflowing
                                   
                                </div>
                                <div className="text-lg text-[#505050] font-sansM flex">
                                    <input type="radio" style={{ width: "15px" }} checked={ selected === "Copious" } onChange={handleChange} value="Copious" />&nbsp; Copious
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h5 className="font-sansM font-normal text-2xl">Question 1</h5>
                            <p className="font-sansM font-medium text-[#505050] text-lg my-3">Identify the correct antonym for the word "abundant."</p>
                            <div className="flex flex-col">
                                <div className="text-lg text-[#505050] font-sansM flex">
                                    <input type="radio" style={{ width: "15px" }} checked={ selected === "Plentiful" } onChange={handleChange} value="Plentiful" />&nbsp; Plentiful
                                </div>
                                <div className="text-lg text-[#505050] font-sansM flex">
                                    <input type="radio" style={{ width: "15px" }} checked={ selected === "Sparse" } onChange={handleChange} value="Sparse" />&nbsp; Sparse
                                    
                                </div>
                                <div className="text-lg text-[#505050] font-sansM flex">
                                    <input type="radio" style={{ width: "15px" }} checked={ selected === "Overflowing" } onChange={handleChange} value="Overflowing" />&nbsp; Overflowing
                                   
                                </div>
                                <div className="text-lg text-[#505050] font-sansM flex">
                                    <input type="radio" style={{ width: "15px" }} checked={ selected === "Copious" } onChange={handleChange} value="Copious" />&nbsp; Copious
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        {/* questions list */}
                        <div className="grid grid-cols-10 gap-4 mb-10">
                            {
                                Array.from(Array(50).keys()).map(num=> num + 1).map(data=>(
                                    <p className="flex justify-center items-center w-[38px] h-[38px] border-2 rounded-md" 
                                style={{ background: "rgba(0, 158, 253, 0.2)", border: "1px solid rgba(0, 158, 253, 0.5)" }}>{data}</p>
                                ))
                            }

                           
                        </div>
                        <CustomButton text="Submit" type="submit" isModal={false}  onClick={()=> setIsSubmitModal(!isSubmitModal)}/>
                    </div>
                </div>
                {
                    isSubmitModal && (<SubmitModal cancel={cancelSubmit} submit={submitModal} />)
                }
                {
                    isSubmitScoreModal && (<SubmitScoreModal />)
                }

            </div>
        </>
    );
}
export default Test;