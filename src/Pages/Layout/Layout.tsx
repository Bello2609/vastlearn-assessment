import Sidebar from "../../Components/Sidebar/Sidebar";
type Children = {
    children: JSX.Element
}
const Layout  = ({children}: Children)=>{
    return (
        <>
            <div className="flex w-[100%] h-auto">
                <Sidebar />
                {children}
            </div>
        </>
    )
}
export default Layout;