import { getBlogPostList } from "@/utils/file-helpers";
import { formatDate } from "@/utils/formatDate";
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
            className="block p-6 border rounded-sm border-stone-200 hover:bg-stone-50 transition"
          >
            <p className="text-sm text-stone-500 mb-1">
              {formatDate(post.publishedOn)}
            </p>
            <h2 className="text-2xl font-medium tracking-tight text-stone-900 mb-2">
              {post.title}
            </h2>
            <p className="font-normal text-stone-700">{post.abstract}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
