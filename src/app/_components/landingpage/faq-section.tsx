"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { motion } from "framer-motion";

const FaqSection = () => {
  return (
    <section
      className="bg-background relative w-full py-12 md:py-24 lg:py-32"
      id="faq"
    >
      <div className="px-4 lg:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              FAQ
            </h2>
            <p className="text-muted-foreground max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              O que você precisa saber sobre a Elpys
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 w-full lg:max-w-7xl">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-4 p-4"
          >
            {/* Pergunta 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 1 }}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex items-center justify-between p-4">
                  <h2 className="text-xl font-bold lg:text-2xl">
                    O Elpys é para mim?
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground p-4 text-lg italic">
                  Se você quer impactar o mundo com seu tempo e talento, ou se
                  precisa de voluntários engajados para sua causa, o Elpys é o
                  espaço certo para você.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            {/* Pergunta 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 1 }}
            >
              <AccordionItem value="item-2">
                <AccordionTrigger className="flex items-center justify-between p-4">
                  <h2 className="text-xl font-bold lg:text-2xl">
                    Que tipo de projetos posso encontrar?
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground p-4 text-lg italic">
                  Desde ações sociais locais até projetos digitais, o Elpys
                  conecta você com ONGs, coletivos e iniciativas que realmente
                  precisam da sua ajuda.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            {/* Pergunta 3 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 1 }}
            >
              <AccordionItem value="item-3">
                <AccordionTrigger className="flex items-center justify-between p-4">
                  <h2 className="text-xl font-bold lg:text-2xl">
                    O Elpys é gratuito?
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground p-4 text-lg italic">
                  Sim. O Elpys é 100% gratuito para voluntários. Nosso objetivo
                  é facilitar conexões e gerar impacto social — sem barreiras
                  financeiras.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            {/* Pergunta 4 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 1 }}
            >
              <AccordionItem value="item-4">
                <AccordionTrigger className="flex items-center justify-between p-4">
                  <h2 className="text-xl font-bold lg:text-2xl">
                    Como as organizações entram no Elpys?
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground p-4 text-lg italic">
                  ONGs e projetos sociais podem se cadastrar gratuitamente,
                  criar vagas e começar a receber candidatos em minutos.
                  Simples, direto e com suporte caso precise.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            {/* Pergunta 5 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 1 }}
            >
              <AccordionItem value="item-5">
                <AccordionTrigger className="flex items-center justify-between p-4">
                  <h2 className="text-xl font-bold lg:text-2xl">
                    Posso registrar minhas horas voluntárias?
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground p-4 text-lg italic">
                  Sim! O Elpys oferece um painel de acompanhamento de horas,
                  certificados e histórico completo da sua jornada como
                  voluntário.
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
