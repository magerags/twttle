"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import PostCard from "./PostCard";

interface Post {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
}

export default function RecentPosts({
  animationStarted,
}: {
  animationStarted: boolean;
}) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/posts");
      const allPosts = (await response.json()) as Post[];
      setPosts(allPosts.slice(0, 2));
    }
    fetchPosts();
  }, []);

  return (
    <motion.div
      className="mt-12 w-full max-w-2xl px-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: animationStarted ? 1 : 0,
        y: animationStarted ? 0 : 10,
      }}
      transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
    >
      <div className="grid gap-8">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            abstract={post.abstract}
            publishedOn={post.publishedOn}
            slug={post.slug}
          />
        ))}
      </div>
    </motion.div>
  );
}
