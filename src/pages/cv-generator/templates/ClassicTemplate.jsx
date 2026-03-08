const textStyle = {
  margin: 0,
  maxWidth: "100%",
  wordBreak: "break-word",
  overflowWrap: "break-word",
};

const ClassicTemplate = ({ data }) => {
  return (
    <div
      style={{
        width: "210mm",
        height: "297mm",
        padding: 36,
        boxSizing: "border-box",
        overflow: "hidden",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Header with photo */}
      <div
        style={{
          display: "flex",
          gap: 32,
          alignItems: "center",
          paddingBottom: 24,
          borderBottom: "2px solid #1a1a1a",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            backgroundColor: "#e0e0e0",
          }}
        >
          {data?.photo ? (
            <img src={data.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} crossOrigin="anonymous" />
          ) : null}
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <h1 style={{ ...textStyle, fontSize: 28, fontFamily: "Georgia, serif", marginBottom: 4 }}>{data?.name}</h1>
          <h2 style={{ ...textStyle, fontSize: 14, color: "#555", fontWeight: 400 }}>{data?.title}</h2>
          <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap" }}>
            {data?.email && <span style={{ fontSize: 11 }}>{data.email}</span>}
            {data?.phone && <span style={{ fontSize: 11 }}>{data?.countryCode} {data.phone}</span>}
          </div>
        </div>
      </div>

      {/* Profil */}
      {data?.summary && (
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Profil</h3>
          <p style={{ ...textStyle, fontSize: 11, lineHeight: 1.5 }}>{data.summary}</p>
        </div>
      )}

      {/* Expérience */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 12, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Expérience</h3>
        {data?.experiences?.map((exp, index) => (
          <div key={index} style={{ marginBottom: 16 }}>
            <strong style={{ ...textStyle, fontSize: 12, display: "block" }}>{exp.role}</strong>
            <p style={{ ...textStyle, margin: "2px 0", fontSize: 10, color: "#555" }}>
              {exp.company} — {exp.location} | {exp.startDate} — {exp.endDate}
            </p>
          </div>
        ))}
      </div>

      {/* Formation */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 12, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Formation</h3>
        {data?.education?.map((edu, index) => (
          <div key={index} style={{ marginBottom: 12 }}>
            <strong style={{ ...textStyle, fontSize: 11 }}>{edu.degree}</strong>
            <p style={{ ...textStyle, margin: "2px 0", fontSize: 10 }}>{edu.institution} — {edu.startYear} à {edu.endYear}</p>
          </div>
        ))}
      </div>

      {/* Compétences */}
      {data?.skills?.filter(Boolean).length > 0 && (
        <div>
          <h3 style={{ fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Compétences</h3>
          <p style={{ ...textStyle, fontSize: 10 }}>{data.skills.filter(Boolean).join(" · ")}</p>
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
