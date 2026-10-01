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
    referer: "lucasantony815@gmail.com",
    href: "mailto:lucasantony815@gmail.com",
  },
  {
    icon: <LinkedIn />,
    referer: "LinkedIn",
    href: "https://www.linkedin.com/in/rui-lucas-a-gomes/",
  },
  {
    icon: <GitHub />,
    referer: "GitHub",
    href: "https://github.com/ruiluucas",
  },
  {
    icon: <WhatsApp />,
    referer: "WhatsApp",
    href: "https://wa.me/5544997483524",
  },
  {
    icon: <Instagram />,
    referer: "Instagram",
    href: "https://www.instagram.com/rui_luucas/",
  },
];

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 2, delay: 1 } }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0, transition: { duration: 2, delay: 2 } }}
      className="flex pt-32 flex-col cursor-default sm:h-min"
      id="contact"
    >
      <motion.span
        style={{ textShadow: "0 0 5px #FFF, 0 0 100px #FFF" }}
        className="text-2xl"
      >
        Aberto a oportunidades
      </motion.span>
      <motion.span
        style={{ textShadow: "0 0 5px #FFF, 0 0 100px #FFF" }}
        className="text-3xl font-bold"
      >
        e a novos projetos
      </motion.span>
      <div className="flex font-extralight gap-3 flex-col mt-5">
        {contacts.map((contact, key) => {
          return (
            <p key={contact.referer} className="flex items-center">
              <motion.a
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{
                  textShadow: "0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF",
                  transition: { duration: 0.2 },
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: (key + 1) / 2 }}
                className="cursor-pointer pointer-events-auto flex items-center gap-2 text-sm"
              >
                {contact.icon} {contact.referer}
              </motion.a>
            </p>
          );
        })}
      </div>
    </motion.div>
  );
}
