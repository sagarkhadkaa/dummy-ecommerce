import { Box } from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Text } from "@chakra-ui/react";

export default function BulletListItem({ children }: any) {
  return (
    <Box display='flex' alignItems='center' padding='2'>
      <AiOutlineCheckCircle size='20px' />
      <Text fontSize={["sm", "md", "lg", "xl"]} style={{ marginLeft: "5px" }}>
        {children}
      </Text>
    </Box>
  );
}
