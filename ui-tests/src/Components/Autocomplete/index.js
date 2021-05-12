import debounce from "lodash/debounce";
import { AutoComplete } from "antd";
import { useCallback, useState } from "react";

const AutoComp = ({ value, onChange }) => {
  const [data, setData] = useState([]);

  const handleChange = (v) => {
    console.log({ v });
  };
  const onSearch = useCallback(
    debounce(async (v) => {
      const a = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const result = await a.json();
      setData(
        result.map((r) => ({
          value: r.id,
          label: r.title,
        }))
      );
      // console.log({ body: a.json() });
    }, 800),
    []
  );
  console.log({ data });
  return (
    <div>
      <AutoComplete
        onChange={handleChange}
        allowClear
        mode="combobox"
        options={data}
        onSearch={onSearch}
      />
    </div>
  );
};

export default AutoComp;
