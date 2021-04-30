/**
 * https://stackoverflow.com/a/37794326
 * This is a great function! I just added typescript annotations
 */
export default function metersToPixelsAtMaxZoom(meters: number, latitude: number) {
    return meters / 0.075 / Math.cos(latitude * Math.PI / 180);
}