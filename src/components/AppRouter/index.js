import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "components/Home";
import PlaylistDetails from "components/PlaylistDetails";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlistDetails/:id" element={<PlaylistDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
