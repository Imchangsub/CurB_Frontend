import React, { useState, useRef } from "react";
import {
  Stack,
  Text,
  Box,
  Avatar,
  Flex,
  HStack,
  Progress,
} from "@chakra-ui/react";
import { MockCont } from "../../MsgMock";
import { Card } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { BsChatSquareHeart } from "react-icons/bs";

export default function MsgDetail(props: MockCont) {
  const [isHovering, setIsHovering] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const timeRef = useRef(null);

  const handleDeleteClick = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <Flex justify={"space-evenly"}>
      <Stack>
        <Text mt={"4rem"}>{props.time}</Text>
      </Stack>
      <Stack
        borderWidth="1px"
        borderColor="navy"
        ref={timeRef}
        mr="9rem"
      ></Stack>
      <Box
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {" "}
        <BsChatSquareHeart color="red" />{" "}
        <Card
          sx={{
            width: "25rem",
            my: 4,
            p: 5,
            pb: 10,
            borderRadius: "7%",
            bg: props.user.isMe === true ? "blue.200" : "gray.200",
            _hover: { bg: "gray.100", cursor: "pointer" },
          }}
        >
          <HStack spacing={2} direction="row">
            <Avatar mr={0}>{props.user.avatar}</Avatar>
            <Text>{props.content}</Text>
            {isHovering && (
              <FontAwesomeIcon icon={faTrashCan} onClick={handleDeleteClick} />
            )}
          </HStack>
        </Card>
      </Box>
    </Flex>
  );
}
