import styled from "styled-components";

export const TaskStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18.2rem;
  height: auto;
  background-color: #f3f3f3;
  margin: 10px 10px;
  border-radius: 7px;
  :hover {
    cursor: pointer;
  }
`;

export const TaskStatusTitle = styled.div`
  font-size: 16px;
  margin-top: 3px;
`;

export const TaskListWrapper = styled.div`
  display: flex;
  position: relative;
  height: auto;
  margin: 10px 48px;
`;
