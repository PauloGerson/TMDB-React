import styled from "styled-components";

export const Container = styled.div`
    font-family: 'DM Sans', sans-serif;
    margin: 2rem 4rem;
  
    display: flex;
    justify-content: center;
    align-items: center;


    h2{
        margin: 3rem o;
        text-align: center;
    }

    .movie{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }

    img{
        width: 300px;
        border-radius: 10px;
    }

    .details{
        display: flex;
        flex-direction: column;

        align-items: flex-start;
        margin-left: 3rem;
        max-width: 30%;
        margin-top: 2rem;
        align-items: center;

    }
    button{
        background-color: #f5c542;
        border: none;
        cursor: pointer;
        border-radius: 2rem;
        color: black;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100% ;
        font-weight: 700;
        transition: all 0.3s;
    }

    button:hover{
        background-color:#e0a607;
    }

    span{
        line-height: 130%;
        font-weight: 300;
        margin: 1rem 0rem;
        font-size: 110%;
      
    }

    .release-date{
        opacity: 0.5;
    }

    @media(max-width: 720px){
        .movie{
            display: flex;
            flex-direction: column;
            
            .details{
               
              display: flex ;
              flex-direction: column;
              
              width: 70rem;
              text-align: justify;

              span{
                width: 80%;
                margin: 1rem 5rem 3rem 2rem;
              }
              h2{
                width: 80%;
                margin-right: 3rem;
                margin-bottom: 2rem;
              }
   
            }
            img{
                max-width: 20%;              
              }
             

              button{
                margin-right: 3rem;
              }
        }
        
    }

`

