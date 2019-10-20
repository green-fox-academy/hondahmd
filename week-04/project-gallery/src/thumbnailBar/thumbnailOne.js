import React from 'react';

import tnOneStyle from './thumbnailOne.module.css';

class ThumbnailOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            poped: false
        };
        this.selectImg = this.selectImg.bind(this);
        this.popImg = this.popImg.bind(this);
        this.unpopImg = this.unpopImg.bind(this);
    }

    selectImg() {
        this.unpopImg();
        this.props.func({
            viewerImgIndex: this.props.index,
        });
    }

    popImg() {
        if (this.props.selected) return;
        this.setState({
            poped: true
        });
    }

    unpopImg() {
        this.setState({
            poped: false
        });
    }

    render() {
        return(
            <>
                <div className={this.props.selected ? tnOneStyle.selectedThumbnail : tnOneStyle.unselectedThumbnail} onClick={this.selectImg} onMouseOver={this.popImg} onMouseOut={this.unpopImg}>
                    {this.state.poped && 
                        <div className={tnOneStyle.popUpThumbnailNameContainer}>
                            <article className={tnOneStyle.popUpThumbnailName}>{this.props.imgInfo.getWorkName()}</article>
                            <div className={tnOneStyle.popUpThumbnailTriangle}  /> 
                        </div>
                    }
                    <div className={tnOneStyle.triangleDiv} hidden={!this.props.selected} />
                    <div className="thumbnail-img-container">
                        <img src={this.props.imgInfo.getTbImgLink()} id={"tbImg " + this.index} alt={this.props.imgInfo.getWorkName()}
                        className={tnOneStyle.thumbnailImg}/>
                    </div>
                </div>
            </>
        )
    }    
}

export default ThumbnailOne;
