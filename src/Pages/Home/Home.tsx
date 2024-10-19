import { useState } from "react";
import Select from "react-dropdown-select";
import * as images from  "../../images";
import { Option } from "../../Types/Types";


const options: Option[] = [
    {
        value: 1,
        label: "JAMB"
    },
    {
        value: 1,
        label: "WAEC"
    }
]
const Recommend = [
    {
        logo: images.JAMB,
        exam_name: "JAMB"
    },
    {
        logo: images.neco,
        exam_name: "NECO"
    },
    {
        logo: images.waec,
        exam_name: "WAEC"
    },
    {
        logo: images.waec,
        exam_name: "WAEC"
    },
    {
        logo: images.waec,
        exam_name: "WAEC"
    },
    {
        logo: images.ielt,
        exam_name: "WAEC"
    },
    {
        logo: images.JAMB,
        exam_name: "JAMB"
    },
    {
        logo: images.neco,
        exam_name: "NECO"
    },
    {
        logo: images.waec,
        exam_name: "WAEC"
    },
    {
        logo: images.waec,
        exam_name: "WAEC"
    },
    {
        logo: images.waec,
        exam_name: "WAEC"
    },
    {
        logo: images.ielt,
        exam_name: "WAEC"
    }
]
const Home = ()=>{
    const [values, setValues ] = useState<Option[]>([]);
    return (
        <>
            <div className="w-[70%] py-20">
                 <div className="w-full pl-10">
                    <h4 className="font-sansM font-medium text-[#1E1E1E] text-3xl">CBT</h4>
                 </div>
                 <div className="flex flex-col justify-center items-center my-20">
                    <div className="flex flex-col items-center">
                        <h4 className="font-sansM font-medium text-[40px]">What exam do you want to prepare for?</h4>
                        <Select 
                            options={options}
                            onChange={(values) => setValues(values)}
                            values={values}
                            style={{
                                width: "500px",
                                marginTop: "20px",
                                border: "1px solid #111113",
                                borderRadius: "10px",
                                height: "60px"
                            }}
                            placeholder="https://gsjvfsjkskahdhjdjdklaadujmsn"                       
                        />
                    </div>
                    <div className="flex flex-col mt-24">
                        <p className="font-sansM font-medium text-xl">Recommended Exams</p>
                        <div className="grid grid-cols-6 gap-10 mt-10">
                            {
                                Recommend.map(data=>(
                                    <>
                                        <div className="flex flex-col items-center">
                                            <img src={data.logo} />
                                            <p className="font-sansM font-medium text-xl">{data.exam_name}</p>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                 </div>
            </div>
        </>
    );
}
export default Home;