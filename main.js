//  Q no 58
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
console.log(averageScore(44, 87, 98, 55, 77, 55, 44));
//  Q no 59
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addFive = makeAdder(5);
console.log(addFive(15));
//  Q no 60
var userProfile = (function () {
    var name = "Safdar Ali";
    var age = 20;
    return { displayInfo: function () {
            console.log("Name:".concat(name, ", Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
