import type { ComponentProps } from 'react';
import { useTheme } from '../../../shared/lib/theme/useTheme';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

const Button = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  ...props 
}: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      className={`button ${variant} ${size} ${theme}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;