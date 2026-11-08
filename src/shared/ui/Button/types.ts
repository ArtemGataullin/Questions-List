export interface ButtonsProps {
    text: string | number,
    onClick?: () => void,
    variant: 'whiteBgButton' | 'PurpleBgButton',
    size: 'L' | 'M' | '',
    type: 'submit' | 'button',
    className?: string
}