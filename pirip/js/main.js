let menu = document.getElementById('menu');
let menu_nav = document.getElementById('menu_nav');
let logo = document.getElementById('logo');

menu.addEventListener('click', e => {
    if(menu_nav.childNodes.length < 2){
        setTimeout(e=>{
            menu_nav.innerHTML = `
            <div class="navigation_mobile">
                    <a href="index.html" class="select">Главная</a>
                    <a href="catalog.html">Каталог</a>
                    <a href="Группы">Группы</a>
                    <a href="Контакты">Контакты</a>
                </div>
                <div class="user">
                    <a href="basket.html">Корзина</a>
                    <a href="">Выход</a>
                </div>
            `
        }, 500)
    }else{
        menu_nav.innerHTML = '';
    }
    menu_nav.classList.toggle('visible');
});

document.onclick = function(e){
    if(e.target.tagName != "SECTION"){
        return;
    }
    if(menu_nav.classList[1] != undefined){
        menu_nav.classList.remove('visible');
    }
}
