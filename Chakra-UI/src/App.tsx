import { Box } from "@chakra-ui/react"; // This is how you import each component from chakra

import "./App.css";

function App() {
  return (
    <div className="App">
      <Box as="section" bg="green" w="12opx" h="150px">
        This is a box
      </Box>
    </div>
  );
}

export default App;
