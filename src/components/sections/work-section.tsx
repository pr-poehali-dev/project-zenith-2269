import { useReveal } from "@/hooks/use-reveal"

const projects = [
  {
    number: "01",
    title: "Дом из газобетона",
    category: "180 м² · посёлок Сосновый",
    year: "2024",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/81b342d2-dfcc-4e28-847b-6b97494d39d9/files/714373ac-cb7d-4f51-a32b-85ea374e4708.jpg",
  },
  {
    number: "02",
    title: "Каркасная дача",
    category: "95 м² · Калужская область",
    year: "2024",
    direction: "right",
    image: "https://cdn.poehali.dev/projects/81b342d2-dfcc-4e28-847b-6b97494d39d9/files/0f4fa359-e43b-493a-a07d-8aa0311f6037.jpg",
  },
  {
    number: "03",
    title: "Кирпичный коттедж",
    category: "240 м² · Подмосковье",
    year: "2023",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/81b342d2-dfcc-4e28-847b-6b97494d39d9/files/e7b00110-9846-4b44-9a90-f38ad62a661a.jpg",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Проекты
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Построенные объекты</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; year: string; direction: string; image: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center gap-4 border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/20 md:gap-8 md:py-5 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="h-14 w-20 shrink-0 overflow-hidden rounded-md md:h-16 md:w-24">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 items-baseline justify-between gap-4 md:gap-8">
        <div className="flex items-baseline gap-4 md:gap-8">
          <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
            {project.number}
          </span>
          <div>
            <h3 className="mb-0.5 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
          </div>
        </div>
        <span className="font-mono text-xs text-foreground/30 md:text-sm">{project.year}</span>
      </div>
    </div>
  )
}
