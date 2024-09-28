let circle_area = document.getElementById('c_a');
let circle_area_result = document.getElementById('c_a_result');
const pi = 3.1416;

circle_area.addEventListener('input', function () {
    circle_area = this.value;
    let a = circle_area;
    let aa = a * pi;
    circle_area_result.value = aa;
});

// circle_area card <<End>>


let c_c = document.getElementById('c_c');
let c_c_reult = document.getElementById('c_c_result');

c_c.addEventListener('input', function () {
    c_c = this.value;
    let b = 2 * c_c * pi;
    let bb = b;
    c_c_reult.value = bb;
});
// circumference_of_the_circle <<End =>>

let squre = document.getElementById('squre');
let squre_reult = document.getElementById('squre_result');

squre.addEventListener('input', function () {
    squre = this.value;
    let c = squre * squre;
    squre_reult.value = c;

});
// squre << End >>

let hyper_x = document.getElementById('hyperbola_x');
let hyper_y = document.getElementById('hyperbola_y');
let hyper_result = document.getElementById('hyperbola_result');
let hyper_btn = document.getElementById('hyperbola_btn');





hyper_btn.addEventListener('click', function () {
    // Formula = (x*x) + (y*y)
    let par_x = hyper_x.value;
    let par_xx = par_x * par_x;

    let par_y = hyper_y.value;
    let par_yy = par_y * par_y;

    let par_xy = par_xx + par_yy;

    hyper_result.value = par_xy;

});



let force_a = document.getElementById('force_a');
let force_m = document.getElementById('force_m');
let force_F = document.getElementById('force_f');
let force_btn = document.getElementById('force_btn');

let force_aa = force_a.value;
let force_mm = force_m.value;
let force_ff = force_F.value; 

// Foumula: F = ma;

// Formula For F>>
force_btn.addEventListener('click', function () {
    let force_aa = force_a.value;
    let force_mm = force_m.value;
    let force_am = force_aa * force_mm;
    force_F.value = force_am;

});
// End >>>>


