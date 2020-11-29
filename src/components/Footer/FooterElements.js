import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const FooterContainer = styled.div`
  height: 100px;
  background: #616c6f;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 20px;
  color: #dae0e2;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
export const FooterLinkTitle = styled.p`
  margin-top: 10px;
  font-weight: lighter;
`;
export const FooterLink = styled(LinkS)` 
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;
