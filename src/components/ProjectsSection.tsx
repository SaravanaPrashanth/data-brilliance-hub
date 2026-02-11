import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  tag: string;
  description: string;
  impact?: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "London Airbnb Revenue Engine",
    tag: "Machine Learning",
    description:
      "Built a dynamic pricing engine using XGBoost to predict optimal nightly rates for property hosts.",
    impact:
      'Achieved RMSE of £58. Included a counterfactual inference engine to calculate the exact ROI of adding specific amenities (e.g., A/C, WiFi).',
    tech: ["Python", "Streamlit", "Scikit-Learn"],
    link: "https://london-airbnb-predictor-sp.streamlit.app/",
  },
  {
    title: "MSc Dissertation: Deep Learning for Medical Diagnostics",
    tag: "Deep Learning",
    description:
      "Developed a Super-Resolution Generative Adversarial Network (SRGAN) to enhance low-resolution dermoscopic images for skin cancer detection.",
    impact:
      'Improved diagnostic classification accuracy by 12% compared to standard baselines. Achieved "Outstanding" grade & MSc Distinction.',
    tech: ["PyTorch", "ResNet-50", "Computer Vision (GANs)"],
    link: "https://github.com/SaravanaPrashanth/SRGAN-SkinCancer-Classification",
  },
  {
    title: "Dynamic Sales Intelligence",
    tag: "Advanced Excel",
    description:
      "A fully interactive sales reporting tool built entirely in Excel, eliminating the need for expensive BI software.",
    impact:
      'Features dynamic slicing, "What-If" analysis, and automated data retrieval without macros.',
    tech: ["Advanced Excel (XLOOKUP, Pivot Tables, Slicers)", "Data Modeling"],
  },
  {
    title: "NHS Prescribing Patterns",
    tag: "Big Data Analysis",
    description:
      "Conducted longitudinal analysis of 300 Million+ antidepressant prescription records (2021-2024) across England.",
    impact:
      'Identified key cost variations (spending dropped from £290M to £210M) and regional disparities to inform public health policy.',
    tech: ["Python", "Pandas", "Public Health Data"],
  },
  {
    title: "Enterprise Retail ETL Pipeline",
    tag: "Data Engineering",
    description:
      'End-to-end analytics pipeline analyzing retail sales data to uncover top revenue products and regional growth trends.',
    tech: ["SQL", "Azure", "Jupyter Notebooks"],
    link: "https://saravanaprashanth.github.io/data-analysis/"
  },
  {
    title: "Medical Imaging Diagnosis",
    tag: "Deep Learning",
    description:
      "Developed a U-NET architecture for Pancreas segmentation in CT scans and a Super-Resolution GAN for skin cancer classification.",
    impact:
      'Improved diagnostic accuracy and image resolution for automated medical analysis.',
    tech: ["PyTorch", "TensorFlow", "Computer Vision"],
    link: "https://saravanaprashanth.github.io/Pancreas-Segmentation-using-U-NET-Architecture/",
  },
  { 
    title: "DesignForge – AI for Product Creators", 
    tag: "AI Product Development", 
    description: 
      "AI-powered tool enabling zero-cost product photography and instant marketing asset generation for small businesses.", 
    impact: 
      'Built for Google Nano-Banana Hackathon using Gemini 2.5 Flash Image, enabling rapid prototyping and automated content creation.', 
    tech: ["Google AI Studio", "Gemini 2.5 Flash", "ElevenLabs", "CapCut", "API Integration"], 
  },
  { 
    title: "AI-Powered Fundraising Campaign Generator", 
    tag: "Prompt Engineering", 
    description: 
      "Developed a multi-LLM system that generates emotionally compelling fundraising campaigns for charities.", 
    impact: 
      'Led a team of 4 to build guided and minimal-input generation flows using ChatGPT, Claude, and Grok.', 
    tech: ["ChatGPT", "Claude", "Grok", "Prompt Engineering", "Canva", "LLM"],
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-world impact through data, ML, and engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            >
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass glass-hover rounded-xl p-6 group transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {project.description}
              </p>

              {project.impact && (
                <p className="text-sm leading-relaxed mb-4 text-foreground/80">
                  <span className="font-semibold text-primary">Impact:</span>{" "}
                  {project.impact}
                </p>
              )}

              <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-border">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-secondary text-muted-foreground text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
