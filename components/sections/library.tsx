"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TEAM_IMAGES = [
    {
        src: "/images/teams/g-rtx.jpeg",
        title: "Hackathon EMIT 2025",
        description: "Team G-RTX",
    },
    {
        src: "/images/teams/g-rtx-coupe.jpg",
        title: "Hackathon EMIT 2025",
        description: "Équipe deuxième prix",
    },
    {
        src: "/images/teams/emihack.jpeg",
        title: "Tous les gagnants",
        description: "EMIHACK 3.0",
    },
    {
        src: "/images/teams/team-hta.jpg",
        title: "Team Hair Transplantation Afrika",
        description: "Développeurs du projet Hair Transplantation",
    },
];

const CERTIFICATES = [
    {
        src: "/images/certificates/airtel.jpeg",
        title: "Airtel Leadership",
        description: "Certification 2025",
    },
    {
        src: "/images/certificates/emihack3.0.jpeg",
        title: "Deuxième prix lors de l’EMIHACK 3.0",
        description: "Certification du 1er mars 2025",
    },
    {
        src: "/images/certificates/g-rtx-certificate.jpg",
        title: "Certificat G-RTX",
        description: "Certification 2025",
    },
];

interface CarouselProps {
    items: Array<{ src: string; title: string; description: string }>;
    onImageClick: (index: number) => void;
}

function ImageCarousel({ items, onImageClick }: Readonly<CarouselProps>) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <motion.div
                    className="flex"
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="min-w-full px-2">
                            <Card
                                className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow group"
                                onClick={() => onImageClick(index)}
                            >
                                <div
                                    className="relative aspect-video bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${item.src})`,
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <ZoomIn className="w-12 h-12 text-white" />
                                    </div>
                                </div>
                                <CardContent className="pt-4">
                                    <h4 className="font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </motion.div>
            </div>

            {items.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-background shadow-lg hover:bg-accent flex items-center justify-center transition-colors z-10"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-background shadow-lg hover:bg-accent flex items-center justify-center transition-colors z-10"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="flex justify-center gap-2 mt-6">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    index === currentIndex
                                        ? "bg-primary w-8"
                                        : "bg-primary/30 hover:bg-primary/50"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export function Library() {
    const [lightboxImage, setLightboxImage] = useState<{
        src: string;
        title: string;
        description: string;
    } | null>(null);
    const [activeTab, setActiveTab] = useState<"teams" | "certificates">(
        "teams"
    );

    const handleImageClick = (index: number) => {
        const items = activeTab === "teams" ? TEAM_IMAGES : CERTIFICATES;
        setLightboxImage(items[index]);
    };

    return (
        <section id="library" className="py-20 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Bibliothèque
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Collaborations, certifications et moments marquants
                            de mon parcours
                        </p>
                    </div>

                    <Tabs
                        value={activeTab}
                        onValueChange={(v) =>
                            setActiveTab(v as typeof activeTab)
                        }
                        className="w-full"
                    >
                        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                            <TabsTrigger value="teams">Équipes</TabsTrigger>
                            <TabsTrigger value="certificates">
                                Certificats
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="teams" className="mt-8">
                            <ImageCarousel
                                items={TEAM_IMAGES}
                                onImageClick={handleImageClick}
                            />
                        </TabsContent>

                        <TabsContent value="certificates" className="mt-8">
                            <ImageCarousel
                                items={CERTIFICATES}
                                onImageClick={handleImageClick}
                            />
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>

            <AnimatePresence>
                {lightboxImage && (
                    <Dialog
                        open={!!lightboxImage}
                        onOpenChange={() => setLightboxImage(null)}
                    >
                        <DialogContent className="max-w-5xl">
                            <div className="space-y-4">
                                <div
                                    className="relative aspect-video rounded-lg overflow-hidden bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${lightboxImage.src})`,
                                    }}
                                ></div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold">
                                        {lightboxImage.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {lightboxImage.description}
                                    </p>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>
        </section>
    );
}
