import styled from "styled-components";

export const Wrapper = styled.div`
display:flex ;
align-items:center ;
justify-content:center ;
width:100% ;
height: 70px;
background:var(--white) ;
color:var(--darkGrey) ;
`;

export const Content = styled.div`
display:flex ;
width:100% ;
max-width:var(--maxWidth) ;
padding:0 20px ;

span{
    font-size:var(--fontMid) ;
    padding-right:10px ;
    color:var(--darkGrey);
    text-decoration: none;

    :hover{
        opacity: 0.5;
    }

    @media screen and (max-width:768px){
        font-size: var(--fontSmall);
    }
}
`;
