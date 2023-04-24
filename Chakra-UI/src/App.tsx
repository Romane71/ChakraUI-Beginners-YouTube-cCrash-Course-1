import "./App.css";
import { Box } from "@chakra-ui/react";
import { Text, Button } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Text as="i" fontSize="32">
        Hi there! I am Romane and I am French{" "}
      </Text>

      <Box bg="green" w="100px" h="100px" margin="auto" mt="10px">
        item1
        <Button mt="32px" colorScheme="red" _hover={{ background: "blue" }}>
          Click me!
        </Button>
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
    </div>
  );
}

export default App;
