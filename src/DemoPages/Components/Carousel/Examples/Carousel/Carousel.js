import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    id: 1,
    src:
      'https://moonusedcars.com/wp-content/uploads/2019/07/Buying-A-Car-In-The-Summer-What-To-Know.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    src:
      'https://postmediadriving.files.wordpress.com/2019/01/taycan-charging.jpg?quality=80&strip=all&w=800&h=400&crop=1',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    src:
      'https://www.skillsroad.com.au/SR/files/e7/e77df946-11cb-44ca-a12a-2fc5dee13f45.png',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const CarouselDefault = () => <UncontrolledCarousel items={items} />;

export default CarouselDefault;
