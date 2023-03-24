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
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import "./Navbar.css";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarIconGroup from "../common/NavbarIconGroup";
import NavbarDrawerButtonGroup from "../common/NavbarDrawerButtonGroup";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav className='navbar'>
      <div className='navbar_left'>
        <Button variant='ghost' rightIcon={<BiChevronDown />}>
          Shop
        </Button>
        <Button variant='ghost'>Bundles</Button>
        <Button variant='ghost'>Subscribe & Save</Button>
      </div>
      <div className='navbar_center'>
        <h1>DUMMY</h1>
      </div>
      <div className='navbar_right'>
        <Button variant='ghost' rightIcon={<BiChevronDown />}>
          Learn
        </Button>
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
                    <Button variant='ghost'>Electronic Store</Button>
                    <Button variant='ghost'>Grocery Store</Button>
                    <Button variant='ghost'>Marketplace</Button>
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
