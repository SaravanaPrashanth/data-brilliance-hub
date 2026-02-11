import { motion } from "framer-motion";

const additionalTools = [
  "Streamlit", "Snowflake", "Tableau", "Git", "Databricks",
  "Apache Airflow", "Kafka", "Jupyter Notebook",
];

const stats = [
  { value: "3+", label: "Years Experience", gradient: "from-primary to-accent" },
  { value: "10+", label: "Projects Completed", gradient: "from-primary to-blue-400" },
  { value: "10+", label: "Certifications", gradient: "from-primary to-violet-500" },
  { value: "10+", label: "Technologies Mastered", gradient: "from-accent to-emerald-500" },
];

const AdditionalTechSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-10 mb-10"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/40 hover:bg-primary/10 transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 text-center overflow-hidden bg-gradient-to-br ${stat.gradient}`}
            >
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
              <div className="relative z-10">
                <span className="text-4xl md:text-5xl font-extrabold gradient-text block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalTechSection;
