import { formatDate } from "@/utils/formatDate";
import Link from "next/link";

type PostCardProps = {
  title: string;
  abstract: string;
  publishedOn: string;
  slug: string;
};

function PostCard({ title, abstract, publishedOn, slug }: PostCardProps) {
  return (
    <Link
      href={`/writings/${slug}`}
      className="block p-6 border rounded-sm border-stone-200 hover:bg-stone-50 transition"
    >
      <p className="text-stone-600">{formatDate(publishedOn)}</p>
      <h2 className="text-2xl font-semibold font-lexend tracking-tight text-stone-800 mb-2">
        {title}
      </h2>
      <p className="text-stone-700 font-gt-america">{abstract}</p>
    </Link>
  );
}

export default PostCard;
