import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { forwardRef, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  withArrow?: boolean;
};

const variantStyles: Record<string, string> = {
  primary:
    'bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/25',
  secondary:
    'bg-ink-900 text-white hover:bg-ink-800 shadow-lg shadow-ink-900/20',
  outline:
    'border border-ink-200 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white bg-white/60',
  ghost: 'text-ink-700 hover:text-accent-500 hover:bg-accent-50',
};

const sizeStyles: Record<string, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      onClick,
      type = 'button',
      className = '',
      withArrow = false,
    },
    ref
  ) => {
    const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const content = (
      <>
        {children}
        {withArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </>
    );

    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
