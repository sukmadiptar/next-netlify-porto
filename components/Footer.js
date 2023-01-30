import { Box, Container, Text, Flex, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <Box bg="#f5f5f5" py={4}>
        <Container maxW="container.xl">
          <Flex>
            <Text>
              &copy; Copyright 2023. <b>Pradiptarr</b>
            </Text>
            <Spacer />
            <Flex as="nav">
              <Text mx="4">about</Text>
              <Text mx="4">portfolio</Text>
              <Text mx="4">contact</Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </footer>
  )
}
