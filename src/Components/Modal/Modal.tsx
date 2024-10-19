import CustomButton from "../CustomButton/CustomButton";
const Modal = ()=>{
    return(
        <>
            <div className="flex flex-col items-center justify-center font-sansM font-medium w-[600px] p-10 shadow-xl">
                <p className="text-[#505050] text-xl">
                    Hello John, you are to answer 100 questions in 90 minutes. Please ensure that you 
                    remain undistracted throughout the duration of the test. The test will automatically
                     submit once the time is up, but you can also click on the submit button if you finish
                    before the allocated time.
                </p>
                <div className="flex items-center justify-evenly w-full mt-5">
                    <CustomButton type="submit" text="Cancel"  />
                    <CustomButton type="submit" text="Start"  />
                </div>
            </div>
        </>
    );
}
export default Modal;