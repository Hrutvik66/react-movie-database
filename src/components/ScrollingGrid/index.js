import React from 'react';

import { Wrapper, Content } from './ScrollingGrid.styles';

const ScrollingGrid = ({ header, children }) => {
    return <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
}

export default ScrollingGrid;