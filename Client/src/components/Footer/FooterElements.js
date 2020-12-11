import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const FooterContainer = styled.div`
  height: 100px;
  background: #17263c;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 20px;
  color: #dae0e2;
  font-size: 1rem;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 760px;
`;

export const FooterLinkTitle = styled.p`
  font-weight: lighter;
`;

export const FooterLink = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px 10px;
  cursor: pointer;

  &:hover {
    color: #a3c2f0;
  }
`;
