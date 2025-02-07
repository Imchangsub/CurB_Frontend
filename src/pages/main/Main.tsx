import { useDisclosure } from "@chakra-ui/react";
import Login from "components/form/User/Login";
import React, { ReactElement } from "react";
import Feed from "./Feed";
function Main(): ReactElement {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  return (
    <>
      <button onClick={() => onLoginOpen()}>로그인</button>
      {/* <button onClick={() =>}></button> */}
      <Login isOpen={isLoginOpen} onClose={onLoginClose} />
      <Feed />
    </>
  );
}

export default Main;
