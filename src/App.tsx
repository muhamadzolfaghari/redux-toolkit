import { useEffect } from "react";
import { appNumSelector, useAppSelector } from "./app/hooks";
import Test from "./components/Test";
import { useGetDataQuery, useUpdateDataMutation } from "./features/api";

const App = () => {
  const num = useAppSelector(appNumSelector);
  const { data } = useGetDataQuery();
  const [trigger, { data: mutationData }] = useUpdateDataMutation();

  useEffect(() => {
    if (mutationData) {
      console.log("a user is updated.");
    }
  }, [mutationData]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // This is the a request with fetch
  // useEffect(() => {
  //   fetch("get-data/sample.json")
  //     .then((res) => {
  //       res.json().then((json) => {
  //         console.log(json);
  //       });
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <>
      <button
        onClick={() => {
          trigger(10);
        }}
      >
        update1
      </button>
      <h1>{num}</h1>
      <Test></Test>
    </>
  );
};

export default App;
