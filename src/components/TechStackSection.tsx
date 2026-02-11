import { motion } from "framer-motion";

interface TechCategory {
  label: string;
  tools: string[];
  color: string;
}

const categories: TechCategory[] = [
  {
    label: "Core",
    tools: ["Python", "SQL", "Azure Data Factory", "Snowflake"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    label: "Analytics",
    tools: ["Power BI", "Advanced Excel"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    label: "Machine Learning",
    tools: ["PyTorch", "Scikit-Learn", "XGBoost"],
    color: "from-violet-500/20 to-purple-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TechStackSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools and technologies I work with daily.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={itemVariants}
              className="glass glass-hover rounded-xl p-6 transition-all group"
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${cat.color} mb-5`}>
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
