import styled from 'styled-components';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  min-height: 100vh;
  background-image: url("/images/test.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const ContactsListContainer = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgb(54, 54, 54) 0px 0px 10px;
  margin-top: 20px;
`;

export const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e1e4e8;
  cursor: pointer;
  z-index: 1;

  &:last-child {
    border-bottom: 0;
   
  }

  &:hover {
    // transform:translateY(-18px);
    background-color:rgb(169, 164, 164);
    transition: 0.8s all;
   
  }

  button {
    background-color: #f44336; // Red color for delete
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 5px;
    z-index: 100;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;

export const ContactName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const DetailText = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const AppHeader = styled.h1`
    color: #2C3E50; // Dark shade of blue
    margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    background-color: #4CAF50; // Green color for add
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    align-self: center;

    &:hover {
      background-color: #45a049;
    }
  }
`;
