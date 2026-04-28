import { plans } from "@/assets/data/plans";
import PlanCard, { type PlanCardVariant } from "@/components/PlanCard/PlanCard";
import { outfit } from "@/utils/fonts";

function planCardVariant(plan: (typeof plans)[number]): PlanCardVariant {
  if (plan.emphasis) return "featured";
  if (plan.title === "Pacote Standard") return "orange";
  return "offwhite";
}

const plansSectionShell =
  "border-t border-black/10 bg-white px-4 py-20 text-black sm:px-8 md:px-12";

export default function PlansSection() {
  return (
    <section
      id="planos"
      className={`${plansSectionShell} relative scroll-mt-6 overflow-hidden`}
      aria-labelledby="planos-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(1.3px 1.3px at 12% 18%, rgba(255,255,255,0.55), transparent 60%),
            radial-gradient(1px 1px at 78% 8%, rgba(255,255,255,0.4), transparent 60%),
            radial-gradient(1.5px 1.5px at 92% 22%, rgba(255,255,255,0.55), transparent 60%),
            radial-gradient(1px 1px at 30% 72%, rgba(255,255,255,0.3), transparent 60%),
            radial-gradient(1.2px 1.2px at 88% 78%, rgba(255,255,255,0.35), transparent 60%),
            radial-gradient(1px 1px at 55% 30%, rgba(255,255,255,0.25), transparent 60%),
            radial-gradient(1px 1px at 66% 88%, rgba(255,255,255,0.3), transparent 60%),
            radial-gradient(1.4px 1.4px at 96% 50%, rgba(255,255,255,0.5), transparent 60%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
        style={{
          background: `
            radial-gradient(1100px 700px at 85% 20%, rgba(255,255,255,0.035), transparent 60%),
            radial-gradient(700px 500px at 10% 90%, rgba(255,255,255,0.02), transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-0">
        <div className="mx-auto w-full max-w-[1200px]">
          <p
            className={`mb-3 text-xs font-semibold tracking-[0.2em] text-black/55 uppercase ${outfit.className}`}
          >
            Planos
          </p>
          <h2
            id="planos-heading"
            className={`mb-12 text-3xl font-semibold tracking-tight sm:text-4xl ${outfit.className}`}
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
