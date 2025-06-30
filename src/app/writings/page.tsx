import { getBlogPostList } from "@/utils/file-helpers";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
}

export default async function WritingsPage() {
  const posts = (await getBlogPostList()) as Post[];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 max-w-2xl mx-auto">
        {posts.map((post) => (
          <Link
            href={`/writings/${post.slug}`}
            key={post.slug}
            className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h2>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {post.abstract}
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {post.publishedOn}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
