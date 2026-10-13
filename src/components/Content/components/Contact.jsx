import { motion } from "framer-motion";
import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";

const contacts = [
  {
    icon: <Email />,
    label: "E-mail",
    href: "mailto:lucasantony815@gmail.com",
  },
  {
    icon: <LinkedIn />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rui-lucas-a-gomes/",
  },
  {
    icon: <GitHub />,
    label: "GitHub",
    href: "https://github.com/ruiluucas",
  },
  {
    icon: <WhatsApp />,
    label: "WhatsApp",
    href: "https://wa.me/5544997483524",
  },
  {
    icon: <Instagram />,
    label: "Instagram",
    href: "https://www.instagram.com/rui_luucas/",
  },
];

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 2, delay: 1 } }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0, transition: { duration: 2, delay: 2 } }}
      className="flex flex-col cursor-default sm:h-min scroll-mt-24"
      id="contact"
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "circInOut" }}
        className="text-[11px] uppercase tracking-[0.25em] text-green-500/80"
      >
        Contato
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "circInOut" }}
        style={{ textShadow: "0 0 5px #FFF, 0 0 60px rgba(34,197,94,0.5)" }}
        className="mt-2 text-4xl font-bold leading-tight text-white"
      >
        Vamos conversar
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "circInOut" }}
        className="mt-3 max-w-sm text-sm font-light leading-relaxed text-white/70"
      >
        Uma ideia pra tirar do papel, alguém pra cuidar da parte técnica ou só
        trocar ideia sobre software, dados e IA —{" "}
        <span className="text-white/90">escolhe um canal e me chama</span>.
      </motion.p>

      <div className="mt-5 flex flex-wrap gap-2">
        {contacts.map((contact, key) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            aria-label={contact.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.6 + key * 0.08 }}
            className="group flex cursor-pointer items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 transition-colors hover:border-green-500/60 pointer-events-auto"
          >
            <span className="text-green-500 text-lg leading-none">
              {contact.icon}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/50 transition-colors group-hover:text-white/90">
              {contact.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
