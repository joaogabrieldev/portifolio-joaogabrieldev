import { plans } from "@/assets/data/plans";
import PlanCard, { type PlanCardVariant } from "@/components/PlanCard/PlanCard";
import { outfit } from "@/utils/fonts";

function planCardVariant(plan: (typeof plans)[number]): PlanCardVariant {
  if (plan.emphasis) return "featured";
  if (plan.title === "Pacote Standard") return "orange";
  return "offwhite";
}

const plansSectionShell =
  "scroll-mt-6  bg-transparent px-4 py-20 text-black sm:px-8 md:px-12";

export default function PlansSection() {
  return (
    <section
      id="planos"
      className={`${plansSectionShell} relative scroll-mt-6 overflow-hidden`}
      aria-labelledby="planos-heading"
    >
      <div className="relative mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-0">
        <div className="mx-auto w-full max-w-[1200px]">
          <p
            className={`mb-3 text-xs font-medium tracking-[0.08em] text-black/55 uppercase ${outfit.className}`}
          >
            Planos
          </p>
          <h2
            id="planos-heading"
            className={`mb-12 text-5xl leading-none font-medium tracking-[-0.022em] text-black ${outfit.className}`}
          >
            Escolha o pacote que combina com o estágio do seu negócio.
          </h2>
        </div>
        <div
          className="flex w-full flex-col items-center gap-5 lg:flex-row lg:flex-wrap lg:items-start lg:justify-center lg:gap-8"
          role="list"
        >
          {plans.map((plan, index) => {
            const variant = planCardVariant(plan);

            const dividerLabel = plan.emphasis
              ? `${plans[0].title.toUpperCase()} +`
              : index === 2
                ? `${plans[0].title.toUpperCase()} & ${plans[1].title.toUpperCase()} +`
                : undefined;

            return (
              <PlanCard
                key={plan.title}
                plan={plan}
                variant={variant}
                dividerLabel={dividerLabel}
                className={
                  plan.emphasis
                    ? "order-first w-full max-w-[380px] shrink-0 lg:order-0"
                    : "w-full max-w-[380px] shrink-0"
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
