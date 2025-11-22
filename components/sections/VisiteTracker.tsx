"use client";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/config/email";

export const VisiteTracker = () => {
    useEffect(() => {
        const sendNotification = async () => {
            const lastVisit = localStorage.getItem("last_notification_sent");

            // Si un email a déjà été envoyé il y a moins de 24h, on stoppe
            const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
            const now = Date.now();

            if (lastVisit && now - Number(lastVisit) < TWENTY_FOUR_HOURS) {
                console.log(
                    "⏳ Notification déjà envoyée dernièrement → pas d'envoi"
                );
                return;
            }

            try {
                await emailjs.send(
                    emailjsConfig.serviceId,
                    emailjsConfig.templateId,
                    {
                        subject: "🔔 Nouvelle visite sur votre portfolio",
                        message: `
Une nouvelle personne a visité votre portfolio (max 1 notification / 24h).

Aucune donnée personnelle n'a été collectée.
                        `,
                    },
                    emailjsConfig.userId
                );

                // On enregistre la date de la notification
                localStorage.setItem("last_notification_sent", String(now));

                console.log("✅ Notification envoyée");
            } catch (error) {
                console.error("❌ Erreur envoi notification :", error);
            }
        };

        sendNotification();
    }, []);

    return null;
};
