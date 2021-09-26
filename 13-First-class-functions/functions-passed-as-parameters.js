// Functions can be passed as parameters
function apply(a, b, f) {
    return f(a, b);
}

var x = apply(2, 3, myfunc); // 6

var myfunc = function(a, x) {
    return a * b;
};