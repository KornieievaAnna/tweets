import styled from 'styled-components';

export const Card = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0 0 2px #f0ecfa, 0 0 4px #f0ecfa, 0 0 6px #f0ecfa,
      0 0 15px #f0ecfa;
    // border-radius: 3px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`;

export const Picture = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
`;
export const Band = styled.span`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Сircle = styled.span`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  position: absolute;
  left: 159px;
  top: 187px;
  border-radius: 50%;
`;

export const Stats = styled.div`
  display: flex;
  padding-top: 284px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Text = styled.p`
// position: absolute;
width: 214px;
height: 24px;
// left: 124px;
// top: 284px;
gap: 16px;

text-align: center
font-family: 'Montserrat';
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;

color: #EBD8FF;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;

  /* Landing/button text color */

  color: #373737;
`;


// export const LoaderStyled = styled.div``;
// export const LoaderStyled = styled.div``;
// export const LoaderStyled = styled.div``;
// export const LoaderStyled = styled.div``;
