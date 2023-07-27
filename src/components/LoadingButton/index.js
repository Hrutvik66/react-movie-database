import React from 'react';

import { Wrapper } from './Button.styles';

const Button = ({ text, Change }) => {
    return <Wrapper type = "button" onClick = {Change}>
        {text}
    </Wrapper>
}

export default Button;