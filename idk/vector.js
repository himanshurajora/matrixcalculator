var vector = {
    _x: 1,
    _y: 0,

    create: function(x,y){
        var obj = Object.create(this);
        obj.setX(x);
        obj.setY(y);
        return obj;
    },

    setX: function (value) {
        this._x = value;
    },
    setY:function (value) {
        this._y = value;

    },
    getX: function () {
        return this._x;
    },
    getY: function () {
        return this._y;
    },
    setAngle: function (angle) {
        var length = this.getLength();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    },
    setLength: function (length) {
        var angle = this.getAngle();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    },
    getAngle: function () {
        return Math.atan2(this._y, this._x);
    },
    getLength: function(){
        return Math.sqrt(this._x*this._x + this._y*this._y);
    },
    add: function(v2){
        return vector.create(this.x + v2.getX(), this.y + v2.getY());
    },
    subtract: function(v2){
        return vector.create(this.x - v2.getX(), this.y - v2.getY());
    },
    multiply: function(v2){
        return vector.create(this.x * v2.getX(), this.y * v2.getY());
    },
    devide: function(v2){
        return vector.create(this.x / v2.getX(), this.y / v2.getY());
    },
    addTo: function(v2){
        this._x += v2.getX();
        this._y += v2.getY();
    },
    subtractFrom: function(v2){
        this._x -= v2.getX();
        this._y -= v2.getY();
    },
    multiplyBy: function(v2){
        this._x *= v2.getX();
        this._y *= v2.getY();
    },
    devideBy: function(v2){
        this._x /= v2.getX();
        this._y /= v2.getY();
    }
}; 