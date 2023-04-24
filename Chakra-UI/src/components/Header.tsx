import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Box as="section">
      <Box
        color="gray.50"
        bg="#90CDF4"
        pb="198px"
        px="8px"
        pt="90px"
        textAlign={["left", "left", "center"]}
      >
        <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]}>
          Simple pricing for your business
        </Heading>
        <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]} pt="4">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
}
