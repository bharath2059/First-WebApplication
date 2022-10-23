import React from "react";

import { useChecklist } from "react-checklist";

const data = [
  { _id: 1, label: "Bharath" },
  { _id: 2, label: "Assignment" },
  { _id: 3, label: "2" },
];

export default () => {
  const { handleCheck, isCheckedAll, checkedItems } = useChecklist(data, {
    key: "_id",
    keyType: "number",
  });

  return (
    <div className="CheckList">
      <ul>
        <h1>CheckList</h1>
        <li>
          <input
            className="inputCheckbox"
            type="checkbox"
            onChange={handleCheck}
            checked={isCheckedAll}
          />
          <label>Check All</label>
        </li>

        {data.map((v, i) => (
          <li key={i}>
            <input
              type="checkbox"
              data-key={v._id} // 3
              onChange={handleCheck} // 4
              checked={checkedItems.has(v._id)} // 5
            />
            <label>{v.label}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};
