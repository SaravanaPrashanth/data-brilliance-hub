import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative w-64 h-72 rounded-2xl overflow-hidden glass gradient-border">
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <span className="text-6xl font-bold gradient-text">SP</span>
                 <img
                    src="/img-05432.jpg"   // <-- replace with your actual image path
                    alt="Saravana Prashanth"
                    className="w-full h-full object-cover"
                  />
              </div>
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3 flex flex-col gap-6"
          >
            <p className="text-muted-foreground leading-relaxed text-base">
              I'm a Data Quality Analyst & Engineer with 3 years of experience transforming raw data into strategic business outcomes. My journey spans building enterprise-grade ETL pipelines at Accenture to developing deep learning models for medical diagnostics during my MSc research.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Accenture</h4>
                  <p className="text-xs text-muted-foreground">Data Analyst - Built scalable data pipelines & BI dashboards for Fortune 500 clients.</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">MSc Data Science</h4>
                  <p className="text-xs text-muted-foreground">University of Sheffield - Distinction. Dissertation on deep learning for medical imaging.</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Certifications</h4>
                  <p className="text-xs text-muted-foreground">Azure Essentials, Microsoft Power BI Desktop, AI Agents with Google & more.</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Focus Areas</h4>
                  <p className="text-xs text-muted-foreground">Data Quality Analyst, Analytics Engineer, BI Analyst.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
