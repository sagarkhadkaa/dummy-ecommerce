import { Button, IconButton } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

export default function NavbarIconGroup() {
  return (
    <div>
      <IconButton
        variant='ghost'
        aria-label='Search'
        size='lg'
        fontSize='28px'
        icon={<BiSearch />}
      />
      <IconButton
        variant='ghost'
        aria-label='User'
        size='lg'
        fontSize='24px'
        icon={<FaUserAlt />}
      />
      <IconButton
        variant='ghost'
        aria-label='Cart'
        size='lg'
        fontSize='28px'
        icon={<FaShoppingCart />}
      />
    </div>
  );
}
