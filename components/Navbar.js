import React, { useState } from 'react'
import Image from 'next/image'
import {
  Flex,
  Text,
  useColorMode,
  Switch,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const { isOpen, onOpen, onClose } = useDisclosure()

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
        <Flex gap={5} pos="revert">
          <Flex as="nav" gap={8} display={['none', 'none', 'flex', 'flex']}>
            <Text color="white">about</Text>
            <Text color="white">portfolio</Text>
            <Text color="white">contact</Text>
            <Flex gap={5}>
              <Link href="https://www.instagram.com/pradiptarr/" passHref>
                <a target="_blank">
                  <Image src="/icons/instagram.png" width="25" height="25" alt="Instagram" />
                </a>
              </Link>
              <Link href="https://github.com/sukmadiptar" passHref>
                <a target="_blank">
                  <Image src="/icons/github.png" width="25" height="25" alt="Github" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/sukma-pradipta-ramadhan/" passHref>
                <a target="_blank">
                  <Image src="/icons/linkedin.png" width="25" height="25" alt="Linkedin " />
                </a>
              </Link>
            </Flex>
          </Flex>
          <IconButton
            variant="ghost"
            aria-label="Hamburger"
            color="white"
            icon={<HamburgerIcon />}
            size="md"
            pb={[0, 0, 3, 3]}
            left="3"
            top={['1.6', '1.6', '0', '0']}
            display={['flex', 'flex', 'none', 'none']}
            onClick={onOpen}
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose} autoFocus size="xs">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody bgColor="black">
                <Flex gap={2} flexDir="column" py={6}>
                  <Text color="white">about</Text>
                  <Text color="white">portfolio</Text>
                  <Text color="white">contact</Text>
                  <Flex gap={5}>
                    <Link href="https://www.instagram.com/pradiptarr/" passHref>
                      <a target="_blank">
                        <Image src="/icons/instagram.png" width="25" height="25" alt="Instagram" />
                      </a>
                    </Link>
                    <Link href="https://github.com/sukmadiptar" passHref>
                      <a target="_blank">
                        <Image src="/icons/github.png" width="25" height="25" alt="Github" />
                      </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/sukma-pradipta-ramadhan/" passHref>
                      <a target="_blank">
                        <Image src="/icons/linkedin.png" width="25" height="25" alt="Linkedin " />
                      </a>
                    </Link>
                  </Flex>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          <Switch m={[3, 3, 1, 1]} color="green" isChecked={isDark} onChange={toggleColorMode} />
        </Flex>
      </Flex>
    </>
  )
}
