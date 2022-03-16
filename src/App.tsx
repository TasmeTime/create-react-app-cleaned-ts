import styled from "styled-components";
import Home from "./assets/components/Home";
import { Colors } from "./assets/Theme";

const AppEl = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  gap: 1rem;
  background-color: ${Colors.White};
`;

function App() {
  return (
    <AppEl>
      <Home />
    </AppEl>
  );
}

export default App;
