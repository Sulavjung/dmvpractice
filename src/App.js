import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homeComponents/home";
import Layout from "./Layout";
import NoPage from "./NoPage";
import QuizContainer from "./components/QuizContainer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/quiz/:startIndex/:numberOfQuestions" element={<QuizContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
