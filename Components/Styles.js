import Styled from 'styled-components';

export const Header = Styled.header`
    h1 {
        font-weight: normal;
        margin-top: 16px;
        padding-bottom: 32px;
        font-size: 24px;
        line-height: 36px; 
        color: #282538;
    }

    span {
        font-weight: bold;
    }
`
export const Job_Container = Styled.div`
    padding: 16px;
    margin-bottom: 16px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;

    .section_container__div {
        display: grid;
        grid-template-columns: auto 75%;
        grid-gap: 32px;
    }

    img { 
        align-self: center;
    }

    .job_info {
        display: flex;
    }

    .job_company {
        font-weight: bold;
        font-size: 12px;
        line-height: 14px; 
        color: #334680;
        margin-bottom: 8px;
    }

   .job_title {
        font-size: 16px;
        line-height: 19px; 
        color: #334680;
        margin-bottom: 8px;
    }

    .job_type {
        border: 1px solid #334680;
        box-sizing: border-box;
        border-radius: 4px;
        font-size: 12px;
        line-height: 14px; 
        color: #334680;
        margin-top: 16px;
        padding: 4px;
        max-width: 25%;
    }

    .job_info {
        display: flex;
        justify-content: flex-end;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px; 
        color: #B9BDCF;
        margin-top: 32px;
    }
`;

export const FormStyles = Styled.form`
    display: grid;

    label:first-of-type {
        margin-bottom: 16px;
    }

    label input {
        margin-right: 12px;
    }
    
    input {
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        margin-bottom: 16px;
        padding: 16px; 
        border: none;
    }

`
export const SearchForm = Styled.form`
background-color: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
border-radius: 4px;
margin-left: 16px;
margin-right: 16px;
padding: 6px;
display: flex;
justify-content: space-between;

     input {
         flex-basis: 70%;
         padding: 16px;
         border: none;
     }

     button {
        background: #1E86FF;
        border-radius: 4px;
        outline: none;
        border: none;
        flex-basis: 30%;
     }
`
