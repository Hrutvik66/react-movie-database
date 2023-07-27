import styled from "styled-components";

export const Wrapper = styled.div`
width: 80%;
max-width:var(--maxWidth);
margin:0 auto 20px;
padding:0 20px;

h1{
    color:var(--midGrey);

@media screen and (max-width:768px){
    font-size:var(--fontBig);
}
}
`;

export const Content = styled.div`
display: grid;
grid-template-columns: repeat(8,minmax(200px,1fr));
overflow-x: auto;
grid-gap: 2rem;

/* width */
::-webkit-scrollbar {
  width: 20px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
`;