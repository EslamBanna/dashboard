/* global document, window */
document.getElementById('one').style.height = window.innerHeight + 'px';
document.getElementById('two').style.height = window.innerHeight + 'px';
var el = document.getElementById('cog'),
    out = document.getElementById('out'),
    boo = 0,
    two = document.getElementById('two'),
    dark = document.getElementById('dark'),
    light = document.getElementById('light'),
    def = document.getElementById('default'),
    colo = document.getElementById('colo'),
    save = document.getElementById('save'),
    ch1 = document.getElementById('ch1'),
    ch2 = document.getElementById('ch2'),
    ch3 = document.getElementById('ch3'),
    ch4 = document.getElementById('ch4'),
    ch5 = document.getElementById('ch5'),
    ch6 = document.getElementById('ch6'),
    ch7 = document.getElementById('ch7'),
    sp1 = document.getElementById('sp1'),
    sp2 = document.getElementById('sp2'),
    sp3 = document.getElementById('sp3'),
    sp4 = document.getElementById('sp4');
colo.value = 'black';
el.addEventListener('click', function () {
    'use strict';
    if (boo === 0) {
        el.style.transform = "rotate(-360deg)";
        out.style.right = '1%';
        boo = 1;
    } else if (boo === 1) {
        el.style.transform = "rotate(360deg)";
        out.style.right = '-10.2%';
        boo = 0;
    }
});
function change() {
    'use strict';
    ch1.style.backgroundColor  = colo.value;
    ch2.style.color = colo.value;
    ch3.style.color = colo.value;
    ch4.style.color = colo.value;
    ch5.style.backgroundColor = colo.value;
    ch6.style.backgroundColor = colo.value;
    ch7.style.backgroundColor = colo.value;
}
sp1.addEventListener('click', function () {
    'use strict';
    colo.value = '#0056B3';
    change();
});
sp2.addEventListener('click', function () {
    'use strict';
    colo.value = '#228B22';
    change();
});
sp3.addEventListener('click', function () {
    'use strict';
    colo.value = '#FF4500';
    change();
});
sp4.addEventListener('click', function () {
    'use strict';
    colo.value = '#2F4F4F';
    change();
});
save.addEventListener('click', function () {
    'use strict';
    change();
});
dark.addEventListener('click', function () {
    'use strict';
    two.style.backgroundColor = 'black';
    ch1.style.backgroundColor = 'black';
    ch2.style.color = 'white';
    ch3.style.color = 'white';
    ch4.style.color = 'black';
    ch5.style.backgroundColor = 'black';
    ch6.style.backgroundColor = 'black';
    ch7.style.backgroundColor = 'black';
    el.style.color = 'white';
    colo.value = '#FFFFFF';
});
light.addEventListener('click', function () {
    'use strict';
    two.style.backgroundColor = 'white';
    ch1.style.backgroundColor = 'black';
    ch2.style.color = 'black';
    ch3.style.color = 'black';
    ch4.style.color = 'black';
    ch5.style.backgroundColor = 'black';
    ch6.style.backgroundColor = 'black';
    ch7.style.backgroundColor = 'black';
    el.style.color = 'black';
    colo.value = '#000000';
});
def.addEventListener('click', function () {
    'use strict';
    two.style.backgroundColor = '#E8EAED';
    ch1.style.backgroundColor = 'black';
    ch2.style.color = 'black';
    ch3.style.color = 'black';
    ch4.style.color = 'black';
    ch5.style.backgroundColor = 'black';
    ch6.style.backgroundColor = 'black';
    ch7.style.backgroundColor = 'black';
    el.style.color = 'inherit';
    colo.value = '#000000';
});