import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    src:
      'https://media.istockphoto.com/photos/business-people-walking-in-glass-building-picture-id806982598?k=6&m=806982598&s=612x612&w=0&h=4Ai7yCKiCNXHW_zqTG4TkcBJgct6QrGkhQpR2O5dW8w='
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    src:
      'https://media.istockphoto.com/photos/real-estate-picture-id932275488?k=6&m=932275488&s=612x612&w=0&h=CdgBfeiluuAOomkOBBVtBiJqJ53SzYOrj4oe3ykSmsU='
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    src:
      'https://media.istockphoto.com/photos/indian-woman-laughing-eating-pizza-with-diverse-coworkers-in-office-picture-id1070271762?k=6&m=1070271762&s=612x612&w=0&h=_nZ8bQ-YXzY9lApU08JgKyIjH5hb3hRy7mzqY2Zxhus='
  }
];

class CustomExample extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            className="text-danger"
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {`.custom-tag img {
                width: 100%;
              }`}
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default CustomExample;
