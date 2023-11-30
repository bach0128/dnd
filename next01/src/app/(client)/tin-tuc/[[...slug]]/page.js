export default function Posts({ params }) {
  const { slug } = params;
  return (
    <div>
      <h1>Tin tuc: {slug}</h1>
    </div>
  );
}
