const main = document.getElementsByClassName('main');
let cout = 0;
main[0].addEventListener('click', function () {
    cout++;
    if (cout === 10) {
        let clockz = document.createElement("p");
        clockz.id = 'clock';
        document.body.appendChild(clockz);
        setInterval('clock()', 1000);

    }
}, false);

var OK = true;
var keyPress = "";
document.addEventListener('keydown', (event) => {
    if (cout >= 10) {

        let keyName = event.key;
        keyPress = keyPress + keyName;

        let length = keyPress.length;
        if (length >= 4) {
            let clock = document.getElementById('clock');
            let clockstr = clock.textContent;
            clockstr = clockstr.replace(':', '');
            let keyPressl = keyPress.substr(-4, 4);
            if (clockstr === keyPressl) {

                while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
                OK = false;
                document.body.style.backgroundColor = 'red';
            }
        }
    }
});

function clock() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();

    hour = ('0' + hour).slice(-2);
    min = ('0' + min).slice(-2);

    let c = hour + ':' + min;

    if (hour < 10) { hour = "0" + hour; }
    if (min < 10) { min = "0" + min; }

    let clock = document.getElementById('clock');
    if (OK) {
        clock.innerHTML = c.toLocaleString();
    }
}