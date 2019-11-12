import {
    Dimensions,
    Platform
} from 'react-native';

const { width, height } = Dimensions.get("window");
const ScreenWidth = width;

export function getPixel(num, designWidth = 375) {
    return num * ScreenWidth / designWidth;
}
