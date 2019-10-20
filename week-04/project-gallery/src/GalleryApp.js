import React from 'react';

import ImageList from './imageInfo/ImageList';
import Viewer from './viewer/viewer';
import ThumbnailBar from './thumbnailBar/thumbnailBar';

class RebuildGallery extends React.Component {
    constructor() {
        super();
        this.state = {
            imageList: ImageList,
            viewerImgIndex: 0,
        };
    }

    updateFromChild(newData) {
        console.log(newData);
        this.setState({
            imageList: this.state.imageList,
            viewerImgIndex: newData.viewerImgIndex,
        });
    }

    render() {
        console.log(this.state.viewerImgIndex);
        return (
            <>
                <div className="gallery-container" id="gallery">
                    <Viewer imageList={this.state.imageList} viewerImgIndex={this.state.viewerImgIndex} func={this.updateFromChild.bind(this)}/>
                    <ThumbnailBar data={this.state} func={this.updateFromChild.bind(this)}/>
                </div>
            </>
        )
    }
}

export default RebuildGallery;
