function Vector3(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Vector3.prototype.magnitude = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
}

Vector3.prototype.dot = function(v) {
  return this.x * v.x + this.y * v.y + this.z * v.z;
}

Vector3.prototype.cross = function(v) {
  return new Vector3(this.y * v.z - this.z * v.y, 
                      this.z * v.x - this.x * v.z, 
                      this.x * v.y - this.y * v.x);
}

Vector3.prototype.normalize = function(v) {
  let len = this.magnitude();

  if (len > 0) {
    return new Vector3(this.x/len, this.y/len, this.z/len);
  }
  return new Vector3(0, 0, 0);
}

Vector3.prototype.add = function(v) {
  return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
}

Vector3.prototype.subtract = function(v) {
  return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
}

Vector3.prototype.scale = function(c) {
  return new Vector3(this.x*c, this.y*c, this.z*c);
}