import { ButtonProps, Sizes, variants } from "../Button/types";

export type ButtonMenuItemProps = {
  isActive?: boolean;
  size?: Sizes;
  childClassName?: string;
} & ButtonProps;

export interface ButtonMenuProps {
  variant?: typeof variants.PRIMARY | typeof variants.SUBTLE;
  activeIndex?: number;
  onClick?: (index: number) => void;
  size?: Sizes;
  children: React.ReactElement[];
  className?: string;
  childClassName?: string;
}
