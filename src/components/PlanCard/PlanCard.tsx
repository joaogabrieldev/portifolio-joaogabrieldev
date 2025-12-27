import Badge from '@/pieces/Badge/Badge';
import CheckIListItem from '@/pieces/CheckIListItem/CheckIListItem';
import { defaultSelection, defaultTransition } from '@/utils/defaults';
import { BorderBeam } from '../ui/border-beam';
import { ShineBorder } from '../ui/shine-border';
import { AuroraText } from '../ui/aurora-text';
import GlowButton from '../UIverse/GlowButton/GlowButton';

export type Beneficts = {
  title: string;
};

export interface IPlanCardProps {
  title: string;
  price: number;
  originalPrice?: number | null;
  emphasis: boolean;
  description: string;
  recommendation: string;
  beneficts: Beneficts[];
}

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const PlanCard = ({ 
  title, 
  price, 
  originalPrice, 
  emphasis, 
  description, 
  recommendation, 
  beneficts }: IPlanCardProps) => {
  const hasBadge = emphasis ? (
    <div className="flex justify-start pb-2">
      <Badge label={"Recomendado pelos Clientes"} />
    </div>
  ) : null;

  const hasEmphasis = emphasis
    ? "border-[#7c7abf99] bg-[#7c7abf99]/15 "
    : "border-slate-700 bg-slate-700/10 border-2";

  const hasEmphasisBorder = emphasis ? <ShineBorder duration={14} borderWidth={2} shineColor={["#A07CFE", "#7C7ABF", "#FFF"]} /> : null
    
  const buttonEmphasis = emphasis
    ? null
    : `bg-slate-900 ${defaultTransition} hover:bg-slate-800 hover:shadow-gray-700/40`;

  const hasEmphasisGlowButton = emphasis ? <div className='flex justify-center'>
    <GlowButton label={'Solicitar Orçamento'} />
  </div> : (
          <a
            href="#"
            className={`block rounded-lg ${buttonEmphasis} py-2.5 text-center font-semibold text-[14px] text-white tracking-[1px] select-none uppercase`}
          >
            Solicitar Orçamento
          </a>)
  

  return (
    <div className={`rounded-2xl ${hasEmphasis} px-8 py-8 max-w-125 backdrop-blur-md -w`}>
      {hasEmphasisBorder}
      {hasBadge}
      <div>
        <h1 className="my-1 text-2xl font-bold text-white select-none">
          {title}
        </h1>
        <div className="flex flex-row gap-3 select-none">
          <AuroraText colors={["#FFF", "#A07CFE"]} speed={2} className="text-[30px] font-bold">
            {price ? formatter.format(price) : null}
          </AuroraText>
          <span className="flex items-end text-lg font-semibold text-gray-500 line-through">
            {originalPrice ? formatter.format(originalPrice) : null}
          </span>
        </div>
        <div
          className={`mt-2 font-semibold text-gray-500 italic ${defaultSelection}`}
        >
          <span>Ideal para: </span>
          <span className={`${defaultSelection}`}>{recommendation}</span>
        </div>
        <div className="my-3 mb-5 max-w-lg">
          <p className={`text-md text-slate-400 ${defaultSelection}`}>
            {description}
          </p>
        </div>
        <div>
          <ul className={`mt-2 mb-8 ${defaultSelection}`}>
            {beneficts.map((item, index) => {
              return (
                <CheckIListItem key={index} label={item.title} iconWidth={20} />
              );
            })}
          </ul>
        </div>
        <div className="w-full">
          {hasEmphasisGlowButton}
        </div>
      </div>
      
    </div>
  )
}

export default PlanCard
