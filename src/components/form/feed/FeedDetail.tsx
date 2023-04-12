import { Avatar, Box, Button, ButtonGroup } from "@chakra-ui/react";
import {
  faMessage,
  faPaperPlane,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./FeedDetail.module.scss";
import "moment/locale/ko";
import moment from "moment";

const FeedDetail = (props: any) => {
  const writeTime = moment(props.feedData.created_at).fromNow();
  return (
    <div className={styles.feedDetailDiv}>
      <div className={styles.nickName}>
        <Avatar
          name="익명"
          size="sm"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        />
        <h1>
          <p>익명의 개발자</p>
          {writeTime}
        </h1>
      </div>
      <img
        alt=""
        src="https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg"
      />
      <ButtonGroup margin="5px 0 5px 0">
        <Button
          backgroundColor={"transparent"}
          margin={0}
          padding={2}
          leftIcon={<FontAwesomeIcon icon={faThumbsUp} size="lg" />}
        >
          12
        </Button>
        <Button
          backgroundColor={"transparent"}
          margin={0}
          padding={2}
          leftIcon={<FontAwesomeIcon icon={faMessage} size="lg" />}
        >
          3
        </Button>
      </ButtonGroup>
      <Box margin="5px 2px 40px 2px">{props.feedData.description}</Box>
      <div className={styles.commentDiv}>
        {props.feedData.comment?.map((comment: any) => {
          return (
            <li key={comment.id}>
              <p>
                <Avatar
                  name="익명"
                  size="xs"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                />
                &nbsp;&nbsp; 익명{comment.id} &nbsp;&nbsp;{comment.description}
                <div className={styles.commentBtn}>
                  <button>
                    <FontAwesomeIcon icon={faMessage} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </p>
            </li>
          );
        })}
      </div>
      <div className={styles.commentInput}>
        <textarea placeholder="댓글달기" />
        <button>게시</button>
      </div>
    </div>
  );
};

export default FeedDetail;