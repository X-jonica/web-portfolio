import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
   Mail,
   Phone,
   MapPin,
   Send,
   Check,
   Copy,
   Github,
   Linkedin,
   Twitter,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../config/email.js";

const ContactSection: React.FC = () => {
   const ref = useRef(null);
   const formRef = useRef<HTMLFormElement>(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   });

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [emailCopied, setEmailCopied] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      if (!formRef.current) return;

      try {
         await emailjs.sendForm(
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            formRef.current,
            emailjsConfig.userId
         );

         setIsSubmitted(true);
         setFormData({ name: "", email: "", subject: "", message: "" });
         console.log(formData);
      } catch (error) {
         console.error("Email sending error:", error);
         alert("Une erreur s'est produite lors de l'envoi du message.");
      } finally {
         setIsSubmitting(false);
         setTimeout(() => setIsSubmitted(false), 5000);
      }
   };

   const copyEmail = () => {
      navigator.clipboard.writeText("jonicahenintsoa@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
   };

   const contactInfo = [
      {
         icon: Mail,
         label: "Email",
         value: "jonicahenintsoa@gmail.com",
         action: copyEmail,
      },
      {
         icon: Phone,
         label: "Téléphone",
         value: "+261 34 49 384 03",
         action: () => window.open("tel:+261344938403"),
      },
      {
         icon: MapPin,
         label: "Localisation",
         value: "Fianarantsoa, Madagascar",
         action: () => {},
      },
   ];

   const socialLinks = [
      {
         icon: Github,
         href: "#",
         label: "GitHub",
         color: "hover:text-gray-900 dark:hover:text-white",
      },
      {
         icon: Linkedin,
         href: "#",
         label: "LinkedIn",
         color: "hover:text-blue-600",
      },
      {
         icon: Twitter,
         href: "#",
         label: "Twitter",
         color: "hover:text-sky-500",
      },
   ];

   return (
      <section
         id="contact"
         className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      >
         {/* Background Image from Unsplash */}
         <div
            className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
            style={{
               backgroundImage:
                  'url("https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            }}
         ></div>

         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6 }}
               className="text-center mb-16"
            >
               <h2 className="text-4xl md:text-5xl font-space font-bold text-gray-900 dark:text-white mb-4">
                  Travaillons{" "}
                  <span className="bg-gradient-to-r from-primary-500 to-accent-stone bg-clip-text text-transparent">
                     Ensemble
                  </span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter">
                  Prêt à donner vie à votre projet ? Contactez-moi pour discuter
                  de vos idées et créer quelque chose d'extraordinaire.
               </p>
            </motion.div>

            <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Contact Info */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
               >
                  <div>
                     <h3 className="text-2xl font-space font-semibold text-gray-900 dark:text-white mb-6">
                        Informations de contact
                     </h3>

                     <div className="space-y-4">
                        {contactInfo.map((info, index) => (
                           <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={isInView ? { opacity: 1, y: 0 } : {}}
                              transition={{
                                 duration: 0.4,
                                 delay: 0.4 + index * 0.1,
                              }}
                              onClick={info.action}
                              className="group flex items-center space-x-4 p-4 bg-white dark:bg-dark-card rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-600"
                           >
                              <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-stone rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                                 <info.icon className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                 <p className="text-sm text-gray-500 dark:text-gray-400 font-inter">
                                    {info.label}
                                 </p>
                                 <p className="text-gray-900 dark:text-white font-medium font-inter">
                                    {info.value}
                                 </p>
                              </div>
                              {index === 0 && (
                                 <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    {emailCopied ? (
                                       <Check className="w-5 h-5 text-green-500" />
                                    ) : (
                                       <Copy className="w-5 h-5 text-gray-400" />
                                    )}
                                 </div>
                              )}
                           </motion.div>
                        ))}
                     </div>
                  </div>

                  {/* Social Links */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : {}}
                     transition={{ duration: 0.6, delay: 0.8 }}
                  >
                     <h4 className="text-lg font-space font-medium text-gray-900 dark:text-white mb-4">
                        Retrouvez-moi sur
                     </h4>
                     <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                           <motion.a
                              key={index}
                              href={social.href}
                              className={`p-3 bg-white dark:bg-dark-card rounded-xl text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-200 dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-600`}
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              title={social.label}
                           >
                              <social.icon className="w-6 h-6" />
                           </motion.a>
                        ))}
                     </div>
                  </motion.div>
               </motion.div>

               {/* Contact Form */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-border"
               >
                  <h3 className="text-2xl font-space font-semibold text-gray-900 dark:text-white mb-6">
                     Envoyez-moi un message
                  </h3>

                  <form
                     ref={formRef}
                     onSubmit={handleSubmit}
                     className="space-y-6"
                  >
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                           <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-inter"
                           >
                              Nom complet
                           </label>
                           <input
                              type="text"
                              id="name"
                              name="from_name"
                              value={formData.name}
                              onChange={(e) =>
                                 setFormData({
                                    ...formData,
                                    name: e.target.value,
                                 })
                              }
                              required
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                              placeholder="Votre nom"
                           />
                        </div>
                        <div>
                           <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-inter"
                           >
                              Email
                           </label>
                           <input
                              type="email"
                              id="email"
                              name="reply_to"
                              value={formData.email}
                              onChange={(e) =>
                                 setFormData({
                                    ...formData,
                                    email: e.target.value,
                                 })
                              }
                              required
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                              placeholder="votre@email.com"
                           />
                        </div>
                     </div>

                     <div>
                        <label
                           htmlFor="subject"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-inter"
                        >
                           Sujet
                        </label>
                        <input
                           type="text"
                           id="subject"
                           name="subject"
                           value={formData.subject}
                           onChange={(e) =>
                              setFormData({
                                 ...formData,
                                 subject: e.target.value,
                              })
                           }
                           required
                           className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                           placeholder="Sujet de votre message"
                        />
                     </div>

                     <div>
                        <label
                           htmlFor="message"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-inter"
                        >
                           Message
                        </label>
                        <textarea
                           id="message"
                           name="message"
                           value={formData.message}
                           onChange={(e) =>
                              setFormData({
                                 ...formData,
                                 message: e.target.value,
                              })
                           }
                           required
                           rows={6}
                           className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                           placeholder="Décrivez votre projet ou posez-moi vos questions..."
                        />
                     </div>

                     <motion.button
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-accent-stone hover:from-primary-600 hover:to-accent-stone text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                     >
                        {isSubmitting ? (
                           <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Envoi en cours...</span>
                           </>
                        ) : isSubmitted ? (
                           <>
                              <Check className="w-5 h-5" />
                              <span>Message envoyé !</span>
                           </>
                        ) : (
                           <>
                              <Send className="w-5 h-5" />
                              <span>Envoyer le message</span>
                           </>
                        )}
                     </motion.button>
                  </form>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default ContactSection;
