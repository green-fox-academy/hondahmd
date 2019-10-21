'use strict';

export const displayTags = () => ({
    type: 'DISPLAY_TAGS'
});

export const addTag = tagName => ({
    type: 'ADD_TAG',
    payload: {
        tagName
    }
});

export const removeTag = tagName => ({
    type: 'REMOVE_TAG',
    payload: {
        tagName
    }
});

export const removeAll = () => ({
    type: 'REMOVE_ALL'
})
