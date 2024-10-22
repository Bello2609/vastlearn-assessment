import { FC } from "react";


type question = {
    question_number: number;
    que_stion: string;
    answer: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>, i:number) => void;
    selected: string
}
const Questions: FC<question> = ({question_number, que_stion, answer, onChange, selected})=>{
    
    return (
        <>
            <div className="flex flex-col">
                <h5 className="font-sansM font-normal text-2xl">Question&nbsp;{ question_number }</h5>
                <p className="font-sansM font-medium text-[#505050] text-lg my-3">{que_stion}</p>
                <div className="flex flex-col">
                    {
                        answer.map((data, i)=>(
                            <div  className="text-lg text-[#505050] font-sansM flex">
                                <input 
                                    type="radio" 
                                    style={{ width: "15px" }} 
                                    checked={ selected === data } 
                                    onChange={(event)=>onChange(event, i)} 
                                    value={data} 
                                />&nbsp;{data}
                            </div>
                        ))
                    }
                    {/* 
                    <div className="text-lg text-[#505050] font-sansM flex">
                        <input type="radio" style={{ width: "15px" }} checked={ selected === "Overflowing" } onChange={handleChange} value="Overflowing" />&nbsp; Overflowing
                        
                    </div>
                    <div className="text-lg text-[#505050] font-sansM flex">
                        <input type="radio" style={{ width: "15px" }} checked={ selected === "Copious" } onChange={handleChange} value="Copious" />&nbsp; Copious
                        
                    </div> */}
                    
                </div>
            </div>
        </>
    );
}
export default Questions;