import React from 'react';
import ReactDOM from 'react-dom';
//import GalleryApp from './GalleryApp';
import RebuildGallery from './rebuildGallery';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RebuildGallery />, document.getElementById('gallery'));
//ReactDOM.render(<GalleryApp />, document.getElementById('gallery'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
