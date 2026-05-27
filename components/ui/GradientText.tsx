interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'mint' | 'white-to-mint';
}

export function GradientText({ children, className = '', variant = 'mint' }: GradientTextProps) {
  return (
    <span
      className={`${variant === 'mint' ? 'gradient-text' : 'gradient-text-white'} ${className}`}
    >
      {children}
    </span>
  );
}
