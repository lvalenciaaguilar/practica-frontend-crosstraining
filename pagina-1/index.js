const tabs = document.querySelectorAll('.tab-item');
const products = document.querySelectorAll('.product-item');


tabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
        removeTabSelectedStyle();
        event.target.classList.add('tab-item-selected');
        
        if(event.target.getAttribute("id") == 'best-sellers-tab'){
            removeHiddenClass();
            showBestSellers();
        }else if(event.target.getAttribute("id") == 'latest-products-tab'){
            removeHiddenClass();
        }else if(event.target.getAttribute("id") == 'top-rating-tab'){
            removeHiddenClass();
            showTopRating();
        }
        /* console.log(event.target); */
    });

});

function removeTabSelectedStyle() {
    tabs.forEach(tab => {
        tab.classList.remove('tab-item-selected');
    })
}

function showBestSellers() {
    products.forEach(product => {
        if(product.children[0].children[0].children[0].childElementCount == 0) {
            product.classList.add('hidden');
        }
    })
}

function removeHiddenClass(){
    products.forEach(product => {
        product.classList.remove('hidden');
    })
}

function showTopRating(){
    products.forEach(product => {
        let starsCounter = 0;
        let productRatingElem = product.children[1].children[0].children[0].children;
        
        for(let i=0; i < productRatingElem.length; i++){
            if(productRatingElem[i].classList.contains("star-checked")){
                starsCounter++;
            }
        }
        
        if(starsCounter < 4){
            product.classList.add('hidden');
        }
    })
}