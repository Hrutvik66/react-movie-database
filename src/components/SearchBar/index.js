import React, { useState, useEffect, useRef } from 'react';

import SearchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
    
    const [state, setState] = useState("");
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)
        
        return () => clearTimeout(timer)
    },[setSearchTerm,state])

    return <Wrapper>
        <Content>
            <img src={SearchIcon} alt='Search-Icon' />
            <input type='text'
                placeholder='Search Movie'
                onChange={event => setState(event.target.value)}
                value={state}
                />
        </Content>
    </Wrapper>
}

export default SearchBar;