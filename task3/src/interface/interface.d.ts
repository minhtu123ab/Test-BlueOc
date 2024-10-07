interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostsState {
  posts: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface IHandleModal {
  handleClose: () => void;
  handleOpen: () => void;
}

interface IDataCreatePost {
  userId: number;
  title: string;
  body: string;
}
