const main = document.getElementsByClassName('main');
let cout = 0;
main[0].addEventListener('click', function () {
    cout++;
    if(cout > 1){
        cout = 0;
        main[0].style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
}, false);