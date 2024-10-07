import { CombinedSliceReducer, combineSlices } from "@reduxjs/toolkit";
import postsReducer from "./slice/postsSlice";

const rootReducer: CombinedSliceReducer<
  {
    posts: IPostsState;
  },
  {
    posts: IPostsState;
  }
> = combineSlices({
  posts: postsReducer,
});

export default rootReducer;
