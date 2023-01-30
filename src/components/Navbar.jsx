import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import logo1 from '../assets/logo1.png';
import {
  HamburgerIcon,
  MoonIcon,
  CloseIcon,
  SunIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Center,
  HStack,
  Link,
  IconButton,
  Icon,
  useDisclosure,
  Button,
  Image,
  Stack,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';

const links = [
  { linkName: 'Home', path: '/' },
  { linkName: 'Products', path: '/products' },
  { linkName: 'Shopping', path: '/cart' },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    rounded="md"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blue.100', 'blue.200'),
    }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('#645G9D')} px={4}>
      <Flex h="16" alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack>
          <Link as={ReactLink} to="/">
            <Image
              src={colorMode === 'light' ? logo : logo1}
              alt="Website logo"
              height={70}
            />
          </Link>
        </HStack>

        <Center
          as="nav"
          spacing={4}
          display={{ base: 'none', md: 'flex' }}
        >
          {links.map((link) => (
            <NavLink key={link.linkName} path={link.path}>
              {link.linkName}
            </NavLink>
          ))}
        </Center>

        <Stack direction="row" spacing={7}>
          <Button
            as={ReactLink}
            to="/login"
            variant="link"
            fontWeight="bold"
            fontSize="sm"
          >
            Log in
          </Button>
          <Button
            as={ReactLink}
            display={{ base: 'none', md: 'inline-flex' }}
            to="registration"
            size="md"
            height="48px"
            width="100px"
            border="2px"
            borderColor="blue.500"
          >
            Sign up
          </Button>
          <NavLink>
            <Icon
              as={colorMode === 'light' ? MoonIcon : SunIcon}
              alignSelf="center"
              size="md"
              height="28px"
              width="30px"
              onClick={() => toggleColorMode()} //to change the state of the colorMode variable
            />
          </NavLink>
        </Stack>
      </Flex>

      {isOpen ? (
        <Box pb={4}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            <NavLink key="signup" path="/registration">
              SingUp
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
