import "./App.css";
import { AppRoute } from "./routes/AppRoute";
import useUserStore from "./store/authSore";

const App = () => {
  const { user, status } = useUserStore();

  return (
    <>
      {status === "checking" && <LoadingOverlay />}
      <AppRoute user={user} />
    </>
  );
};

const LoadingOverlay = () => (
  <div className="loading-overlay">
    <div className="loading-spinner"></div>
  </div>
);

export default App;
