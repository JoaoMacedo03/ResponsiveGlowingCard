import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
`;

export const Box = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  background: var(--primaryColor);
  transition: 0.5s;

  &:hover {
    height: 400px;

    div[id*="content"] {
      opacity: 1;
      transition: 0.5s;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -2;
    filter: blur(35px);
  }

  &:before, &:after {
    background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
  }

  &:nth-child(2):before,
  &:nth-child(2):after {
    background: linear-gradient(235deg, #ff005e, #010615, #fbff00);
  }

  &:nth-child(3):before,
  &:nth-child(3):after {
    background: linear-gradient(235deg, #772aff, #010615, #2196F3);
  }
`;

export const ImgBx = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 275px;
  opacity: 0.1;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`;

export const Content = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 90px;
  background: var(--primaryColor);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  opacity: 0;
  transition: 0.5s;
`;

export const ContentTitle = styled.h2`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1px;
`;

export const ContentInfo = styled.span`
  font-size: 14px;
  color: #fff;
  font-weight: 200;
  letter-spacing: 2px;
  margin-top: 1rem;
`;
