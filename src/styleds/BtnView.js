import styled from "styled-components"

export const DivBtn = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
align-items:center;
justify-content: space-between;
position:absolute;
bottom: 10%;
margin-left:1%;
width:40%;
min-width:360px;
max-height: 53px;
height:15%;
background-color:initial;
`

export const BtnViewNow = styled.button`
display: flex;
align-items:center;
justify-content: space-evenly;
border-style:none;
border-radius: 5px;
background-color:var(--primary-color);
width:47%;
margin: 0 1%;
height:100%;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 28px;
&:hover{
    color:var(--primary-color);
    background-color:var(--background-principal);
}
`
export const BtnViewLater = styled.button`
display: flex;
align-items:center;
justify-content: space-evenly;
border-radius: 5px;
color:var(--primary-color);
width:47%;
margin: 0 1%;
height:100%;
border: 1px solid #FED941;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 28px;
&:hover{
    background-color:var(--primary-color);
    color:var(--background-principal);
}
`

export const BtnViewLogo = styled.img`
/* margin: 0 auto; */
background-color: inherit;
height:inherit;
object-fit:cover;
max-width: 50%;
max-height: 50%;

`