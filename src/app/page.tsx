import { getBlogPostList } from "@/utils/file-helpers";
import HomeClient from "@/components/HomeClient";
import { Post } from "@/components/HomeClient";

export default async function Home() {
  const posts = (await getBlogPostList()) as Post[];

  return <HomeClient posts={posts} />;
}
