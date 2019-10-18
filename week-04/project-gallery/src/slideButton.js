import React from 'react';

import slideButtonStyle from './slideButton.module.css';

class SlideButton extends React.Component {
    constructor(props) {
        super(props);
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }

    slide(edge, step) {
        if (this.props.currentIndex === edge) {
            this.props.func(this.props.listLength - 1 - edge);
        } else {
            this.props.func(this.props.currentIndex + step);
        }
    }

    slideLeft() {
        this.slide(0, -1);
    }

    slideRight() {
        this.slide(this.props.listLength - 1, 1);
    }

    render() {
        return (
            <>
                <div className="slide-button-container" onClick={this.props.position === "right" ? this.slideRight : this.slideLeft}>
                    <img src="./arrow.svg" className={this.props.position === "right" ? slideButtonStyle.rightSlideButton : ''} />
                </div>
            </>
        )
    }
}

export default SlideButton;
