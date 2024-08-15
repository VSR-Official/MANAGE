// Properties Of Animated Navigation Menu Button
function MenuBtn_Change(x) {
    x.classList.toggle("TNB1MB_Change");
}

// Properties Of Side Navigation Overlay
const MenuBtn_Nav = document.getElementById('TNB1_MenuButton');
const Overlay_Nav = document.getElementById('TNB1_NavOverlay');

MenuBtn_Nav.addEventListener('click', function() {
    if (Overlay_Nav.style.display === 'flex') {
        Overlay_Nav.style.display = 'none';
        document.body.classList.remove('no-scroll');
    } else {
        Overlay_Nav.style.display = 'flex';
        document.body.classList.add('no-scroll');
    }
});

function TNB1O_HeaderToggle(element) {
    const content = element.nextElementSibling;
    const maxHeight = content.style.maxHeight;

    document.querySelectorAll('.TNB1O_ListContent').forEach(item => {
        item.style.maxHeight = null;
        item.previousElementSibling.classList.remove('active');
    });
    if(!maxHeight) {
        content.style.maxHeight = content.scrollHeight + "px";
        element.classList.add('active');
    }
}