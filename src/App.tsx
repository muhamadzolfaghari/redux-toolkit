import { appNumSelector, useAppSelector } from "./app/hooks";
import Test from "./components/Test";

const App = () => {
  const num = useAppSelector(appNumSelector);

  return (
    <>
      <h1>{num}</h1>
      <Test></Test>
    </>
  );
};

export default App;
