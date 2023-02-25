import React, { cloneElement, Children, ReactElement } from "react";
import StyledButtonMenu from "./StyledButtonMenu";
import { sizes, variants } from "../Button/types";
import { ButtonMenuProps, ButtonMenuItemProps } from "./types";

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  size = sizes.MD,
  variant = variants.PRIMARY,
  onClick,
  children,
  className,
  childClassName
}) => {
  return (
    <StyledButtonMenu className={className} variant={variant}>
      {Children.map(children, (child: ReactElement<ButtonMenuItemProps>, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onClick ? () => onClick(index) : undefined,
          size,
          variant,
          className,
          childClassName
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
