import { createGlobalStyle } from "styled-components";

//o uso das aspas é um template literals do javascript
export const GlobalStyle = createGlobalStyle`

    :root
    {
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
    }

    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //por pdarão o tamamho da font-size é 16px
    html 
    {
        /** é utilizado porcentagem para caso
        o usuário tenha modificado o tamanho da fonte
        no seu computador ou celular, se manter um
        tamanho fixo, o s.o do usuário não vai ajustar
        - questão de acessibilidade */
        @media (max-width: 1080px) {
          font-size: 93.75% ; //15px
        }
        @media (max-width: 720px) {
          font-size: 87.5% ; //14px
        }
    }

    //REM = 1rem = font-size definido root

    body
    {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    /**input, textarea, button tem sua
    propria fonte, por isso deve ser explicito aqui */
    body, input, textarea, button
    {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong
    {
        font-weight: 600;  
    }

    button
    {
        cursor:pointer;
    }

    [disabled]
    {
        opacity: 0.6;
        cursor:not-allowed;
    }

    .react-modal-overlay
    {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;

        display:flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content
    {
        width:100%;
        max-width: 576px;
        background: var(--background);
        padding:3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close
    {
        position: absolute;
        right:1.5rem;
        top: 1.5rem;
        border:0;
        background: transparent;

        transition: filter 0.2s;

        &.hover
        {
            filter:brightness(0.7);
        }
    }

`