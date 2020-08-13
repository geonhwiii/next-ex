export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "소희",
      },
      content: "첫 번째 게시글",
      Images: [
        {
          src:
            "https://item.kakaocdn.net/do/ca52d69616ce3a26a7c16715ae026bf0f43ad912ad8dd55b04db6a64cddaf76d",
        },
        {
          src:
            "https://item.kakaocdn.net/do/04662534d34586bf964f033d00535549f43ad912ad8dd55b04db6a64cddaf76d",
        },
        {
          src:
            "https://item.kakaocdn.net/do/8031879f003dc2dcac371f9e46961997f43ad912ad8dd55b04db6a64cddaf76d",
        },
      ],
      Comments: [
        {
          User: {
            nicnkname: "dahyun",
          },
          content: "사랑해용",
        },
        {
          User: {
            nicnkname: "sohee",
          },
          content: "저도용",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "dahyun",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
