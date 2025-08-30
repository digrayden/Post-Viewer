import type { ComponentProps, MouseEventHandler, ReactNode } from 'react';
import { useTheme } from '../../lib/theme/useTheme';
import styles from './Button.module.css';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
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
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;