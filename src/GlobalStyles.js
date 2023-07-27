import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth:1280px;
        --white:#fff;
        --lightGrey:#eee;
        --midGrey:#353535;
        --darkGrey:#1c1c1c;
        --fontSuperBig:2.5rem;
        --fontBig:1.5rem;
        --fontMid:1.2rem;
        --fontSmall:1rem;
    }

    * {
        box-sizing:border-box;
        font-family:oswald;
    }

    body {
        margin:0;
        padding:0;

        h1 {
            font-size:2.5rem;
            color:var(--white);
            font-weight:bolder;
        }

        h2{
            font-size:1.9rem;
            font-weight:bolder;
        }

        h3{
            font-size:1.6rem;
            color:var(--white);
            font-weight:bolder;
        }

        p{
            font-size:1.3rem;
            color:var(--white);
            font-weight: 200;
        }
    }

`;
