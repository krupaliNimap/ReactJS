import React, { useState } from "react";
function TextareaExample() {
  const [textarea, setTextarea] = useState("");
  const handleChange = (event) => {
    setTextarea(event.target.value);
  };
  return (
    <>
      <textarea type={textarea} onchange={handleChange}></textarea>
    </>
  );
}
export default TextareaExample;
