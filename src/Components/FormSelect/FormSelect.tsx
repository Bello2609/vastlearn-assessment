import Select from "react-dropdown-select";
import { useState, FC } from "react";
import { Option, Formselect } from "../../Types/Types";
const FormSelect: FC<Formselect> = ({label, options, placeholder})=>{
    const [ values, setValues ] = useState<Option[]>([]);
    return (
        <>
            <div className="flex flex-col text-[#505050] mb-5">
                <div className="font-sansM text-xl">
                    <label htmlFor={label}>{label}</label>
                </div>

                <Select 
                    options={options}
                    onChange={(values) => setValues(values)}
                    values={values}
                    style={{
                        width: "500px",
                        marginTop: "20px",
                        border: "1px solid rgba(17, 17, 19, 0.2)",
                        borderRadius: "10px",
                        height: "60px",
                        outline: "none"
                    }}
                    placeholder={placeholder}                      
                />

            </div>
        </>
    );
}
export default FormSelect