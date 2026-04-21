import { ReactNode } from "react";


export interface ButtonProps{
    icon?: ReactNode,
    text?: string,
    textPosition?: "left" | "right",
    style?: object
}