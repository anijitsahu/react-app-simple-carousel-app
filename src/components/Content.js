// dependencies
import React, { Component } from 'react';

// Components
import Carousel from './carousel/Carousel'

class Content extends Component {
  constructor(props) {
    super(props)

    const TOTAL_NUMBER_OF_IMAGES = 5
    this.state = {
      active: 1,
      total: TOTAL_NUMBER_OF_IMAGES
    }

    this.updateImage = this.updateImage.bind(this)
  }

  // update the image
  updateImage(event) {
    event.persist()
    let { id } = event.target
    let { active, total } = this.state
    console.log('code reached...', id)

    if (id == "left") {

      active = (active > 1) ? active - 1 : 1
      this.setState({ active }, () => {
        console.log('Upadated State', this.state)
      })
    } else if (id == "right") {
      active = (active < total) ? active + 1 : total

      this.setState({ active }, () => {
        console.log('Upadated State', this.state)
      })
    }

  }

  render() {
    let { active, total } = this.state
    return (
      <div className="content">
        <Carousel srcNumber={active} total={total} updateImage={this.updateImage} />
      </div>
    );
  }
};


export default Content;