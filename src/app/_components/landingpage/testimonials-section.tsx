import { TestimonialsMarquee } from "./testimonials-marquee";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32"
    >
      {/* Quote icons background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-5">
        <div className="absolute top-10 left-10">
          <QuoteIcon className="text-secondary h-24 w-24" />
        </div>
        <div className="absolute top-1/4 right-16">
          <QuoteIcon className="text-secondary h-32 w-32" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <QuoteIcon className="text-secondary h-40 w-40" />
        </div>
        <div className="absolute right-1/4 bottom-40">
          <QuoteIcon className="text-secondary h-20 w-20" />
        </div>
      </div>

      <div className="relative z-10 px-4 md:px-6">
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
// Quote icon component
const QuoteIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
};

export default TestimonialsSection;
