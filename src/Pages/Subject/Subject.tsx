import { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as images from "../../images";
import FormSelect from "../../Components/FormSelect/FormSelect";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { 
    SubjectOption,
    YearOption, 
    TimeOption, 
    QuestionOption, 
    ExamOption, 
    TopicOption 
} from "../../data";


const Subject: FC = ()=>{
    const navigate = useNavigate();
    return (
        <>
            <div className="p-20">
                <div className="flex items-center ">
                    <img src={images.arrowleft} className="cursor-pointer" onClick={()=> navigate(-1)} />
                    <h4 className="font-sansM font-medium text-[#1E1E1E] text-3xl ml-4">Select a subject</h4>
                </div>
                <div className="flex flex-col mt-10">
                    <FormSelect
                      label="Subject"
                      placeholder="Mathematics"
                      options={SubjectOption}
                      />
                    <FormSelect
                      label="Year"
                      placeholder="2000 Model 1"
                      options={YearOption}
                      />
                    <FormSelect
                      label="Topics"
                      placeholder="All"
                      options={TopicOption}
                      />
                    <FormSelect
                      label="No of questions"
                      placeholder="60"
                      options={QuestionOption}
                      />
                    <FormSelect
                      label="Exam mode"
                      placeholder="Test"
                      options={ExamOption}
                      />
                    <FormSelect
                      label="Total time"
                      placeholder="02:00:00"
                      options={TimeOption}
                      />
                    <CustomButton type="submit" text="Start" isModal={false} onClick={()=> navigate("/confirm")} />
                </div>
            
            </div>
        </>
    )
}
export default Subject;