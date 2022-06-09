let offer = document.getElementById('offer');
window.addEventListener('resize', ()=>{
    if(document.body.clientWidth <= 640){
        offer.innerHTML = 'Зажги пламя в своем сердце';
    }
})