import FormInput from "./FormInput";
import { useRef, useState } from "react";

const Form = () => {
  const [counter, setCounter] = useState(1);

  const firstCourseNameRef = useRef();
  const firstCourseGradeRef = useRef();
  const firstCourseUnitRef = useRef();
  const secondCourseNameRef = useRef();
  const secondCourseGradeRef = useRef();
  const secondCourseUnitRef = useRef();
  const thirdCourseNameRef = useRef();
  const thirdCourseGradeRef = useRef();
  const thirdCourseUnitRef = useRef();
  const fourthCourseNameRef = useRef();
  const fourthCourseGradeRef = useRef();
  const fourthCourseUnitRef = useRef();
  const fifthCourseNameRef = useRef();
  const fifthCourseGradeRef = useRef();
  const fifthCourseUnitRef = useRef();
  const sixthCourseNameRef = useRef();
  const sixthCourseGradeRef = useRef();
  const sixthCourseUnitRef = useRef();

  const firstCourseUnit = parseInt(firstCourseUnitRef.current?.value);
  const secondCourseUnit = parseInt(secondCourseUnitRef.current?.value);
  const thirdCourseUnit = parseInt(thirdCourseUnitRef.current?.value);
  const fourthCourseUnit = parseInt(fourthCourseUnitRef.current?.value);
  const fifthCourseUnit = parseInt(fifthCourseUnitRef.current?.value);
  const sixthCourseUnit = parseInt(sixthCourseUnitRef.current?.value);

  const firstCourseGrade = firstCourseGradeRef.current?.value;
  const secondCourseGrade = secondCourseGradeRef.current?.value;
  const thirdCourseGrade = thirdCourseGradeRef.current?.value;
  const fourthCourseGrade = fourthCourseGradeRef.current?.value;
  const fifthCourseGrade = fifthCourseGradeRef.current?.value;
  const sixthCourseGrade = sixthCourseGradeRef.current?.value;

  const addCourse = () => {
    setCounter((prevstate) => ++prevstate);
  };

  let totalUnits;

  const calculateGP = () => {
    totalUnits +=
      firstCourseUnit +
      (secondCourseUnit || 0) +
      (thirdCourseUnit || 0) +
      (fourthCourseUnit || 0) +
      (fifthCourseUnit || 0) +
      (sixthCourseUnit || 0);

    console.log(totalUnits);

    let weightedSum;
  };

  return (
    <>
      <form>
        <FormInput
          nameRef={firstCourseNameRef}
          gradeRef={firstCourseGradeRef}
          unitRef={firstCourseUnitRef}
        />
        {counter >= 2 && (
          <FormInput
            nameRef={secondCourseNameRef}
            gradeRef={secondCourseGradeRef}
            unitRef={secondCourseUnitRef}
          />
        )}{" "}
        {counter >= 3 && (
          <FormInput
            nameRef={thirdCourseNameRef}
            gradeRef={thirdCourseGradeRef}
            unitRef={thirdCourseUnitRef}
          />
        )}
        {counter >= 4 && (
          <FormInput
            nameRef={fourthCourseNameRef}
            gradeRef={fourthCourseGradeRef}
            unitRef={fourthCourseUnitRef}
          />
        )}{" "}
        {counter >= 5 && (
          <FormInput
            nameRef={fifthCourseNameRef}
            gradeRef={fifthCourseGradeRef}
            unitRef={fifthCourseUnitRef}
          />
        )}
        {counter >= 6 && (
          <FormInput
            nameRef={sixthCourseNameRef}
            gradeRef={sixthCourseGradeRef}
            unitRef={sixthCourseUnitRef}
          />
        )}{" "}
        {/* {counter >= 7 && <FormInput />}
        {counter >= 8 && <FormInput />} {counter >= 9 && <FormInput />}
        {counter >= 10 && <FormInput />} {counter >= 11 && <FormInput />}
        {counter >= 12 && <FormInput />} {counter >= 13 && <FormInput />} */}
      </form>
      <div>
        <button onClick={addCourse}>Add Course</button>
        <button onClick={calculateGP}>Calculate</button>
      </div>
    </>
  );
};

export default Form;
