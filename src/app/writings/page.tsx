import { getBlogPostList } from "@/utils/file-helpers";
import PostCard from "@/components/PostCard";

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
          <PostCard
            key={post.slug}
            title={post.title}
            abstract={post.abstract}
            publishedOn={post.publishedOn}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
