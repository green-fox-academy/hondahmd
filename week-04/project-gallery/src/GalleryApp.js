import React from 'react';

import galleryStyle from './GalleryApp.module.css';
import ImageList from './ImageList';

class GalleryApp extends React.Component {
    constructor() {
        super();
        this.state = {
            imageList: ImageList,
            viewerImgIndex: 0,
            thumbnailImgPopIndex: undefined
        };
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
        this.clickOnThumbnail = this.clickOnThumbnail.bind(this);
        this.moveOverThumbnail = this.moveOverThumbnail.bind(this);
        this.moveOutThumbnail = this.moveOutThumbnail.bind(this);
    }

    slide(edge, step) {
        if (this.state.viewerImgIndex === edge) {
            this.setState({
                imageList: this.state.imageList,
                viewerImgIndex: this.state.imageList.length - 1 - edge,
                thumbnailImgPopIndex: this.state.thumbnailImgPopIndex
            })
        } else {
            this.setState({
                imageList: this.state.imageList,
                viewerImgIndex: this.state.viewerImgIndex + step,
                thumbnailImgPopIndex: this.state.thumbnailImgPopIndex
            })
        }
    }

    slideLeft() {
        this.slide(0, -1);
    }

    slideRight() {
        this.slide(this.state.imageList.length - 1, 1);
    }

    clickOnThumbnail(event) {
        if (event.target.id.indexOf('tbImg') === -1 || Number(event.target.id.split(' ')[1]) > this.state.imageList.length - 1) { return; }
        this.setState({
            imageList: this.state.imageList,
            viewerImgIndex: Number(event.target.id.split(' ')[1]),
            thumbnailImgPopIndex: this.state.thumbnailImgPopIndex
        })
    }

    moveOverThumbnail(event) {
        if (event.target.id.indexOf('tbImg') === -1 || Number(event.target.id.split(' ')[1]) > this.state.imageList.length - 1 || Number(event.target.id.split(' ')[1]) === this.state.viewerImgIndex) { return; }
        this.setState({
            imageList: this.state.imageList,
            viewerImgIndex: this.state.viewerImgIndex,
            thumbnailImgPopIndex: Number(event.target.id.split(' ')[1])
        });
    }

    moveOutThumbnail() {
        this.setState({
            imageList: this.state.imageList,
            viewerImgIndex: this.state.viewerImgIndex,
            thumbnailImgPopIndex: undefined
        });
    }

    render() {
        return (
            <>
                <div className="gallery-container" id="gallery">
                    <div className="viewer-container">
                        <div className="slide-button-container" onClick={this.slideLeft}>
                            <img src="./arrow.svg" />
                        </div>
                        <div className="viewer-image-container">
                            <img className="viewer-image" src={this.state.imageList[this.state.viewerImgIndex].getViewerImgLink()} />
                            <div className="description-container">
                                <h2 className={galleryStyle.descriptionTitle}>{this.state.imageList[this.state.viewerImgIndex].getWorkName()}</h2>
                                <p className={galleryStyle.description}>{this.state.imageList[this.state.viewerImgIndex].getDescription()}</p>
                            </div>
                        </div>
                        <div class="slide-button-container" onClick={this.slideRight}>
                            <img src='arrow.svg' className={galleryStyle.rightSlideBar} />
                        </div>
                    </div>
                    <div className="thumbnail-bar-container" onClick={this.clickOnThumbnail} onMouseOver={this.moveOverThumbnail} onMouseOut={this.moveOutThumbnail}>
                        {this.state.imageList.map((image, index) =>
                            <div className={index === this.state.viewerImgIndex ? galleryStyle.selectedThumbnail : galleryStyle.unselectedThumbnail} key={"tbImg" + index}>
                                {index === this.state.thumbnailImgPopIndex &&
                                    <div className={galleryStyle.popUpThumbnailNameContainer}>
                                        <article className={galleryStyle.popUpThumbnailName} >{image.getWorkName()}</article>
                                        <div className={galleryStyle.popUpThumbnailTriangle}  />
                                    </div>
                                }
                                <div className={galleryStyle.triangleDiv} hidden={index === this.state.viewerImgIndex ? false : true} />
                                <div className="thumbnail-img-container">
                                    <img src={image.getTbImgLink()} id={"tbImg " + index} alt={image.getWorkName()}
                                        className={galleryStyle.thumbnailImg} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    }

}

export default GalleryApp;
