
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  appearance: 'primary' | 'ghost';
  arrow?: "right" | "down" | "none";
}
