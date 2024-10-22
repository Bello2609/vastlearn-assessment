const SubmitScoreModal = ()=>{
    return(
        <>
            <div className="flex flex-col items-center justify-center w-[100%] h-[100%] bg-[#000] bg-opacity-50 absolute top-0 b0ttom-0 left-0 right-0 z-[30]">
                <div className="flex flex-col items-center justify-center bg-[#fff] absolute z-[50] font-sans  w-[460px] h-[345px] p-10 rounded-md top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <p className="text-[#505050] text-xl font-medium">
                        Submitting....
                    </p>
                </div>
            </div>
        </>
    );
}
export default SubmitScoreModal;