// type keyInput="up" | "down" |"left" |"right"
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
function doSomething(keypress) {
}
doSomething(direction.down);
