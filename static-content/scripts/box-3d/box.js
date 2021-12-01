import { Vector3 } from './vector3.js';

export function Box(origin, size) {
  this.origin = origin;
  this.size = size;

  this.bottom_plane_tl = origin + (new Vector3(size/2, size/2, -size/2));
  this.bottom_plane_tr = origin + (new Vector3(size/2, -size/2, -size/2));
  this.bottom_plane_bl = origin + (new Vector3(-size/2, size/2, -size/2));
  this.bottom_plane_br = origin + (new Vector3(-size/2, -size/2, -size/2));

  this.top_plane_tl = origin + (new Vector3(size/2, size/2, size/2));
  this.top_plane_tr = origin + (new Vector3(size/2, -size/2, size/2));
  this.top_plane_bl = origin + (new Vector3(-size/2, size/2, size/2));
  this.top_plane_br = origin + (new Vector3(-size/2, -size/2, size/2));
}

Box.prototype.transpose = function(v) {

}

Box.prototype.rotate = function(deg) {
  // transpose to (0,0,0) first then rotate then tranpose it back to original position.
}