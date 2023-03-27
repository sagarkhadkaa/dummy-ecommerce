import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarIconGroup from "../common/NavbarIconGroup";
import NavbarDrawerButtonGroup from "../common/NavbarDrawerButtonGroup";
import { BsChevronDown } from "react-icons/bs";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav className='navbar'>
      <div className='navbar_left'>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />} variant='ghost'>
            Shop
          </MenuButton>
          <MenuList>
            <MenuItem fontSize='md' fontWeight='semibold'>
              Electronic Store
            </MenuItem>
            <MenuItem fontSize='md' fontWeight='semibold'>
              Grocery Store
            </MenuItem>
            <MenuItem fontSize='md' fontWeight='semibold'>
              Marketplace
            </MenuItem>
          </MenuList>
        </Menu>
        <Button variant='ghost'>Bundles</Button>
        <Button variant='ghost'>Subscribe & Save</Button>
      </div>
      <div className='navbar_center'>
        <h1>DUMMY</h1>
      </div>
      <div className='navbar_right'>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />} variant='ghost'>
            Learn
          </MenuButton>
          <MenuList>
            <MenuItem fontSize='md' fontWeight='semibold'>
              About Electronic
            </MenuItem>
            <MenuItem fontSize='md' fontWeight='semibold'>
              About Grocery
            </MenuItem>
            <MenuItem fontSize='md' fontWeight='semibold'>
              About Marketplace
            </MenuItem>
          </MenuList>
        </Menu>
        <Button variant='ghost'>About Us</Button>
        <NavbarIconGroup />
      </div>
      <IconButton
        className='menu_icon_button'
        aria-label='menu'
        icon={<AiOutlineMenu />}
        size='lg'
        fontSize='24px'
        variant='ghost'
        onClick={onOpen}
      />

      {/* Drawer Section  */}
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className='drawer_header'>
            <h1>DUMMY</h1>
          </DrawerHeader>
          <DrawerBody>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Accordion defaultIndex={[1]} allowMultiple>
                <AccordionItem style={{ width: "100%" }}>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='center'>
                        <strong>Shop</strong>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} style={{ textAlign: "center" }}>
                    <Button variant='ghost'>Electronic Store</Button>
                    <Button variant='ghost'>Grocery Store</Button>
                    <Button variant='ghost'>Marketplace</Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Button variant='ghost'>Bundles</Button>
              <Button variant='ghost'>Subscribe & Save</Button>
              <Accordion defaultIndex={[1]} allowMultiple>
                <AccordionItem style={{ width: "100%" }}>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='center'>
                        <strong>Learn</strong>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} style={{ textAlign: "center" }}>
                    <Button variant='ghost'>About Electronic</Button>
                    <Button variant='ghost'>About Grocery </Button>
                    <Button variant='ghost'>About Marketplace</Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Button variant='ghost'>About Us</Button>
              <div>
                <NavbarDrawerButtonGroup />
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
