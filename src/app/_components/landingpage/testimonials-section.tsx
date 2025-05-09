import { TestimonialsMarquee } from "./testimonials-marquee";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Depoimentos
            </h2>
            <p className="text-muted-foreground max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              O que nossa comunidade diz sobre a Elpys
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8">
          <TestimonialsMarquee />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
