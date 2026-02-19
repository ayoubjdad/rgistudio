export default function MinimalTemplate({ data }) {
  return (
    <div style={{ padding: 40, fontFamily: "serif" }}>
      <h1>{data.name}</h1>
      <p>{data.title}</p>
      <hr />
      <p>{data.summary}</p>
    </div>
  );
}
