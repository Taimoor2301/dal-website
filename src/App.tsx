import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import WhyDal from "./pages/whydal/WhyDal.tsx";
import AboutDal from "./pages/about/AboutDal.tsx";
import JoinDal from "./pages/joinDal/JoinDal.tsx";
import QuestionAnswerPage from "./pages/question-answer-page/QuestionAnswer.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-dal" element={<WhyDal />} />
        <Route path="/about-dal" element={<AboutDal />} />
        <Route path="/join-dal" element={<JoinDal />} />
        <Route path="/faq" element={<QuestionAnswerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
