import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Connection from "./Connection";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Connection" element={<Connection />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
