import * as images from "../../images";


const Score = ()=>{
    return (
        <>
            <div className="w-[75%] p-20">
                <div className="w-full pl-10">
                    <h4 className="font-sansM font-medium text-[#1E1E1E] text-3xl">CBT</h4>
                 </div>
                 <div className="flex flex-col justify-center items-center">
                    <img src={images.yay}  />
                    <p className="font-sansM font-medium text-[#505050] text-2xl">Your total score</p>
                    <h4 className="font-sansM font-medium text-[#1E1E1E] text-5xl my-3">80/100</h4>
                    <button 
                    type="submit"
                    className="bg-[#009EFD] rounded-xl text-[#fff] text-2xl h-[60px] w-[500px]">
                        View Correction
                    </button>
                 </div>
            </div>
        </>
    );
}
export default Score;