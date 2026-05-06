import { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

const Button = forwardRef(({ className, variant = 'primary', size = 'default', children, asChild, ...props }, ref) => {
  const Component = asChild ? motion.div : motion.button;
  
  const variants = {
    primary: 'bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-500/30',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-white',
    outline: 'border-2 border-brand-500 text-brand-400 hover:bg-brand-500/10',
    ghost: 'hover:bg-slate-800 text-slate-300 hover:text-white',
  };
  
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-12 px-8 text-lg',
    icon: 'h-10 w-10',
  };
  
  return (
    <Component
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
