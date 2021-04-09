import debounce from "lodash/debounce";
import { AutoComplete } from "antd";

const AutoComp = ({ value, onChange }) => {
  
  return (
    <div>
      <h1>AutoComplete</h1>
      <AutoComplete />
    </div>
  );
};

export default AutoComp;
