import { useAppDispatch } from "../app/hooks";
import { numChanged } from "../features/appSlice";

const Test = () => {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(numChanged(new Date().getTime()));
  }

  return <button onClick={handleClick}></button>;
};

export default Test;