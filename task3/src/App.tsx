import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/slice/postsSlice";
import { AppDispatch, RootState } from "./store/store";
import "./App.css";
import TablePosts from "./components/table/tablePosts";
import { Button } from "antd";
import CreatePost from "./components/modal/createPost";

const PostsComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = {
    posts: useSelector((state: RootState) => state.posts.posts),
    status: useSelector((state: RootState) => state.posts.status),
    error: useSelector((state: RootState) => state.posts.error),
  };

  const handleModalCreatePostRef = useRef<IHandleModal>(null);

  const openModalCreatePost = () => {
    handleModalCreatePostRef.current?.handleOpen();
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="body">
      <h1 className="header">Posts</h1>
      <div className="button-create-post">
        <Button onClick={openModalCreatePost} type="primary">
          Create Post
        </Button>
      </div>
      {data.status === "loading" && <div>Loading...</div>}
      {data.error && <div>Error: {data.error}</div>}
      <TablePosts data={data.posts} />
      <CreatePost ref={handleModalCreatePostRef} />
    </div>
  );
};

export default PostsComponent;
