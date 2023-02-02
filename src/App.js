import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Connection from "./Connection";
import MyLogin from './Login';


function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Connection" element={<Connection />} />
                <Route path="/Login" element={<MyLogin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
