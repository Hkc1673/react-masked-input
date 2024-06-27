# react-text-input-mask
`react-text-input-mask` is a React component that provides input masking functionality. It allows you to enforce a specific input format, such as phone numbers, card number, or any custom pattern, directly within an input field.

## Getting Started

### Installation

This package is already published to NPM, use `npm` or `yarn` to download to local directory.

```bash
npm i react-text-input-mask
yarn add react-text-input-mask
```

### Example

### Import react-text-input-mask

```javascript
import { MaskedInput } from 'react-text-input-mask';
```

### Basic usage

```jsx
<MaskedInput mask='TR99 9999 9999 9999 9999 9999 99'>
    <input placeholder='Enter IBAN' />
</MaskedInput>
```

```jsx
<MaskedInput mask='99/99'>
    <input placeholder='MM/YY' />
</MaskedInput>
```
### You can use ant design
```jsx
import { Input } from 'antd';

<MaskedInput mask='9999 9999 9999 9999'>
    <Input placeholder='Enter card number'/>
</MaskedInput>
```
### You can use styled-components
```jsx
import styled from 'styled-components';
const StyledInput = styled.input``;

<MaskedInput mask='(999) 999 99 99'>
    <StyledInput placeholder='Enter phone number'/>
</MaskedInput>
```

