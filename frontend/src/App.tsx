import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form, Table, Title } from "./components";
import axios from "axios";

function App() {
  const [data, setData] = useState<any>([]);
  const ENDPOINT = "http://localhost:3000/employee/";
  const getData = () => {
    axios
      .get(ENDPOINT + "get-all")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createData = (data: any) => {
    axios
      .post(ENDPOINT + "create", data)
      .then((res: any) => {
        console.log(res);
        getData();
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title />
      <Form createData={createData} />
      <Table data={data} />
    </>
  );
}

export default App;
