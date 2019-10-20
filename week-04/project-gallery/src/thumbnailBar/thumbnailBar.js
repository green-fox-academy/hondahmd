import React from 'react';

import ThumbnailOne from './thumbnailOne';

class ThumbNailBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="thumbnail-bar-container">
                    {this.props.data.imageList.map((image, index) => 
                        <ThumbnailOne index={index} imgInfo={image} selected={index === this.props.data.viewerImgIndex} func={this.props.func}/>
                    )}
                </div>
            </>
        )
    }
}

export default ThumbNailBar;
