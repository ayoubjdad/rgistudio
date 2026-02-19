import { useState } from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import styles from "./CVGenerator.module.scss";

export default function CVGenerator() {
  const [template, setTemplate] = useState("modern");

  const [data, setData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const downloadPDF = async () => {
    const input = document.getElementById("cv-preview");
    if (!input) return;

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
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
        {/* HEADER */}
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
            {Object.keys(data).map((field) => (
              <div key={field} className={styles.input_group}>
                <label>{field}</label>
                <textarea
                  name={field}
                  value={data[field]}
                  onChange={handleChange}
                />
              </div>
            ))}

            <div className={styles.template_switch}>
              <button
                className={template === "modern" ? styles.active : ""}
                onClick={() => setTemplate("modern")}
              >
                Modern
              </button>
              <button
                className={template === "minimal" ? styles.active : ""}
                onClick={() => setTemplate("minimal")}
              >
                Minimal
              </button>
              <button
                className={template === "dark" ? styles.active : ""}
                onClick={() => setTemplate("dark")}
              >
                Dark
              </button>
            </div>

            <div className={styles.download_buttons}>
              <button onClick={downloadPDF}>Download PDF</button>
              <button onClick={downloadTXT}>Download TXT</button>
            </div>
          </div>

          <div className={styles.cv_preview} id="cv-preview">
            {template === "modern" && <ModernTemplate data={data} />}
            {template === "minimal" && <MinimalTemplate data={data} />}
            {template === "dark" && <DarkTemplate data={data} />}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEMPLATES ---------------- */

function ModernTemplate({ data }) {
  return (
    <div className={styles.template_modern}>
      <h1>{data.name}</h1>
      <h3>{data.title}</h3>

      <div className={styles.section}>
        <h4>Contact</h4>
        <p>{data.email}</p>
        <p>{data.phone}</p>
      </div>

      <div className={styles.section}>
        <h4>Profile</h4>
        <p>{data.summary}</p>
      </div>

      <div className={styles.section}>
        <h4>Experience</h4>
        <p>{data.experience}</p>
      </div>

      <div className={styles.section}>
        <h4>Education</h4>
        <p>{data.education}</p>
      </div>

      <div className={styles.section}>
        <h4>Skills</h4>
        <p>{data.skills}</p>
      </div>
    </div>
  );
}

function MinimalTemplate({ data }) {
  return (
    <div className={styles.template_minimal}>
      <h1>{data.name}</h1>
      <p>{data.title}</p>
      <hr />

      <p>{data.summary}</p>
    </div>
  );
}

function DarkTemplate({ data }) {
  return (
    <div className={styles.template_dark}>
      <h1>{data.name}</h1>
      <h3>{data.title}</h3>
      <p>{data.summary}</p>
    </div>
  );
}
