import Principal from './pages/Home/principal';
import Captura from './pages/Form/Captura';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal/>}></Route>
                <Route path="/captura" element={<Captura/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes