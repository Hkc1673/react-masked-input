import React, { useState, forwardRef, cloneElement, Children, ChangeEvent, ReactElement } from 'react';

interface MaskedInputProps {
    mask: string;
    children: ReactElement;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const applyMask = (value: string, mask: string): string => {
    let maskedValue = '';
    let maskIndex = 0;
    for (let i = 0; i < value?.length; i++) {
        if (maskIndex >= mask?.length) break;
        if (mask[maskIndex] === '9') {
            maskedValue += value[i];
            maskIndex++;
        } else {
            maskedValue += mask[maskIndex];
            maskIndex++;
            i--;
        }
    }
    return maskedValue;
};

const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(({ mask, children, ...props }, ref) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const rawValue = e?.target?.value.replace(/\D/g, '');
        const maskedValue = applyMask(rawValue, mask);
        setInputValue(maskedValue);
        if (props?.onChange) {
            props?.onChange({
                ...e,
                target: {
                    ...e?.target,
                    value: maskedValue,
                },
            });
        }
    };

    const cloneChildWithProps = (child: ReactElement) => {
        const acceptInput = ['Input', 'input', 'InputBase', 'styled.input', 'Styled(Input)', 'Styled(InputBase)'];
        const isInput = child?.type === 'input' || acceptInput?.includes((child?.type as any)?.render?.displayName);
        if (mask && isInput) {
            return cloneElement(child, {
                ...props,
                value: inputValue,
                onChange: handleChange,
                ref,
            });
        }
        return cloneElement(child, { ...props, ref });
    };

    return <>{Children?.map(children, cloneChildWithProps)}</>;
});

MaskedInput.displayName = 'MaskedInput';

export {MaskedInput};
