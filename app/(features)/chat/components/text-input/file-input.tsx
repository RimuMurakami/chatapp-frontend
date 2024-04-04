import React, { useState, useRef } from "react";
import { CiFileOn } from "react-icons/ci";
import { FormControl, Input } from "@chakra-ui/react";
import { useDispatchMessages } from "../../contexts/message-context";

export function FileInput() {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatchMessages();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const inputFile = e.target.files[0]?.name;
      // console.log(e.target.files[0]);
      // setFileName(e.target.files[0]?.name);
      const newInputFile = {
        channel_id: 0,
        text: inputFile,
        message_type: "file",
        timestamp: new Date().toLocaleString(),
      };
      console.log(newInputFile);

      // dispatch
      //   ? dispatch({
      //       type: "message/add",
      //       message: newInputFile,
      //     })
      //   : "";
    }
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
    </FormControl>
  );
}
