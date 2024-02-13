import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu, Layout, Statistics, History, NoPage } from "./routes/index";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Menu />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/chart" element={<Statistics />} />
                    </Route>
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
