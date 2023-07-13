import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TweetsPage } from "./pages/TweetsPage";
import { ScrollToTopButton } from "./components/ScrollToTopBtn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
        </Route>
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;
