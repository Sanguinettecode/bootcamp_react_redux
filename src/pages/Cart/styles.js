import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border-radius: 4px;
      border: 0;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #eee;
  }

  img {
    width: 250px;
    height: auto;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bolder;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #eee;
      border-radius: 5px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    border: none;
    background: none;
    outline: none;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-left: 5px;
  }
`;
