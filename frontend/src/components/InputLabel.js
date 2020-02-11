import React from 'react'

export default function InputLabel(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.for}>{props.label}</label>
      <input
        type={props.type}
        id={props.for}
        onChange={props.onChangeHandler}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}