const textStyle = {
  margin: 0,
  maxWidth: "100%",
  wordBreak: "break-word",
  overflowWrap: "break-word",
};

const ModernTemplate = ({ data }) => {
  return (
    <div
      style={{
        width: "210mm",
        height: "297mm",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* LEFT SIDEBAR */}
      <div
        style={{
          gap: 24,
          padding: 32,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f6f6f6",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        {/* Photo */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 8,
            flexShrink: 0,
            overflow: "hidden",
            backgroundColor: "#e0e0e0",
          }}
        >
          {data?.photo ? (
            <img src={data.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} crossOrigin="anonymous" />
          ) : null}
        </div>

        {/* Contact */}
        <div style={{ minWidth: 0 }}>
          <h4 style={{ marginBottom: 8, fontSize: 12 }}>Contact</h4>
          {data?.email ? (
            <p style={{ ...textStyle, fontSize: 11, marginBottom: 4 }}>{data?.email}</p>
          ) : null}
          {data?.phone ? (
            <p style={{ ...textStyle, fontSize: 11 }}>
              {data?.countryCode} {data?.phone}
            </p>
          ) : null}
        </div>

        {/* Compétences */}
        <div style={{ minWidth: 0 }}>
          <h4 style={{ marginBottom: 8, fontSize: 12 }}>Compétences</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {data?.skills?.filter(Boolean).map((skill, index) => (
              <span key={index} style={{ ...textStyle, fontSize: 10, padding: "2px 6px", backgroundColor: "#e0e0e0", borderRadius: 4 }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Formation */}
        <div style={{ minWidth: 0 }}>
          <h4 style={{ marginBottom: 8, fontSize: 12 }}>Formation</h4>
          {data?.education?.map((edu, index) => (
            <div key={index} style={{ marginBottom: 10 }}>
              <strong style={{ ...textStyle, fontSize: 11, display: "block" }}>{edu.degree}</strong>
              <p style={{ ...textStyle, margin: "2px 0", fontSize: 10 }}>{edu.institution}</p>
              <p style={{ ...textStyle, fontSize: 10 }}>{edu.startYear} — {edu.endYear}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT MAIN CONTENT */}
      <div
        style={{
          gap: 20,
          padding: 32,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div>
          <h1 style={{ ...textStyle, fontSize: 24 }}>{data?.name}</h1>
          <h3 style={{ ...textStyle, marginTop: 4, color: "#666", fontSize: 14 }}>{data?.title}</h3>
        </div>

        {/* Profil */}
        <div style={{ minWidth: 0 }}>
          <h4 style={{ marginBottom: 6, fontSize: 12 }}>Profil</h4>
          <p style={{ ...textStyle, lineHeight: 1.4, fontSize: 11 }}>{data?.summary}</p>
        </div>

        {/* Expérience */}
        <div style={{ minWidth: 0 }}>
          <h4 style={{ marginBottom: 12, fontSize: 12 }}>Expérience</h4>
          {data?.experiences?.map((experience, index) => (
            <div key={index} style={{ marginBottom: 16 }}>
              <strong style={{ ...textStyle, fontSize: 12, display: "block" }}>{experience.role}</strong>
              <p style={{ ...textStyle, margin: "2px 0", fontWeight: 500, fontSize: 10 }}>
                {experience.company} — {experience.location}
              </p>
              <p style={{ ...textStyle, margin: "2px 0", color: "#777", fontSize: 10 }}>
                {experience.startDate} — {experience.endDate}
              </p>
              {experience.responsibilities?.length > 0 && (
                <ul style={{ paddingLeft: 16, marginTop: 4, marginBottom: 0 }}>
                  {experience.responsibilities.map((item, i) => (
                    <li key={i} style={{ ...textStyle, marginBottom: 2, fontSize: 10 }}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
