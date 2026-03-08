const textStyle = {
  margin: 0,
  maxWidth: "100%",
  wordBreak: "break-word",
  overflowWrap: "break-word",
};

const MinimalTemplate = ({ data }) => {
  return (
    <div
      style={{
        width: "210mm",
        height: "297mm",
        padding: 40,
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Photo - centered */}
      <div
        style={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          overflow: "hidden",
          marginBottom: 16,
          backgroundColor: "#f0f0f0",
        }}
      >
        {data?.photo ? (
          <img src={data.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} crossOrigin="anonymous" />
        ) : null}
      </div>

      {/* Name & Title */}
      <h1 style={{ ...textStyle, fontSize: 26, fontWeight: 600, marginBottom: 4 }}>{data?.name}</h1>
      <h2 style={{ ...textStyle, fontSize: 13, color: "#666", fontWeight: 400, marginBottom: 16 }}>{data?.title}</h2>

      {/* Contact inline */}
      <div style={{ display: "flex", gap: 20, marginBottom: 24, flexWrap: "wrap", justifyContent: "center" }}>
        {data?.email && <span style={{ fontSize: 10 }}>{data.email}</span>}
        {data?.phone && <span style={{ fontSize: 10 }}>{data?.countryCode} {data.phone}</span>}
      </div>

      <div style={{ width: "100%", maxWidth: 500, textAlign: "left" }}>
        {/* Profil */}
        {data?.summary && (
          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 11, marginBottom: 6, fontWeight: 600, letterSpacing: 0.5 }}>PROFIL</h3>
            <p style={{ ...textStyle, fontSize: 10, lineHeight: 1.5 }}>{data.summary}</p>
          </div>
        )}

        {/* Expérience */}
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: 11, marginBottom: 10, fontWeight: 600, letterSpacing: 0.5 }}>EXPÉRIENCE</h3>
          {data?.experiences?.map((exp, index) => (
            <div key={index} style={{ marginBottom: 14 }}>
              <strong style={{ ...textStyle, fontSize: 11, display: "block" }}>{exp.role}</strong>
              <p style={{ ...textStyle, margin: "2px 0", fontSize: 10, color: "#666" }}>
                {exp.company} · {exp.location} · {exp.startDate} — {exp.endDate}
              </p>
            </div>
          ))}
        </div>

        {/* Formation */}
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: 11, marginBottom: 10, fontWeight: 600, letterSpacing: 0.5 }}>FORMATION</h3>
          {data?.education?.map((edu, index) => (
            <div key={index} style={{ marginBottom: 10 }}>
              <strong style={{ ...textStyle, fontSize: 10 }}>{edu.degree}</strong>
              <p style={{ ...textStyle, margin: "2px 0", fontSize: 10 }}>{edu.institution} · {edu.startYear} — {edu.endYear}</p>
            </div>
          ))}
        </div>

        {/* Compétences */}
        {data?.skills?.filter(Boolean).length > 0 && (
          <div>
            <h3 style={{ fontSize: 11, marginBottom: 8, fontWeight: 600, letterSpacing: 0.5 }}>COMPÉTENCES</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "flex-start" }}>
              {data.skills.filter(Boolean).map((skill, i) => (
                <span key={i} style={{ fontSize: 9, padding: "3px 8px", border: "1px solid #ddd", borderRadius: 4 }}>{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MinimalTemplate;
