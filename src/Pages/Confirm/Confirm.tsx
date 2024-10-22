import { FC } from "react";
import Modal from "../../Components/Modal/Modal";



const Confirm: FC = ()=>{

    return (
        <>
            <div className="py-20 w-[70%]">
                 <div className="w-full pl-10">
                    <h4 className="font-sansM font-medium text-[#1E1E1E] text-3xl">CBT</h4>
                 </div>
                 <div className="flex w-full justify-center items-center">
                    <Modal msg="Hello John, you are to answer 100 questions in 90 minutes. Please ensure that you 
                    remain undistracted throughout the duration of the test. The test will automatically
                     submit once the time is up, but you can also click on the submit button if you finish
                    before the allocated time." />  
                 </div>
                  
            </div>
        </>
    );
}
export default Confirm;