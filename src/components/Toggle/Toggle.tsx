import React from "react";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps } from "./types";

const Toggle: React.FC<ToggleProps> = ({ className, checked, ...props }) => {
  const isChecked = !!checked;

  return (
    <StyledToggle className={className} checked={isChecked}>
      <Input checked={checked} {...props} type="checkbox" />
      <Handle />
    </StyledToggle>
  );
};

export default Toggle;
