export default function ModernTemplate({ data }) {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 36 }}>{data.name}</h1>
      <h3 style={{ color: "rgb(254, 80, 17)" }}>{data.title}</h3>

      <p>{data.summary}</p>

      <h4>Experience</h4>
      <p>{data.experience}</p>

      <h4>Education</h4>
      <p>{data.education}</p>

      <h4>Skills</h4>
      <p>{data.skills}</p>
    </div>
  );
}
