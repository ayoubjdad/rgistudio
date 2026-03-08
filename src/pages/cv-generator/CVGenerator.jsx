import { useState } from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import styles from "./CVGenerator.module.scss";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";

export default function CVGenerator() {
  const [template, setTemplate] = useState("modern");

  const [data, setData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    summary: "",
    countryCode: "+212",
    photo: null,
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

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => setData({ ...data, photo: reader.result });
    reader.readAsDataURL(file);
  };

  const removePhoto = () => setData({ ...data, photo: null });

  const downloadPDF = async () => {
    const input = document.getElementById("cv-preview");
    if (!input) return;

    const canvas = await html2canvas(input, {
      scale: 2,
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
    let imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Scale down to fit on single page if content is too tall
    if (imgHeight > pageHeight) {
      const scale = pageHeight / imgHeight;
      imgHeight = pageHeight;
      const scaledWidth = imgWidth * scale;
      pdf.addImage(imgData, "PNG", (pageWidth - scaledWidth) / 2, 0, scaledWidth, imgHeight);
    } else {
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    }

    pdf.save("cv.pdf");
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
            Générateur de CV<span>.</span>
          </h1>
          <p>Créez et téléchargez votre CV professionnel en un instant</p>
        </motion.div>

        <div className={styles.cv_content}>
          <div className={styles.cv_form}>
            <div className={styles.input_group}>
              <label>Photo</label>
              <div className={styles.photo_upload}>
                <input
                  type="file"
                  id="cv-photo"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className={styles.photo_input}
                />
                <label htmlFor="cv-photo" className={styles.photo_label}>
                  {data.photo ? "Changer la photo" : "Télécharger une photo"}
                </label>
                {data.photo && (
                  <button type="button" className={styles.photo_remove} onClick={removePhoto}>
                    Supprimer
                  </button>
                )}
              </div>
            </div>

            <div key="name" className={styles.input_group}>
              <label>Nom</label>
              <input
                name={data.name}
                value={data.name}
                onChange={(e) => handleChange(e, "name")}
              />
            </div>

            <div key="title" className={styles.input_group}>
              <label>Titre du poste</label>
              <input
                name={data.title}
                value={data.title}
                onChange={(e) => handleChange(e, "title")}
              />
            </div>

            <div key="email" className={styles.input_group}>
              <label>E-mail</label>
              <input
                name={data.email}
                value={data.email}
                onChange={(e) => handleChange(e, "email")}
              />
            </div>

            <div className={styles.input_group}>
              <label>Téléphone</label>
              <div className={styles.phone_row}>
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
                  placeholder="Numéro de téléphone"
                />
              </div>
            </div>

            <div key="summary" className={styles.input_group}>
              <label>Résumé</label>
              <textarea
                name={data.summary}
                value={data.summary}
                onChange={(e) => handleChange(e, "summary")}
              />
            </div>

            <div className={styles.input_group}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label>Expériences</label>
                <i className={`fi fi-rs-add ${styles.add_btn}`} onClick={addExperience} />
              </div>
              {data.experiences.map((exp, index) => (
                <div key={index} className={styles.exp_block}>
                  <input
                    placeholder="Poste"
                    value={exp.role}
                    onChange={(e) =>
                      handleExperienceChange(index, "role", e.target.value)
                    }
                  />
                  <input
                    placeholder="Entreprise"
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, "company", e.target.value)
                    }
                  />
                  <input
                    placeholder="Lieu"
                    value={exp.location}
                    onChange={(e) =>
                      handleExperienceChange(index, "location", e.target.value)
                    }
                  />
                  <input
                    placeholder="Date de début"
                    value={exp.startDate}
                    onChange={(e) =>
                      handleExperienceChange(index, "startDate", e.target.value)
                    }
                  />
                  <input
                    placeholder="Date de fin"
                    value={exp.endDate}
                    onChange={(e) =>
                      handleExperienceChange(index, "endDate", e.target.value)
                    }
                  />
                  <button
                    type="button"
                    className={styles.remove_btn}
                    onClick={() => removeExperience(index)}
                    aria-label="Supprimer"
                  >
                    <i className="fi fi-rs-trash-xmark" />
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.input_group}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label>Formation</label>
                <i className={`fi fi-rs-add ${styles.add_btn}`} onClick={addEducation} />
              </div>

              {data.education.map((edu, index) => (
                <div key={index} className={styles.edu_block}>
                  <input
                    placeholder="Diplôme"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, "degree", e.target.value)
                    }
                  />
                  <input
                    placeholder="Établissement"
                    value={edu.institution}
                    onChange={(e) =>
                      handleEducationChange(
                        index,
                        "institution",
                        e.target.value
                      )
                    }
                  />
                  <input
                    placeholder="Année de début"
                    value={edu.startYear}
                    onChange={(e) =>
                      handleEducationChange(index, "startYear", e.target.value)
                    }
                  />
                  <input
                    placeholder="Année de fin"
                    value={edu.endYear}
                    onChange={(e) =>
                      handleEducationChange(index, "endYear", e.target.value)
                    }
                  />
                  <button
                    type="button"
                    className={styles.remove_btn}
                    onClick={() => removeEducation(index)}
                    aria-label="Supprimer"
                  >
                    <i className="fi fi-rs-trash-xmark" />
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.input_group}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label>Compétences</label>
                <i className={`fi fi-rs-add ${styles.add_btn}`} onClick={addSkill} />
              </div>

              {data.skills.map((skill, index) => (
                <div key={index} className={styles.skill_row}>
                  <input
                    value={skill}
                    placeholder="Compétence"
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                  />
                  <button
                    type="button"
                    className={styles.remove_btn}
                    onClick={() => removeSkill(index)}
                    aria-label="Supprimer"
                  >
                    <i className="fi fi-rs-trash-xmark" />
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.template_switch}>
              <button
                className={template === "modern" ? styles.active : ""}
                onClick={() => setTemplate("modern")}
              >
                Moderne
              </button>
              <button
                className={template === "classic" ? styles.active : ""}
                onClick={() => setTemplate("classic")}
              >
                Classique
              </button>
              <button
                className={template === "minimal" ? styles.active : ""}
                onClick={() => setTemplate("minimal")}
              >
                Minimal
              </button>
            </div>

            <div className={styles.download_buttons}>
              <button onClick={downloadPDF}>Télécharger le PDF</button>
            </div>
          </div>

          <div className={styles.cv_preview} id="cv-preview">
            {template === "modern" && <ModernTemplate data={data} />}
            {template === "classic" && <ClassicTemplate data={data} />}
            {template === "minimal" && <MinimalTemplate data={data} />}
          </div>
        </div>
      </div>
    </section>
  );
}
