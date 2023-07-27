import React from 'react';

import { Link } from 'react-router-dom';

import { Wrapper, Content } from '../Navigator/navigator.style';

const Navigator = ( {movieTitle}) => {
    return <Wrapper>
        <Content>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                <span>Home</span>
                </Link>
            <span>|</span>
            <span>{movieTitle}</span>

        </Content>
    </Wrapper>
}

export default Navigator;