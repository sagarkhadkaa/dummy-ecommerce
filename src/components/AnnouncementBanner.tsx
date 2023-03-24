import { BsChatDotsFill } from "react-icons/bs";
import "../assets/fonts.css";
export default function AnnouncementBanner() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#ffe8b6",
        padding: " 20px ",
        fontFamily: "Sagona",
        fontWeight: "bold",
        color: "#715a24",
        justifyContent: "center",
        // textAlign: "center",
      }}
    >
      Subscribe & Save + a personal shopper via text
      <BsChatDotsFill />
      &nbsp; every month --&gt;
    </div>
  );
}
