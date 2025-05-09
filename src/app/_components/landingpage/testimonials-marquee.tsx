import { cn } from "@/app/_lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const reviews = [
  {
    name: "Ana Silva",
    username: "@anasilva_digital",
    body: "O Elpys facilitou demais minha busca por oportunidades de voluntariado que realmente se conectam com meus valores. Em poucos dias, já estava atuando em um projeto incrível!",
    img: "/api/placeholder/40/40",
  },
  {
    name: "Pedro Mendes",
    username: "@cafemendes",
    body: "Comecei a usar o Elpys para engajar minha cafeteria em ações sociais locais. A plataforma nos conectou com voluntários comprometidos e ajudou a estruturar melhor nossos projetos.",
    img: "/api/placeholder/40/40",
  },
  {
    name: "Carla Oliveira",
    username: "@carla_moda",
    body: "Graças ao Elpys, participei de uma iniciativa de moda circular que transformou minha visão sobre consumo consciente. Tudo é organizado e fácil de acompanhar.",
    img: "/api/placeholder/40/40",
  },
  {
    name: "Ricardo Almeida",
    username: "@ricardoalmeida",
    body: "Queria retribuir à comunidade com meu tempo, mas não sabia por onde começar. O Elpys me guiou desde o cadastro até a integração com uma ONG ambiental que admiro muito.",
    img: "/api/placeholder/40/40",
  },
  {
    name: "Mariana Costa",
    username: "@mari_artesanato",
    body: "Com o Elpys, encontrei projetos onde posso ensinar artesanato para comunidades carentes. É gratificante ver meu talento sendo útil e valorizado.",
    img: "/api/placeholder/40/40",
  },
  {
    name: "Lucas Ferreira",
    username: "@lucasorganicos",
    body: "A organização que administro precisava de voluntários para ações de agroecologia. O Elpys nos conectou com pessoas apaixonadas pela causa e dispostas a ajudar de verdade.",
    img: "/api/placeholder/40/40",
  },
  {
    name: "Juliana Santos",
    username: "@ju_flores",
    body: "Participei de ações em hortas urbanas e oficinas educativas por meio do Elpys. A plataforma é intuitiva, e os projetos são bem estruturados e impactantes.",
    img: "/api/placeholder/40/40",
  },
  {
    name: "Gabriel Martins",
    username: "@gabe_fitclub",
    body: "Como educador físico, encontrei no Elpys uma maneira de oferecer aulas gratuitas em comunidades carentes. A plataforma me ajudou a divulgar e gerenciar tudo com eficiência.",
    img: "/api/placeholder/40/40",
  },
  {
    name: "Isabela Rocha",
    username: "@isabelajoias",
    body: "Me envolvi em um projeto de capacitação de mulheres artesãs pelo Elpys e foi uma das experiências mais transformadoras da minha vida. A curadoria dos projetos é excelente.",
    img: "/api/placeholder/40/40",
  },
  {
    name: "Fernando Dias",
    username: "@nandogastronomia",
    body: "Usei o Elpys para conectar meu restaurante a ações de combate à fome. Em poucos cliques, conseguimos voluntários para uma campanha de distribuição de refeições.",
    img: "/api/placeholder/40/40",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative mx-3 h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:bg-background dark:border-gray-50/[.1] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Avatar className="bg-primary/10 text-primary rounded-full">
          <AvatarImage src={img as string} alt={name} />
          <AvatarFallback className="rounded-lg">
            {name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="mb-6 [--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
