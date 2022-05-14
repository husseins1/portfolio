import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Panda. All Rights Reserved.
      <br/>
      built using Chakra elements, inspired by Takuya
    </Box>
  )
}

export default Footer
