export default function DarkTemplate({ data }) {
  return (
    <div
      style={{
        padding: 40,
        background: "#0f0f0f",
        color: "white",
        minHeight: "100%",
      }}
    >
      <h1>{data.name}</h1>
      <h3 style={{ color: "rgb(254, 80, 17)" }}>{data.title}</h3>
      <p>{data.summary}</p>
    </div>
  );
}
