interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export function SectionWrapper({ id, children, className = '', innerClassName = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
