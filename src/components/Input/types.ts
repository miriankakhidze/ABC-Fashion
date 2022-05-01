import { ReactNode } from "react";
import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
    label?: string
    icon?: ReactNode
}