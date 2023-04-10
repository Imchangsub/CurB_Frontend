import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/form/SignUp";
import Main from "./pages/main/Main";
import UploadFeed from "./components/form/feed/UploadFeed";
import MsgRoom from "./pages/messagebox/MsgRoom";
import Mailbox from "./pages/messagebox/Mailbox";
import Layout from "./UI/Layout";
import Feed from "./pages/main/Feed";
import WrittenPost from "components/mypages/tabMenu/WrittenPost";
import CommentedPost from "components/mypages/tabMenu/CommentedPost";
import LikedPost from "components/mypages/tabMenu/LikedPost";
import DeletedPost from "components/mypages/tabMenu/DeletedPost";
import MyPage from "pages/mypage/MyPage";
import WrittenComment from "components/mypages/tabMenu/WrittenComment";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MsgRoom />} />
        <Route path="/mailbox" element={<Mailbox />} />
        <Route path="/main" element={<Main />} />
        <Route
          path="/home"
          element={
            <Layout>
              <Feed />
            </Layout>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload" element={<UploadFeed />} />

        {/* 내정보 */}
        <Route path="/mypage" element={<MyPage />}>
          {/* 작성글, 작성댓글, 댓글단 글,  좋아요한 글, 삭제한 글 */}
          <Route path="written" element={<WrittenPost />} />
          <Route path="writtencomment" element={<WrittenComment />} />
          <Route path="comments" element={<CommentedPost />} />
          <Route path="likes" element={<LikedPost />} />
          <Route path="writtendelete" element={<DeletedPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
