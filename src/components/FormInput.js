const FormInput = (props) => {
  return (
    <div>
      <input ref={props.nameRef} />
      <select ref={props.unitRef}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <select ref={props.gradeRef} onChange={props.onChange}>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>
    </div>
  );
};

export default FormInput;
