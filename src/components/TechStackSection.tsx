import { motion } from "framer-motion";

interface TechTool {
  name: string;
  icon: string;
}

interface TechCategory {
  label: string;
  tools: TechTool[];
  color: string;
}

const categories: TechCategory[] = [
  {
    label: "Core",
    tools: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "Azure Data Factory", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Snowflake", icon: "https://img.icons8.com/color/48/snowflake.png" },
    ],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    label: "Analytics",
    tools: [
      { name: "Power BI", icon: "https://img.icons8.com/color/48/power-bi.png" },
      { name: "Advanced Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019.png" },
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    label: "Machine Learning",
    tools: [
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "XGBoost", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
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
    <section id="tech" className="py-24 px-6">
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
              <div className="flex flex-wrap gap-3">
                {cat.tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium transition-colors hover:bg-primary/10 hover:border-primary/30 border border-transparent"
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-5 h-5"
                      loading="lazy"
                    />
                    {tool.name}
                  </motion.div>
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
