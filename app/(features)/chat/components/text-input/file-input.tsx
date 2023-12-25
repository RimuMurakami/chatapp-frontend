import React, { useState, useRef } from "react";
import { CiFileOn } from "react-icons/ci";
import { Button, FormControl, Input, Text } from "@chakra-ui/react";

export function FileInput() {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setFileName(event.target.files[0]?.name);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <FormControl>
      <CiFileOn size={"28px"} onClick={handleClick} />
      <Input type="file" id="file" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
      {/* {fileName && <Text>{fileName}</Text>} */}
    </FormControl>
  );
}
