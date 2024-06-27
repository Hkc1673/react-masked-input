import React, { useState, useEffect, forwardRef, cloneElement, Children, ChangeEvent, ReactElement } from 'react';
import { applyMask, IMaskedInputProps } from './helpers';

const MaskedInput = forwardRef<HTMLInputElement, IMaskedInputProps>(({ mask, children, ...props }, ref) => {

    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        if(props?.value && inputValue === '') setInputValue(applyMask(props?.value, mask));
    }, [props?.value]);

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
        if (mask) {
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

export {MaskedInput};
