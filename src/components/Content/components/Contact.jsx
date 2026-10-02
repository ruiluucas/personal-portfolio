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
    value: "lucasantony815@gmail.com",
    href: "mailto:lucasantony815@gmail.com",
  },
  {
    icon: <LinkedIn />,
    label: "LinkedIn",
    value: "/in/rui-lucas-a-gomes",
    href: "https://www.linkedin.com/in/rui-lucas-a-gomes/",
  },
  {
    icon: <GitHub />,
    label: "GitHub",
    value: "/ruiluucas",
    href: "https://github.com/ruiluucas",
  },
  {
    icon: <WhatsApp />,
    label: "WhatsApp",
    value: "conversa direta",
    href: "https://wa.me/5544997483524",
  },
  {
    icon: <Instagram />,
    label: "Instagram",
    value: "@rui_luucas",
    href: "https://www.instagram.com/rui_luucas/",
  },
];

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 2, delay: 1 } }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0, transition: { duration: 2, delay: 2 } }}
      className="flex pt-16 flex-col cursor-default sm:h-min"
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

      <div className="mt-6 flex flex-col border-y border-white/10">
        {contacts.map((contact, key) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.6 + key * 0.08 }}
            className="group flex cursor-pointer items-center gap-3 border-b border-white/10 py-2.5 text-sm last:border-b-0 pointer-events-auto"
          >
            <span className="text-green-500">{contact.icon}</span>
            <span className="w-20 text-[10px] uppercase tracking-widest text-white/40">
              {contact.label}
            </span>
            <span className="font-light text-white/85 transition-colors group-hover:text-green-500">
              {contact.value}
            </span>
            <span className="ml-auto text-white/25 transition-all group-hover:translate-x-0.5 group-hover:text-green-500">
              ↗
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
