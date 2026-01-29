interface StepBadgeProps {
  stepNumber: string;
  className?: string;
}

export function StepBadge({ stepNumber, className = "" }: StepBadgeProps) {
  return (
    <div 
      className={`absolute left-6 -top-2.5 z-10 rounded-2xl bg-navy px-5 pb-1 lg:left-[25px] ${className}`}
    >
      <span className="text-[10px] font-normal uppercase leading-3 tracking-wide text-white">
        Step {stepNumber}
      </span>
    </div>
  );
}
