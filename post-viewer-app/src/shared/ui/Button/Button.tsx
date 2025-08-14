import type { ComponentProps } from 'react';
import { useTheme } from '../../lib/theme/useTheme';
import styles from './Button.module.css';

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
      className={`
        ${styles.button}
        ${styles[variant]} 
        ${styles[size]} 
        ${styles[theme]}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;