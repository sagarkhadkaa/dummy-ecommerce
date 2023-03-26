import { IconButton } from "@chakra-ui/react";
import { BsChatDotsFill } from "react-icons/bs";
import "./AnnouncementBanner.css";
export default function AnnouncementBanner() {
  return (
    <div className='announcement_banner'>
      <div>Subscribe & Save + a personal shopper via text</div>
      <IconButton
        className='chat_icon_button'
        aria-label='chat'
        icon={<BsChatDotsFill />}
        size='sm'
        fontSize='16px'
        paddingLeft='2'
        variant='unstyled'
      />
      <div> &nbsp; every month --&gt;</div>
    </div>
  );
}
