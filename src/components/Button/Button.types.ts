import { ReactNode } from "react";

export interface ButtonProps {
    title?: string;
    onPress?: () => void;
    type: 'default' | 'primary' | 'outlined';
    icon?: string
}