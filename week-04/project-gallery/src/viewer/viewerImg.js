import React from 'react';

import viewerImgStyle from './viewerImg.module.css';

class ViewerImg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="viewer-image-container">
                    <img className="viewer-image" src={this.props.imgInfo.getViewerImgLink()} />
                    <div className="description-container">
                        <h2 className={viewerImgStyle.descriptionTitle}>{this.props.imgInfo.getWorkName()}</h2>
                        <p className={viewerImgStyle.description}>{this.props.imgInfo.getDescription()}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default ViewerImg;
