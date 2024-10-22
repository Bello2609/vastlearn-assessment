import { useState, useEffect } from "react";
import * as images from "../../images";
import { axiosInstance } from "../../axios";
import CustomButton from "../../Components/CustomButton/CustomButton";
import SubmitModal from "../../Components/Modal/SubmitModal";
import SubmitScoreModal from "../../Components/Modal/SubmitScoreModal";
import Questions from "../../Components/Questions/Questions";
import { Question } from "../../Types/Types";

const Test = ()=>{
    const [ isSubmitModal, setIsSubmitModal ] = useState<boolean>(false);
    const [ allQuestions, setAllQuestions ] = useState<Question[]>([])
    const [ isSubmitScoreModal, setIsSubmitScoreModal ] = useState<boolean>(false);
    const [ selectedAnswer, setSelectedAnswer ] = useState<{ [key: number]: string }>("");


    const cancelSubmit = ()=>{
        setIsSubmitModal(!isSubmitModal);
    }
    const submitModal = ()=>{
        setIsSubmitModal(!isSubmitModal);
        setIsSubmitScoreModal(!isSubmitScoreModal)
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, i:number)=>{
        const value = event.target.value;
        setSelectedAnswer(prev=>({
            ...prev,
            [i]: value
        }))
    }
    // calculate total score
    const calculateScore = ()=>{
        let score = 0;
        Object.keys(selectedAnswer).forEach((key: string)=>{
            const questionIndex = parseInt(key);
            let correct_answer = allQuestions[questionIndex].correct_answer;
            if(selectedAnswer[questionIndex] == correct_answer){
                score += 10;
            }
        }) 
    }
    const allQuestionedAnswered = Object.keys(selectedAnswer).length === allQuestions.length;
    useEffect(()=>{
        axiosInstance.get("api.php?amount=10&category=9&difficulty=easy&type=multiple").then(res=>{
            console.log(res.data?.results);
            const question_data: Question[] = res?.data?.results.map((data: any)=>{
                const answerChoices = [...data.incorrect_answers];
                const random_index_for_correct_answer = Math.floor(Math.random() * 4);
                answerChoices.splice(random_index_for_correct_answer, 0, data.correct_answer);
                const allQuestion = {
                    que_stion: data.question,
                    correct_answer: data.correct_answer,
                    answer: answerChoices
                }
                console.log(allQuestion);
                return allQuestion
            });
            setAllQuestions(question_data)
        }).catch(err=>{
            console.log(err);
        });
        
    }, [])
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
                       {
                            allQuestions.map((data, i)=>{
                                return (
                                    <Questions 
                                        key={i} 
                                        question_number={ i + 1 } 
                                        que_stion={data.que_stion} 
                                        answer={data.answer} 
                                        selected={selectedAnswer[i] || ""}
                                        onChange={(event)=>handleChange(event, i)}
                                    />
                                )
                            })
                       } 
                        
                    </div>
                    <div className="w-1/2">
                        {/* questions list */}
                        <div className="grid grid-cols-10 gap-4 mb-10">
                            {
                                Array.from(Array(10).keys()).map((num: number)=> num + 1).map((data: number)=>(
                                    <p className="flex justify-center items-center w-[38px] h-[38px] border-2 rounded-md" 
                                        style={{ 
                                            background: selectedAnswer[data - 1] ? "rgba(0, 158, 253, 0.2)" : "#fff", 
                                            border: selectedAnswer[data - 1]? "1px solid rgba(0, 158, 253, 0.5)" :  "ipx solid rgba(17, 17, 19, 0.2)"}}>{data}</p>
                                ))
                            }

                           
                        </div>
                        <CustomButton text="Submit" type="submit" isModal={false}  onClick={()=> setIsSubmitModal(!isSubmitModal)}/>
                    </div>
                </div>
                
                {
                    (isSubmitModal && allQuestionedAnswered) && (<SubmitModal cancel={cancelSubmit} submit={submitModal} />) 
                }
                {
                    isSubmitScoreModal && (<SubmitScoreModal />)
                }

            </div>
        </>
    );
}
export default Test;