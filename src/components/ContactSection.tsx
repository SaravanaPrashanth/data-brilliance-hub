import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saravana-spk/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/SaravanaPrashanth",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:ksaravanaprashanth@gmail.com",
    icon: Mail,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to solve data problems?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Let's connect.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 glass glass-hover rounded-lg px-5 py-3 text-foreground font-medium transition-all hover:scale-[1.02]"
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Saravana Prashanth. Built with precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
