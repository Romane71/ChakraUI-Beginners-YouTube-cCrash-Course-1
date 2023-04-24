import "./App.css";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Flex justify="space-between" align="center">
        <Box bg="green" w="100px" h="100px">
          item1
        </Box>
        <Box bg="green" w="100px" h="200px">
          item2
        </Box>
        <Box bg="red" w="200px" h="200px">
          item3
        </Box>
        <Box bg="orange" w="200px" h="200px">
          item4
        </Box>
      </Flex>
    </div>
  );
}

export default App;
