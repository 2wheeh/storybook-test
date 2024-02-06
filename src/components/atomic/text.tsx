import clsx from 'clsx';

export interface TextProps {
  children: string;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '5xl';
  weight?: 'light' | 'normal' | 'medium' | 'bold' | 'black';
  color?: 'black' | 'gradient';
  nowrap?: boolean;
  noselect?: boolean;
}

export default function Text({
  children,
  size = 'base',
  weight = 'normal',
  color = 'black',
  nowrap = false,
  noselect = false,
}: TextProps) {
  const sizeClass = clsx({
    'text-sm': size === 'sm',
    'text-base': size === 'base',
    'text-lg': size === 'lg',
    'text-xl': size === 'xl',
    'text-5xl': size === '5xl',
  });

  const weightClass = clsx({
    'font-light': weight === 'light',
    'font-normal': weight === 'normal',
    'font-medium': weight === 'medium',
    'font-bold': weight === 'bold',
    'font-black': weight === 'black',
  });

  const colorClass = clsx({
    'text-black': color === 'black',
    'via bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent':
      color === 'gradient',
  });

  return (
    <div
      className={clsx(
        'm-0 inline-block p-0',
        sizeClass,
        weightClass,
        colorClass,
        { 'whitespace-nowrap': nowrap },
        { 'select-none': noselect }
      )}
    >
      {children}
    </div>
  );
}
