import * as images from "../../images" 
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
const Sidebar = ()=>{
    return (
        <>
            <div className="flex flex-col justify-between w-[25%] h-auto border-2 border-[#EFEFEF] p-10">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <img src={images.Excelaiicon62} />
                        <div className="flex flex-col">
                            <h4 className="font-sans font-semibold  text-base">John Adebayo</h4>
                            <h4 className="font-sansR font-normal">johnadebayo@gmail.com</h4>
                        </div>
                    </div>
                    <div className="flex flex-col text-base mt-5">
                        <div className="flex justify-center items-center font-sansR text-base bg-[#F5F5F5] w-full h-[56px] rounded-full">
                            <button><p className="text-base mr-4"><RiSearchLine /></p></button>
                            <input type="search" placeholder="Search..." className="bg-[#F5F5F5] border-none outline-none h-full" />
                        </div>
                        <NavLink to="/" className="flex items-center w-full h-[56px] p-4 mt-10">
                            <img src={images.home} className="mr-4" />
                            <p className="font-sansM text-[#A5A5A5] font-medium">Home</p>
                        </NavLink>
                        <NavLink to="/" className="flex items-center w-full h-[56px] p-4 bg-[#009EFD] rounded-full mt-20">
                            <img src={images.health} className="mr-4" />
                            <p className="font-sansM text-[#fff] font-medium">CBT</p>
                        </NavLink>
                        <NavLink to="/" className="flex items-center w-full h-[56px] p-4 mt-20">
                            <img src={images.settings} className="mr-4" />
                            <p className="font-sansM text-[#A5A5A5] font-medium">Settings</p>
                        </NavLink>
                    </div>
                </div>
                <div className="flex flex-col">
                    <NavLink to="/" className="flex items-center w-full h-[56px] p-4 mt-10">
                        <img src={images.logout} className="mr-4" />
                        <p className="font-sansM text-[#09090A] font-medium">Logout</p>
                    </NavLink>
                    <div className="flex items-center font-sansR text-base bg-[#F5F5F5] p-4 w-full h-[56px] rounded-full">
                        <img src={images.dark} className="mr-4" />
                        <p className="font-sansM text-[#09090A] font-medium mr-6">Dark mode</p>
                        <img src={images.toggle} className="mr-4" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sidebar;