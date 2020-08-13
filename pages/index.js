import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Index = () => {
  const { isLoggedIn, mainPosts } = useSelector((state) => ({
    isLoggedIn: state.user.isLoggedIn,
    mainPosts: state.post.mainPosts,
  }));
  console.log({ isLoggedIn, mainPosts });
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Index;
