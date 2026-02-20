import { useState } from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import styles from "./CVGenerator.module.scss";
import ModernTemplate from "./templates/ModernTemplate";

export default function CVGenerator() {
  const [template, setTemplate] = useState("modern");

  const [data, setData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    summary: "",
    countryCode: "+212",
    experiences: [],
    education: [],
    skills: [],
  });

  const handleBasicChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...data.experiences];
    updated[index][field] = value;
    setData({ ...data, experiences: updated });
  };

  const handleEducationChange = (index, field, value) => {
    const updated = [...data.education];
    updated[index][field] = value;
    setData({ ...data, education: updated });
  };

  const handleSkillChange = (index, value) => {
    const updated = [...data.skills];
    updated[index] = value;
    setData({ ...data, skills: updated });
  };

  const addExperience = () => {
    setData({
      ...data,
      experiences: [
        ...data.experiences,
        {
          role: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          responsibilities: [],
        },
      ],
    });
  };

  const addEducation = () => {
    setData({
      ...data,
      education: [
        ...data.education,
        {
          degree: "",
          institution: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const addSkill = () => {
    setData({
      ...data,
      skills: [...data.skills, ""],
    });
  };

  const removeExperience = (index) => {
    const updated = data.experiences.filter((_, i) => i !== index);
    setData({ ...data, experiences: updated });
  };

  const removeEducation = (index) => {
    const updated = data.education.filter((_, i) => i !== index);
    setData({ ...data, education: updated });
  };

  const removeSkill = (index) => {
    const updated = data.skills.filter((_, i) => i !== index);
    setData({ ...data, skills: updated.length ? updated : [""] });
    // keeps at least 1 empty skill
  };

  const handleChange = (e, field) => {
    setData({ ...data, [field]: e.target.value });
  };

  const downloadPDF = async () => {
    const input = document.getElementById("cv-preview");
    if (!input) return;

    const canvas = await html2canvas(input, {
      scale: 3, // higher quality
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = 210;
    const pageHeight = 297;

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0;

    if (imgHeight <= pageHeight) {
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    } else {
      // Multi-page support
      let heightLeft = imgHeight;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
    }

    pdf.save("cv.pdf");
  };

  const downloadTXT = () => {
    const content = `
  ${data.name}
  ${data.title}

  Email: ${data.email}
  Phone: ${data.phone}

  Summary:
  ${data.summary}

  Experience:
  ${data.experience}

  Education:
  ${data.education}

  Skills:
  ${data.skills}
      `;

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "cv.txt";
    link.click();
  };

  return (
    <section className={styles.cv}>
      <div className={styles.cv_container}>
        <motion.div
          className={styles.cv_header}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>
            CV Generator<span>.</span>
          </h1>
          <p>Create and download your professional CV instantly</p>
        </motion.div>

        <div className={styles.cv_content}>
          <div className={styles.cv_form}>
            <div key="name" className={styles.input_group}>
              <label>Name</label>
              <input
                name={data.name}
                value={data.name}
                onChange={(e) => handleChange(e, "name")}
              />
            </div>

            <div key="title" className={styles.input_group}>
              <label>Title</label>
              <input
                name={data.title}
                value={data.title}
                onChange={(e) => handleChange(e, "title")}
              />
            </div>

            <div key="email" className={styles.input_group}>
              <label>Email</label>
              <input
                name={data.email}
                value={data.email}
                onChange={(e) => handleChange(e, "email")}
              />
            </div>

            <div className={styles.input_group}>
              <label>Phone</label>
              <div style={{ display: "flex", gap: 8 }}>
                <select
                  name="countryCode"
                  value={data.countryCode}
                  onChange={handleBasicChange}
                >
                  <option value="+212">+212</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+33">+33</option>
                  <option value="+49">+49</option>
                </select>

                <input
                  name="phone"
                  value={data.phone}
                  onChange={handleBasicChange}
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div key="summary" className={styles.input_group}>
              <label>Summary</label>
              <textarea
                name={data.summary}
                value={data.summary}
                onChange={(e) => handleChange(e, "summary")}
              />
            </div>

            <div className={styles.input_group}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>Experiences</label>
                <i className="fi fi-rs-add" onClick={addExperience} />
              </div>
              {data.experiences.map((exp, index) => (
                <div
                  key={index}
                  style={{
                    gap: 8,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                  }}
                >
                  <input
                    placeholder="Role"
                    value={exp.role}
                    onChange={(e) =>
                      handleExperienceChange(index, "role", e.target.value)
                    }
                  />
                  <input
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, "company", e.target.value)
                    }
                  />
                  <input
                    placeholder="Location"
                    value={exp.location}
                    onChange={(e) =>
                      handleExperienceChange(index, "location", e.target.value)
                    }
                  />
                  <input
                    placeholder="Start Date"
                    value={exp.startDate}
                    onChange={(e) =>
                      handleExperienceChange(index, "startDate", e.target.value)
                    }
                  />
                  <input
                    placeholder="End Date"
                    value={exp.endDate}
                    onChange={(e) =>
                      handleExperienceChange(index, "endDate", e.target.value)
                    }
                  />
                  <i
                    onClick={() => removeExperience(index)}
                    className="fi fi-rs-trash-xmark"
                    style={{
                      width: 28,
                      height: 28,
                      fontSize: 14,
                      border: "none",
                      borderRadius: 8,
                      color: "#ff4d4f",
                      background: "#ff4d5077",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className={styles.input_group}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>Education</label>
                <i className="fi fi-rs-add" onClick={addEducation} />
              </div>

              {data.education.map((edu, index) => (
                <div
                  key={index}
                  style={{
                    gap: 8,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                  }}
                >
                  <input
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, "degree", e.target.value)
                    }
                  />
                  <input
                    placeholder="Institution"
                    value={edu.institution}
                    onChange={(e) =>
                      handleEducationChange(
                        index,
                        "institution",
                        e.target.value,
                      )
                    }
                  />
                  <input
                    placeholder="Start Year"
                    value={edu.startYear}
                    onChange={(e) =>
                      handleEducationChange(index, "startYear", e.target.value)
                    }
                  />
                  <input
                    placeholder="End Year"
                    value={edu.endYear}
                    onChange={(e) =>
                      handleEducationChange(index, "endYear", e.target.value)
                    }
                  />

                  <i
                    onClick={() => removeEducation(index)}
                    className="fi fi-rs-trash-xmark"
                    style={{
                      width: 28,
                      height: 28,
                      fontSize: 14,
                      border: "none",
                      borderRadius: 8,
                      color: "#ff4d4f",
                      background: "#ff4d5077",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className={styles.input_group}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>Skills</label>
                <i className="fi fi-rs-add" onClick={addSkill}></i>
              </div>

              {data.skills.map((skill, index) => (
                <div key={index} style={{ gap: 8, display: "flex" }}>
                  <input
                    key={index}
                    value={skill}
                    placeholder="Skill"
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                  />

                  <i
                    onClick={() => removeSkill(index)}
                    className="fi fi-rs-trash-xmark"
                    style={{
                      width: 28,
                      height: 28,
                      fontSize: 14,
                      border: "none",
                      borderRadius: 8,
                      color: "#ff4d4f",
                      background: "#ff4d5077",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className={styles.template_switch}>
              <button
                className={template === "modern" ? styles.active : ""}
                onClick={() => setTemplate("modern")}
              >
                Modern
              </button>
            </div>

            <div className={styles.download_buttons}>
              <button onClick={downloadPDF}>Download PDF</button>
              <button onClick={downloadTXT}>Download TXT</button>
            </div>
          </div>

          <div className={styles.cv_preview} id="cv-preview">
            {template === "modern" && <ModernTemplate data={data} />}
          </div>
        </div>
      </div>
    </section>
  );
}
