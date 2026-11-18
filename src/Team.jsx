import {Link} from "react-router-dom";
import creativeDirector from "./images/a-man.png";
import designLead from "./images/a-man1.png";
import brandLead from "./images/a-man2.png";
import apparelLead from "./images/a-woman.png";
import communityLead from "./images/a-woman1.png";
import teamStory from "./images/man2.png";

const teams = [
  {
    name: "Creative Director",
    role: "Creative direction",
    description:
      "Guides the visual world of each collection, turning ideas, illustration, and color into a consistent point of view. This role helps shape the concepts and creative direction that make every release feel distinctly Wordy.",
    image: creativeDirector,
    imageAlt: "Portrait representing the creative director role",
    link: "/season-4",
    linkLabel: "Explore the archive",
  },
  {
    name: "Design Lead",
    role: "Product design",
    description:
      "Develops the graphics and details that bring collection ideas onto apparel and accessories. The design role balances expressive artwork with thoughtful placement and pieces that feel comfortable in everyday life.",
    image: designLead,
    imageAlt: "Portrait representing the product design lead role",
    link: "/shopall",
    linkLabel: "Browse the collection",
  },
  {
    name: "Brand Lead",
    role: "Brand storytelling",
    description:
      "Keeps the brand story clear across collections and customer touchpoints. From product descriptions to the overall shopping experience, this role connects the creative work with the people who wear it.",
    image: brandLead,
    imageAlt: "Portrait representing the brand storytelling lead role",
    link: "/apparel",
    linkLabel: "Discover Wordy",
  },
  {
    name: "Apparel Curator",
    role: "Product curation",
    description:
      "Brings the apparel range together with an eye for fit, function, and personality. This role helps shoppers explore product details and find pieces that feel right for their own style.",
    image: apparelLead,
    imageAlt: "Portrait representing the apparel curation lead role",
    link: "/shopall",
    linkLabel: "Shop apparel",
  },
  {
    name: "Community & Impact Lead",
    role: "Community and impact",
    description:
      "Connects Wordy’s creative community with the purpose behind the brand. Wordy states that 100% of profits support carbon removal and tree planting through TIST.",
    image: communityLead,
    imageAlt: "Portrait representing the community and impact lead role",
    link: "https://tist.org/",
    linkLabel: "Learn about TIST",
    external: true,
  },
];

const workPrinciples = [
  {
    number: "01",
    title: "Start with an idea",
    description:
      "Each collection begins with a creative point of view. Artwork, color, and storytelling help give every release its own character.",
    className: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    number: "02",
    title: "Make it wearable",
    description:
      "Creative details meet everyday apparel and accessories, with product pages that help shoppers compare pieces and choose available sizes.",
    className: "bg-violet-50 dark:bg-violet-950/30",
  },
  {
    number: "03",
    title: "Keep purpose in view",
    description:
      "Wordy states that 100% of profits support carbon removal and tree planting through TIST. Learn more about that commitment directly from TIST.",
    className: "bg-emerald-50 dark:bg-emerald-950/30",
  },
];

const Team = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8">
      {/* Brand introduction and story. */}
      <section
        aria-labelledby="about-heading"
        className="grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/70 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]"
      >
        <div className="flex min-w-0 flex-col justify-center p-5 sm:p-8 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            About Wordy
          </p>
          <h1
            id="about-heading"
            className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            Wear your words.
            <span className="block text-slate-600 dark:text-slate-300">
              Make room for creativity.
            </span>
          </h1>
          <div className="mt-5 max-w-2xl space-y-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 dark:text-slate-300">
            <p>
              Wordy is a creative apparel and accessories brand shaped by art,
              ideas, and self-expression. We bring graphic details and playful
              design to pieces made for everyday life.
            </p>
            <p>
              Each collection is an invitation to find something that feels
              personal, whether you are browsing a new release or revisiting
              pieces from the archive. Our goal is to make discovering and
              choosing those pieces feel as thoughtful as wearing them.
            </p>
            <p>
              We also believe creativity can contribute to a positive impact.
              Wordy states that 100% of profits support carbon removal and tree
              planting through TIST.
            </p>
            <p>
              From collection concepts to the details on each product page,
              Wordy brings art and shopping together in one place. Browse the
              latest pieces, explore the archive, and choose what best reflects
              your style.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/shopall"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Shop the collection
            </Link>
            <Link
              to="/season-3"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-6 text-sm font-semibold text-slate-800 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:text-white dark:hover:bg-slate-700"
            >
              Visit the archive
            </Link>
          </div>
        </div>
        <div className="relative min-h-64 bg-slate-200 dark:bg-slate-700 sm:min-h-72 md:min-h-full">
          <img
            src={teamStory}
            alt="Creative working with colorful paper and graphic ideas in a studio"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <p className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-5 pb-5 pt-14 text-sm font-medium text-white sm:px-7 sm:pb-7">
            Art, ideas, and everyday expression are at the heart of Wordy.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="team-heading"
        className="mt-10 border-t border-slate-200 pt-8 sm:mt-14 sm:pt-10 lg:mt-16 dark:border-slate-800"
      >
        {/* Each card explains one role that contributes to the Wordy brand. */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            What brings Wordy to life
          </p>
          <h2
            id="team-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
          >
            The people and work behind the brand
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Explore the roles that contribute to Wordy, from the first creative
            idea through product design, curation, and community impact. These
            profiles describe the work behind the brand.
          </p>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {teams.map((team) => (
            <li
              key={team.name}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex h-48 items-center justify-center overflow-hidden bg-slate-100 p-2 sm:h-52 lg:h-56 dark:bg-slate-800">
                <img
                  src={team.image}
                  alt={team.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-contain object-center transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
                  {team.role}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {team.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {team.description}
                </p>
                {team.external ? (
                  <a
                    href={team.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex min-h-10 items-center self-start rounded-full border border-slate-300 px-4 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800"
                  >
                    {team.linkLabel}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <Link
                    to={team.link}
                    className="mt-5 inline-flex min-h-10 items-center self-start rounded-full border border-slate-300 px-4 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800"
                  >
                    {team.linkLabel}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="work-principles-heading"
        className="mt-10 sm:mt-14"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Our approach
          </p>
          <h2
            id="work-principles-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
          >
            How we bring a collection together
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            A clear creative idea, considered product choices, and an easy way
            to explore the pieces make up the Wordy experience.
          </p>
        </div>
        <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workPrinciples.map((principle) => (
            <li
              key={principle.number}
              className={`min-w-0 rounded-xl border border-slate-200 p-5 sm:p-6 dark:border-slate-700 ${principle.className}`}
            >
              <p className="text-sm font-bold tracking-[0.12em] text-slate-500 dark:text-slate-400">
                {principle.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {principle.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8 flex flex-col gap-5 rounded-2xl border border-blue-900 bg-linear-to-br from-slate-900 via-blue-950 to-indigo-950 p-5 text-white shadow-sm sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
            Find your piece
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Creativity is better when it is shared.
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Explore the collection and discover the designs, apparel, and
            accessories that speak to you.
          </p>
        </div>
        <Link
          to="/shopall"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Explore Shop All
        </Link>
      </section>
    </main>
  );
};

export default Team;
