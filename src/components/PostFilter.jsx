import React from "react";
import MySelect from "../components/UI/select/MySelect";
import MyInput from "../components/UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {

  return (
    <div >
     <div>
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          plaseholder="Search..."
        />
      </div>
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Sorting by..."
        options={[
          {value: 'title', name: 'By name'},
          {value: 'body', name: 'By description'},
        ]}
      />
    </div>
  );
};
export default PostFilter;
