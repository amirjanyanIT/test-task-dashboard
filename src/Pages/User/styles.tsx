import styled from 'styled-components'

export const Container = styled.div`
    .list {
        margin: 0 auto;
        display: grid;
        max-width: 800px;
        gap: 10px;
        justify-content: center;
        grid-template-columns: auto auto auto;
        
        @media only screen and (max-width: 1024px) {
            grid-template-columns: auto auto;
        }
        @media only screen and (max-width: 768px) {
            grid-template-columns: auto;
        }
        .card {
            display: flex;
            cursor: pointer;
            background-color: var(--light);
            border-radius: 20px;
            padding: 20px 0;
            flex-direction: column;
            height: 250px;
            min-width: 250px;
            justify-content: space-between;
            align-items: center;
            &--image {
                display: flex;
                background-repeat: none;
                background-position: center;
                background-size: cover;
                box-shadow: 3px 4px 17px 1px #36464f;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                height: 100px;
                width: 100px;
                background-color: red;
            }
            &--actions {
                cursor: pointer;
                margin-top: 10px;
                color: #f4f4f4;
                font-size: 20px;
                font-weight: bold;
            }
            max-width: 250px;
        }
    }
`