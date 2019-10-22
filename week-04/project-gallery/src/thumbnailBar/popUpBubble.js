import React from 'react';

import tnOneStyle from './thumbnailOne.module.css';

class PopUpBubble extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className={tnOneStyle.popUpThumbnailNameContainer}>
                    <div className={!this.props.poped ? tnOneStyle.hide : tnOneStyle.popUpThumbnailName}>{this.props.imgInfo.getWorkName()}</div>
                    <div className={!this.props.poped ? tnOneStyle.hide : tnOneStyle.popUpThumbnailTriangle}/>
                </div>
            </>
        )
    }
}

export default PopUpBubble;
