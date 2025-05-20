import React, { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/config/emailjs";

const ContactSection = () => {
   const form = useRef<HTMLFormElement>(null);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!form.current) return;

      try {
         await emailjs.sendForm(
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            form.current,
            emailjsConfig.userId
         );

         alert("Message envoyé !");
         form.current?.reset();
      } catch (error) {
         console.error("Erreur:", error);
         alert("Échec de l'envoi");
      }
   };

   // Dans votre useEffect de debug :
   useEffect(() => {
      console.log("Configuration EmailJS :", {
         serviceId: emailjsConfig.serviceId,
         templateId: emailjsConfig.templateId,
         userId: emailjsConfig.userId,
      });
   }, []);

   const contactItem = {
      hidden: { opacity: 0, y: 20 },
      show: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.5 },
      },
   };

   const formControls = {
      hidden: { opacity: 0, y: 20 },
      show: (i: number) => ({
         opacity: 1,
         y: 0,
         transition: {
            delay: i * 0.1,
            duration: 0.5,
         },
      }),
   };

   return (
      <section id="contact" className="py-20 bg-secondary/30">
         <div className="container">
            <motion.h2
               className="section-heading text-center"
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               Me Contacter
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
               <div>
                  <motion.h3
                     className="text-xl font-bold mb-6"
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5 }}
                  >
                     Restons en Contact
                  </motion.h3>

                  <motion.p
                     className="text-foreground/70 mb-8"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2, duration: 0.5 }}
                  >
                     Vous avez un projet en tête ou vous souhaitez simplement
                     discuter ? N'hésitez pas à me contacter via le formulaire
                     ou directement par email ou téléphone.
                  </motion.p>

                  <div className="space-y-6">
                     <motion.div
                        className="flex items-start gap-4"
                        variants={contactItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={0}
                     >
                        <Mail className="h-6 w-6 text-primary mt-1" />
                        <div>
                           <p className="font-medium">Email</p>
                           <a
                              href="mailto:jonicahenintsoa@gmail.com"
                              className="text-foreground/70 hover:text-primary"
                           >
                              jonicahenintsoa@gmail.com
                           </a>
                        </div>
                     </motion.div>

                     <motion.div
                        className="flex items-start gap-4"
                        variants={contactItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={1}
                     >
                        <Phone className="h-6 w-6 text-primary mt-1" />
                        <div>
                           <p className="font-medium">Téléphone</p>
                           <a
                              href="tel:+261344938403"
                              className="text-foreground/70 hover:text-primary"
                           >
                              +261 34 49 384 03
                           </a>
                        </div>
                     </motion.div>

                     <motion.div
                        className="flex items-start gap-4"
                        variants={contactItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={2}
                     >
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <div>
                           <p className="font-medium">Localisation</p>
                           <p className="text-foreground/70">
                              Fianarantsoa, Madagascar
                           </p>
                        </div>
                     </motion.div>
                  </div>
               </div>

               <motion.div
                  className="bg-card rounded-lg p-6 shadow-md border border-border"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  <form ref={form} onSubmit={handleSubmit}>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <motion.div
                           variants={formControls}
                           initial="hidden"
                           whileInView="show"
                           viewport={{ once: true }}
                           custom={0}
                        >
                           <label
                              htmlFor="name"
                              className="block text-sm font-medium mb-2"
                           >
                              Nom
                           </label>
                           <Input
                              id="name"
                              name="from_name"
                              placeholder="Votre nom"
                              required
                           />
                        </motion.div>
                        <motion.div
                           variants={formControls}
                           initial="hidden"
                           whileInView="show"
                           viewport={{ once: true }}
                           custom={1}
                        >
                           <label
                              htmlFor="email"
                              className="block text-sm font-medium mb-2"
                           >
                              Email
                           </label>
                           <Input
                              id="email"
                              type="email"
                              name="reply_to"
                              placeholder="votre@email.com"
                              required
                           />
                        </motion.div>
                     </div>

                     <motion.div
                        className="mb-4"
                        variants={formControls}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={2}
                     >
                        <label
                           htmlFor="subject"
                           className="block text-sm font-medium mb-2"
                        >
                           Sujet
                        </label>
                        <Input
                           id="subject"
                           name="subject"
                           placeholder="Sujet de votre message"
                           required
                        />
                     </motion.div>

                     <motion.div
                        className="mb-6"
                        variants={formControls}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={3}
                     >
                        <label
                           htmlFor="message"
                           className="block text-sm font-medium mb-2"
                        >
                           Message
                        </label>
                        <Textarea
                           id="message"
                           name="message"
                           placeholder="Votre message..."
                           rows={5}
                           required
                        />
                     </motion.div>

                     <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                     >
                        <Button type="submit" className="w-full">
                           <motion.span
                              className="flex items-center"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                           >
                              <Send className="h-4 w-4 mr-2" /> Envoyer le
                              message
                           </motion.span>
                        </Button>
                     </motion.div>
                  </form>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default ContactSection;
