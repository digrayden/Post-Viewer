import type { ComponentProps } from 'react';

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

  return (
    <button
      className={`button ${variant} ${size}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;