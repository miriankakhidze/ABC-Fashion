import { ReactNode } from "react";

export interface ButtonProps {
    title?: string;
    onPress?: () => void;
    type: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    icon?: string
}