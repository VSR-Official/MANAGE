function MenuBtn_Change(x) {
    x.classList.toggle("TNB1MB_Change");
}

// const MenuBtn_Nav = document.getElementById('TNB1_MenuButton');
// const Overlay_Nav = document.getElementById('TNB1_NavOverlay');

// MenuBtn_Nav.addEventListener('click', function() {
//     Overlay_Nav.style.display = 'block';
//     document.body.classList.add('no-scroll');
// });

// Overlay_Nav.addEventListener('click', function() {
//     Overlay_Nav.style.display = 'none';
//     document.body.classList.remove('no-scroll');
// });


const MenuBtn_Nav = document.getElementById('TNB1_MenuButton');
const Overlay_Nav = document.getElementById('TNB1_NavOverlay');

MenuBtn_Nav.addEventListener('click', function() {
    if (Overlay_Nav.style.display === 'block') {
        Overlay_Nav.style.display = 'none';
        document.body.classList.remove('no-scroll');
    } else {
        Overlay_Nav.style.display = 'block';
        document.body.classList.add('no-scroll');
    }
});