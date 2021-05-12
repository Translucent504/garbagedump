// import "./App.css";
import CustomAutoComplete from "./Components/Autocomplete";
import { Form } from "antd";
const { Item, useForm } = Form;

function App() {
  const [form] = useForm();
  return (
    <div className="App">
      {/* <h1>TEST</h1> */}
      <Form form={form}>
        <Item name="assignee" label="Assignee">
          <CustomAutoComplete />
        </Item>
      </Form>
    </div>
  );
}

export default App;
