import React from 'react';

// style
import { Wrapper, Image,Content } from './Actors.style';


const Actors = ({imageUrl,name,character}) => {
    return <Wrapper>
        
        <Image src={imageUrl} alt={name} />
        <Content>
            <h3>{name}</h3>
            <p><b>As</b>   {character}</p>
        </Content>
   </Wrapper>
}

export default Actors;