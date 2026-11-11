import type { ReactNode } from "react";

export interface ButtonsProps {
    children?: string | number | ReactNode;
    onClick?: () => void,
    variant: 'whiteBgButton' | 'PurpleBgButton',
    size: 'L' | 'M' | 'S',
    type: 'submit' | 'button',
    className?: string,
    iconLeft?: ReactNode,
    iconRight?: ReactNode,
}