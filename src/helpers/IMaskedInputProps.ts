import {ChangeEvent, ReactElement} from "react";

interface IMaskedInputProps {
    mask: string;
    children: ReactElement;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

export type {IMaskedInputProps};