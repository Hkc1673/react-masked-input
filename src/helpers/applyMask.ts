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

export { applyMask };