import mapExists from '../../../util/mapExists';

export default function zoomOut(map) {
  if (!mapExists(map)) return false;
  let currentZoom;
  currentZoom = Math.round(map.getZoom());
  map.setZoom(currentZoom - 1);
}
