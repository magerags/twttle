import { getBlogPostList } from "@/utils/file-helpers";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await getBlogPostList();
  return NextResponse.json(posts);
}
