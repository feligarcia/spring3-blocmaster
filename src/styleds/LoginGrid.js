import styled from 'styled-components';
import Avatar from "../data/images/avatar.png";
import Loggout from '../data/images/power-off.png'

export const AvatarImg = styled.img`
   background-image: url(${Avatar});
   width: 45px;
   height: 46px;
   background-color: initial;
   border-radius:50%;
   background-repeat: no-repeat;
   
   background-size: cover;
   border:0;
   
`

export const ProfileImg = styled.img`
border-style:none;
background-image: url(${Avatar});
   width: 100px;
   height: 100px;
   border-radius:50%;
   background-color: initial;
   background-repeat: no-repeat;
   background-size: cover;
   
`
export const LogoutIcon = styled.div`
   width: 25px;
   height: 26px;
   background-color: initial;
   background-image: url(${Loggout});
   background-repeat: no-repeat;
   background-size: cover;
   filter: invert(100%);
`