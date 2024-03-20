import Link from "next/link";

export default function Blog({params}) {
    return (
        <><h1>Blog</h1><Link href={`/blog/${params.blogId}`}>My blog</Link></>
    );
}