const ModernTemplate = ({ data }) => {
  return (
    <div
      style={{
        width: "210mm",
        height: "297mm",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        boxSizing: "border-box",
      }}
    >
      {/* LEFT SIDEBAR */}
      <div
        style={{
          gap: 40,
          padding: 40,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f6f6f6",
        }}
      >
        {/* Avatar Placeholder */}
        <div
          style={{
            backgroundColor: "#e0e0e0",
            width: 100,
            height: 100,
            borderRadius: 8,
          }}
        />

        {/* Contact */}
        <div>
          <h4 style={{ marginBottom: 10 }}>Contact</h4>
          <p>{data?.email}</p>
          <p>
            {data?.countryCode} {data?.phone}
          </p>
        </div>

        {/* Skills */}
        <div>
          <h4 style={{ marginBottom: 10 }}>Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data?.skills?.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h4 style={{ marginBottom: 10 }}>Education</h4>
          {data?.education?.map((edu, index) => (
            <div key={index} style={{ marginBottom: 15 }}>
              <strong>{edu.degree}</strong>
              <p style={{ margin: "4px 0" }}>{edu.institution}</p>
              <p style={{ margin: 0 }}>
                {edu.startYear} - {edu.endYear}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT MAIN CONTENT */}
      <div
        style={{
          gap: 40,
          padding: 40,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div style={{ height: 100 }}>
          <h1 style={{ margin: 0 }}>{data?.name}</h1>
          <h3 style={{ marginTop: 8, color: "#666" }}>{data?.title}</h3>
        </div>

        {/* Profile */}
        <div>
          <h4 style={{ marginBottom: 10 }}>Profile</h4>
          <p style={{ lineHeight: 1.6 }}>{data?.summary}</p>
        </div>

        {/* Experience */}
        <div>
          <h4 style={{ marginBottom: 20 }}>Experience</h4>
          {data?.experiences?.map((experience, index) => (
            <div key={index} style={{ marginBottom: 25 }}>
              <strong>{experience.role}</strong>
              <p style={{ margin: "4px 0", fontWeight: 500 }}>
                {experience.company} — {experience.location}
              </p>
              <p style={{ margin: "4px 0", color: "#777", fontSize: 14 }}>
                {experience.startDate} - {experience.endDate}
              </p>

              <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                {experience.responsibilities?.map((item, i) => (
                  <li key={i} style={{ marginBottom: 4 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
