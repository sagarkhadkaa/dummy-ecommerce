import { Button } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

export default function NavbarDrawerButtonGroup() {
  return (
    <>
      <Button
        variant='ghost'
        aria-label='Search'
        size='lg'
        fontSize='28px'
        leftIcon={<BiSearch />}
        width='100%'
      />
      <Button
        variant='ghost'
        aria-label='User'
        size='lg'
        fontSize='24px'
        leftIcon={<FaUserAlt />}
        width='100%'
      />
      <Button
        variant='ghost'
        aria-label='Cart'
        size='lg'
        fontSize='28px'
        leftIcon={<FaShoppingCart />}
        width='100%'
      />
    </>
  );
}
