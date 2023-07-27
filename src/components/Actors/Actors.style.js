import styled from "styled-components";

export const Wrapper = styled.div`
   margin: 0;
   cursor: pointer;
   /* box-sizing: content-box; */
`;

export const Image = styled.img`
display: block;
width: 100%;
height: 280px;
object-fit: cover;
border-radius: 15px;
`;

export const Content = styled.div`
color: var(--white);
border-radius: 15px;
text-align: center;
background: var(--darkGrey);
opacity: 0.7;
position: relative;
top:-84px;

h3{
    margin: 10px 0 0 0;
}
p{
    margin: 5px 0;
}
`;