import * as React from "react";

import type { IconSvgProps } from "@/types";

export const KeyboardEnter: React.FC<IconSvgProps> = ({
  size = 24,
  ...props
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z" />
    </svg>
  );
};
