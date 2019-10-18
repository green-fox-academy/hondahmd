import React from 'react';

import SlideButton from './slideButton';
import ViewerImg from './viewerImg';

class Viewer extends React.Component {
    constructor(props) {
        super(props);
    }

    slide(index) {
        this.props.func({
            viewerImgIndex: index
        });
    }

    render() {
        return (
            <>
                <div className="viewer-container">
                    <SlideButton func={this.slide.bind(this)} position="left" listLength={this.props.imageList.length} currentIndex={this.props.viewerImgIndex}/>
                    <ViewerImg imgInfo={this.props.imageList[this.props.viewerImgIndex]}/>
                    <SlideButton func={this.slide.bind(this)} position="right" listLength={this.props.imageList.length} currentIndex={this.props.viewerImgIndex}/>
                </div>
            </>
        )
    }
}

export default Viewer;
