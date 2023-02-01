import { Box, Container, Text, Flex, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        py={4}
        position="fixed"
        w="100%"
        paddingInline={['1rem', '1rem', '3rem']}
        bgColor="black"
      >
        <Container maxW="container.xl">
          <Flex>
            <Text color="white">
              &copy; Copyright 2023. <b>Pradiptarr</b>
            </Text>
            <Spacer />
            <Flex as="nav">
              <Text mx="4" color="white">
                about
              </Text>
              <Text mx="4" color="white">
                portfolio
              </Text>
              <Text mx="4" color="white">
                contact
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </footer>
  )
}
