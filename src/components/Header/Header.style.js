import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--midGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const Logo = styled.div`
  width: 200px;
  height: 30px;

  @media screen and (max-width: 500px) {
    width: 150;
  }
`;

export const TMDBLogoImg = styled.div`
  width: 100px;
  height: 30px;

  @media screen and (max-width: 500px) {
    width: 0;
  }
`;
