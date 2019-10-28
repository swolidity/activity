import { ThemeProvider, CSSReset, Flex, Box, Heading } from "@chakra-ui/core";

export default ({ children }) => (
  <ThemeProvider>
    <CSSReset />
    <Flex mb={8} p={6}>
      <Box>
        <Heading size="md">Activity.im</Heading>
      </Box>
    </Flex>
    {children}
  </ThemeProvider>
);
