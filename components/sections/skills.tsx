'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SKILLS } from '@/lib/data/skills';

const CATEGORIES = [
  { key: 'frontend', label: 'Frontend', icon: '🎨' },
  { key: 'backend', label: 'Backend', icon: '⚙️' },
  { key: 'tools', label: 'Outils & DevOps', icon: '🛠️' },
  { key: 'testing', label: 'Tests', icon: '✅' },
  { key: 'languages', label: 'Langages', icon: '💻' },
  { key: 'other', label: 'Autres', icon: '📚' },
] as const;

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Compétences</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un ensemble diversifié de compétences techniques pour concrétiser vos projets
            </p>
          </div>

          <div className="space-y-12">
            {CATEGORIES.map((category, categoryIndex) => {
              const skills = SKILLS[category.key as keyof typeof SKILLS];
              if (!skills || skills.length === 0) return null;

              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-2xl font-semibold">{category.label}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-lg">{skill.name}</CardTitle>
                              <Badge variant={skill.level === 'Avancé' ? 'default' : 'secondary'}>
                                {skill.level}
                              </Badge>
                            </div>
                            <CardDescription>{skill.description}</CardDescription>
                          </CardHeader>
                          {skill.examples && skill.examples.length > 0 && (
                            <CardContent>
                              <div className="space-y-2">
                                <p className="text-sm font-medium">Exemples :</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  {skill.examples.map((example, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                      <span className="text-primary mt-1">•</span>
                                      <span>{example}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CardContent>
                          )}
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
