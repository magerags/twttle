import { cache } from "react";
import { loadBlogPost, getBlogPostList } from "@/utils/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate } from "@/utils/formatDate";

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
    <article className="prose lg:prose-xl mx-auto py-8 px-4 max-w-3xl">
      <p className="text-stone-600 mb-2">
        Published on {formatDate(post.frontmatter.publishedOn)}
      </p>
      <h1 className="text-4xl font-medium mb-8">{post.frontmatter.title}</h1>
      <div className="prose-blue whitespace-pre-wrap">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}

export default BlogPost;
