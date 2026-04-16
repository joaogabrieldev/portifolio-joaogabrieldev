import { plans } from "@/assets/data/plans";
import PlanCard from "@/components/PlanCard/PlanCard";
import { outfit } from "@/utils/fonts";
import { sectionShell } from "./sectionStyles";

export default function PlansSection() {
  return (
    <section
      id="planos"
      className={`${sectionShell} scroll-mt-6`}
      aria-labelledby="planos-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${outfit.className}`}
        >
          Planos
        </p>
        <h2
          id="planos-heading"
          className={`mb-12 text-3xl font-semibold tracking-tight sm:text-4xl ${outfit.className}`}
        >
          Escolha o pacote que combina com o estágio do seu negócio.
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              originalPrice={plan.originalPrice}
              emphasis={plan.emphasis}
              description={plan.description}
              recommendation={plan.recommendation}
              beneficts={plan.beneficts}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
