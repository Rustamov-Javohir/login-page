import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const Root = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/' element={<Navigate to='/login' />} />
                <Route path='/register' element={<h1>Sign up page</h1>} />
            </Routes>
        </>
    );
};

export default Root;
