import styled from 'styled-components'

export const Container = styled.div`
    .list {
        margin: 0 auto;
        display: grid;
        max-width: 800px;
        gap: 10px;
        grid-template-columns: auto auto auto;
        .card {
            background-color: var(--light);
            border-radius: 20px;
            padding: 20px 0;
            display: flex;
            flex-direction: column;
            height: 200px;
            justify-content: space-between;
            align-items: center;
            &--image {
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                height: 100px;
                width: 100px;
                background-color: red;
            }
            max-width: 250px;
        }
    }
`