import styled from "styled-components";
const HomeEl = styled.article`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export default function Home() {
  return <HomeEl>Go ahead and start!</HomeEl>;
}
