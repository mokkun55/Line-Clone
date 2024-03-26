import SignIn from "./components/SignIn";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase.js";
import Line from "./components/Line.jsx";
import "./app.css";

function App() {
  const [user] = useAuthState(auth); //ログイン状態=trueを返す
  return (
    <div>
      {/* 条件演算子  条件 ? 真 : 偽*/}
      {user ? <Line /> : <SignIn/>}
    </div>
  );
}

export default App;
