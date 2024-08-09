import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Phone,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const contacts = [
  {
    icon: <GitHub />,
    referer: "Github",
    href: "https://github.com/ElementalDLC37",
  },
  {
    icon: <Instagram />,
    referer: "Instagram",
    href: "https://www.instagram.com/rui_luucas/",
  },
  {
    icon: <LinkedIn />,
    referer: "LinkedIn",
    href: "https://www.linkedin.com/in/rui-lucas-anthony-gomes/",
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
        Entre em contato e faça um
      </motion.span>
      <motion.span
        style={{ textShadow: "0 0 5px #FFF, 0 0 100px #FFF" }}
        className="text-3xl font-bold"
      >
        orçamento!
      </motion.span>
      <div className="flex font-extralight gap-3 [&>p>span]:flex [&>p>span]:items-center [&>p>span]:gap-2 flex-col mt-5">
        {contacts.map((contact, key) => {
          return (
            <p key={key} className="flex items-center">
              <motion.a
                href={contact.href}
                target="_blank"
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
