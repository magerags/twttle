"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

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
          <Link
            href={`/writings/${post.slug}`}
            key={post.slug}
            className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h3>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {post.abstract}
            </p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
