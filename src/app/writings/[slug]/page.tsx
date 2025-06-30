import { cache } from "react";
import { loadBlogPost, getBlogPostList } from "@/utils/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";

export const getBlogData = cache(loadBlogPost);

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogData(slug);

  return {
    title: `${post.frontmatter.title}`,
    description: post.frontmatter.abstract,
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPostList();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogData(slug);

  return (
    <article className="prose lg:prose-xl mx-auto py-8 px-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-2">{post.frontmatter.title}</h1>
      <p className="text-gray-600 mb-8">
        Published on {post.frontmatter.publishedOn}
      </p>
      <div className="prose-blue">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}

export default BlogPost;
