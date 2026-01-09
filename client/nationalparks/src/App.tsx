/** @format */

import AppRouter from "./routes/AppRouter";
import { useAppSelector } from "./store/hooks";

function App() {
  const { isAuthenticated } = useAppSelector((state) => state.authSlice);

  return isAuthenticated ? <AppRouter /> : <h1>Sign up</h1>;
}

export default App;
