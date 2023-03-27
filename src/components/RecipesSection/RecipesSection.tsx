import { Button, Heading } from "@chakra-ui/react";
import "./RecipesSection.css";

export default function RecipesSection() {
  return (
    <div className='recipe_section_container'>
      <Heading className='recipe_heading'>Mouth-Watering Recipes</Heading>
      <div className='image_container'>
        <div className='mouth_watering_recipes'>
          <div className='mouth_watering_card'>
            <Heading fontSize='18px' mb='4' color='#fff' fontFamily='Sagona'>
              Mouth-Watering Recipes
            </Heading>
            <Button className='make_it_button'>MAKE IT</Button>
          </div>
        </div>
        <div className='stuffed_bell_peppers'>
          <div className='stuffed_bell_card'>
            <Heading fontSize='18px' mb='4' color='#fff' fontFamily='Sagona'>
              Stuffed Bell Peppers
            </Heading>
            <Button className='make_it_button' style={{ color: "#63703f" }}>
              MAKE IT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
