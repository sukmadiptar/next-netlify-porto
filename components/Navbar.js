import { Box, Flex, Menu, Spacer, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        py={4}
        position="fixed"
        top={0}
        left={0}
        w="100%"
        paddingInline={['1rem', '1rem', '3rem']}
        zIndex={1}
        bgColor="black"
      >
        <Link href="/" passHref>
          <a href="">
            <Text color="white">LOGO</Text>
          </a>
        </Link>
        <Flex as="nav">
          <Text color="white" mx="4">
            about
          </Text>
          <Text color="white" mx="4">
            portfolio
          </Text>
          <Text color="white" mx="4">
            contact
          </Text>
          <Image src="/netliheart.svg" width="30" height="30" alt="Instagram" />
          <Image src="/netliheart.svg" width="30" height="30" alt="Github" />
        </Flex>
      </Flex>
    </>
  )
}
