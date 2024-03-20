export default function Blogdetails({ params }) {

  console.log(params.blogId)
  return (
    <h1>blog details {params.blogId}</h1>
  );
}