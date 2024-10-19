import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Layout = lazy(()=> import("./Pages/Layout/Layout"));
const Home = lazy(()=>import("./Pages/Home/Home"));
const Subject = lazy(()=>import("./Pages/Subject/Subject"));
const Confirm = lazy(()=>import("./Pages/Confirm/Confirm"));
const Router = ()=>{
    return (
        <Routes>
            <Route path="/" 
            element={
                <Suspense>
                    <Layout>
                        <Home />
                    </Layout>
                </Suspense>
            } />
            <Route path="/select-subject" 
            element={
                <Suspense>
                    <Layout>
                        <Subject />
                    </Layout>
                </Suspense>
            } />
            <Route path="/confirm" 
            element={
                <Suspense>
                    <Layout>
                        <Confirm />
                    </Layout>
                </Suspense>
            } />
        </Routes>
    )
}
export default Router;