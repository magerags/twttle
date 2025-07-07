"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

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
            className="block p-6 border rounded-sm border-stone-200 hover:bg-stone-50 transition"
          >
            <p className="text-sm text-stone-500 mb-1">
              {formatDate(post.publishedOn)}
            </p>
            <h2 className="text-2xl font-medium tracking-tight text-stone-800 mb-2">
              {post.title}
            </h2>
            <p className="font-light text-stone-700">{post.abstract}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
