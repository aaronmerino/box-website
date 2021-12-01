import { Vector3 } from './vector3.js';

export function Camera(origin, focal_length, view_dir) {
  this.origin = origin;
  this.focal_length = focal_length;
  this.view_dir = view_dir;
}

Camera.prototype.computePicturePlanePos = function(world_pos) {
  
}