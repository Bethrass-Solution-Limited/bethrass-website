import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'border border-[#D4AF37] bg-[#D4AF37] text-[#111111] hover:bg-[#E2C04A] hover:shadow-[0_10px_30px_rgba(212,175,55,0.22)]',
  secondary:
    'border border-[#111111] bg-[#111111] text-[#F5F5F0] hover:bg-[#1A1A1A] hover:shadow-[0_10px_30px_rgba(17,17,17,0.28)]',
  outline:
    'border border-[#D4AF37] bg-transparent text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-[0_10px_30px_rgba(212,175,55,0.16)]',
};

export default function Button({
  children,
  className,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-[0.02em] transition-all duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] disabled:cursor-not-allowed disabled:opacity-60',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
