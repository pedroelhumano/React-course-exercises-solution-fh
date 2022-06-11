
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={<AuthRouter />}
        />

        <Route
          path="/"
          element={<JournalScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}