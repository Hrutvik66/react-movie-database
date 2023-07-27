import styled from "styled-components";

export const Wrapper = styled.div`
display:block ;
background:var(--darkGrey) ;
width:20% ;
min-width:150px ;
height:40px ;
border-radius:30px ;
color:var(--white) ;
border:0 ;
font-size:var(--fontBig) ;
margin:20px auto ;
transition:all 0.3px ;
outline:none ;
cursor: pointer;
text-align: center;


:hover{
    opacity: 0.8;
}
`;
