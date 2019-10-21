import React from 'react';

import Increaser from './increaser';
import Decreaser from './decreaser';
import Resetter from './resetter';
import Setter from './setter';
import Tags from './tags';
import TagAdder from './tagAdder';
import TagRemover from './tagRemover';
import TagAllRemover from './tagAllRemover';
import ComplexCounter from './complexCounter';

const RenderAll = () => {
    return (
        <>
            <div className="number-operation-container">
                <Increaser />
                <Decreaser />
                <Resetter />
                <Setter />
            </div>
            <div className="number-operation-container">
                <Tags />
                <TagAdder />
                <TagRemover />
                <TagAllRemover />
            </div>
            <div>
                <ComplexCounter />
            </div>
        </>
    );
}

export default RenderAll;
