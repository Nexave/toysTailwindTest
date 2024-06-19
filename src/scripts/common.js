
import { Fancybox } from "@fancyapps/ui";

import Swiper from 'swiper/bundle';
import NiceSelect from "nice-select2";
window.initHeaderSlider = function (slide) {
    let headerSlider = document.querySelector('.header-slider')
    if (headerSlider) {
        let slider = new Swiper(headerSlider, {
            slidesPerView: 12,
            slidesPerGroup: 12,
            loop: true,
            spaceBetween: 20,
            centeredSlides: false,
            allowTouchMove: false,
            breakpoints: {
                // when window width is >= 320px
                1101: {
                    slidesPerView: 7,
                    slidesPerGroup: 7,
                    spaceBetween: 10,
                },
                // when window width is >= 480px
                1280: {
                    slidesPerView: 9,
                    slidesPerGroup: 9,
                    spaceBetween: 15,
                    initialSlide: 5,
                },
                // when window width is >= 640px
                1440: {
                    slidesPerView: 12,
                    slidesPerGroup: 12,
                    spaceBetween: 20,
                    initialSlide: 5,
                }
            },
            navigation: {
                nextEl: ".header-slider-wrapper .button-next-slide",
                prevEl: ".header-slider-wrapper .button-prev-slide",
            },
            pagination: {
                el: ".header-slider-wrapper .pagination",
            }
        })
        setTimeout(function () {
            slider.slideToLoop(slide);
        }, 175);
    }
}



function initPopularNewsSlider() {
    let popularNewsSlider = document.querySelector('.popular-news-slider')
    if (popularNewsSlider) {
        let slider = new Swiper(popularNewsSlider, {
            slidesPerView: 4,
            loop: true,
            spaceBetween: 20,
            speed: 1800,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                // when window width is >= 480px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                // when window width is >= 640px
                1101: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            },
            navigation: {
                nextEl: ".popular-news-slider-wrapper .button-next-slide",
                prevEl: ".popular-news-slider-wrapper .button-prev-slide",
            }
        })
    }
}

initPopularNewsSlider()

function initBrandsSlider() {
    let brandsSlider = document.querySelector('.brands-slider')
    if (brandsSlider) {
        let slider = new Swiper(brandsSlider, {
            slidesPerView: 9,
            loop: true,
            spaceBetween: 54,
            speed: 1800,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                // when window width is >= 480px
                768: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
                1100: {
                    slidesPerView: 8,
                    spaceBetween: 30,
                },
                // when window width is >= 640px
                1280: {
                    slidesPerView: 9,
                    spaceBetween: 54,
                }
            },
            navigation: {
                nextEl: ".brands-slider-wrapper .button-next-slide",
                prevEl: ".brands-slider-wrapper .button-prev-slide",
            }
        })
    }
}

initBrandsSlider()

function showMoreCards() {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.card-list-block .more-items')) {
            let listBlock = e.target.closest('.card-list-block')
            let cardList = listBlock.querySelector('.card-list')
            let buttonWrapper = e.target.closest('.button-wrapper ')
            buttonWrapper.classList.add('hidden')
            cardList.classList.add('active')
        }

    })
}

showMoreCards()

function initPriceSlider(parent) {

    const rangeInput = parent.querySelectorAll(".range-input input"),
        priceInput = parent.querySelectorAll(".price-input input"),
        range = parent.querySelector(".slider .progress");
    let priceGap = 100;

    priceInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInput[0].value),
                maxPrice = parseInt(priceInput[1].value);

            if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
                if (e.target.className === "input-min") {
                    rangeInput[0].value = minPrice;
                    range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                } else {
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);

            if (maxVal - minVal < priceGap) {
                if (e.target.className === "range-min") {
                    rangeInput[0].value = maxVal - priceGap;
                } else {
                    rangeInput[1].value = minVal + priceGap;
                }
            } else {
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });
}

function initPrice() {
    let pricesItems = document.querySelectorAll('.price-range')
    if (pricesItems.length) {
        pricesItems.forEach(item => {
            initPriceSlider(item)
        })
    }
}

initPrice()

function initYearSlider() {
    let input = document.querySelector('.main-top-choose .year-slider')
    if (input) {
        let label = document.querySelector('.main-top-choose .yearSliderValue')
        label.textContent = input.value
        document.addEventListener('input', function (e) {
            if (e.target.closest('.year-slider')) {

                label.textContent = input.value
            }
        })
    }

}

initYearSlider()


function initTopSlider() {
    let topSlider = document.querySelector('.main-top-slider')
    if (topSlider) {
        let slider = new Swiper(topSlider, {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 10,
            speed: 1800,

            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".main-top-slider-wrapper .button-next-slide",
                prevEl: ".main-top-slider-wrapper .button-prev-slide",
            },
            pagination: {
                el: ".main-top-slider-wrapper .pagination",
                clickable: true,
            }

        })
    }
}

initTopSlider()

function initSelect() {
    let selectList = document.querySelectorAll('.custom-select')
    if (selectList.length) {
        selectList.forEach(item => {
            NiceSelect.bind(item);
        })
    }
}

initSelect()

function showHeaderMenuCategory() {
    document.addEventListener('mousemove', function (e) {
        if (e.target.closest('.header-slider .item')) {
            let target = e.target.closest('.header-slider .item')
            let targetId = target.getAttribute('data-item')
            let headerSubmenu = document.querySelector('.header-submenu-container')
            let submenuItem = headerSubmenu.querySelector('[data-menu="' + targetId + '"]')
            let activeSubmenuItem = headerSubmenu.querySelector('.header-submenu.open')
            if(!target.classList.contains('active')){
                let activeTab = document.querySelector('.header-slider .item.active')
                if(activeTab){
                    activeTab.classList.remove('active')
                }
                target.classList.add('active')

            }
            if (submenuItem && !submenuItem.classList.contains('open') && activeSubmenuItem) {
                activeSubmenuItem.classList.remove('open')

            }
            if(submenuItem){
                submenuItem.classList.add('open')
            }

        }
        if (document.querySelector(".header-submenu.open") && !e.target.closest('.header-submenu') && !e.target.closest('.header-slider .item')) {
            let activeTab = document.querySelector('.header-slider .item.active')
            if(activeTab){
                activeTab.classList.remove('active')
            }
            let headerSubmenu = document.querySelector(".header-submenu.open")
            headerSubmenu.classList.remove('open')
        }
    })
}

showHeaderMenuCategory()

function initChoosePopup() {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.mobile-choose-button')) {
            let popup = document.querySelector('.main-top-choose-popup')
            let body = document.querySelector('body')
            popup.classList.add('open')
            body.classList.add('no-scroll')
        }
        if (e.target.closest('.main-top-choose-popup .close-button')) {
            let popup = document.querySelector('.main-top-choose-popup')
            let body = document.querySelector('body')
            popup.classList.remove('open')
            body.classList.remove('no-scroll')
        }
        if (e.target.closest('.main-top-choose-popup .item-title')) {
            e.target.closest('.item').classList.toggle('close')
        }
    })
    window.addEventListener('resize', function () {
        if (window.innerWidth > 767 && document.querySelector('.main-top-choose-popup.open')) {
            let popup = document.querySelector('.main-top-choose-popup.open')
            let body = document.querySelector('body')
            popup.classList.remove('open')
            body.classList.remove('no-scroll')
        }
    })
}

initChoosePopup()

function initCatalogMenu() {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.tablet-catalog-button')) {
            let catalogMenu = document.querySelector('.header-catalog-menu')
            let body = document.querySelector('body')
            catalogMenu.classList.add('open')
            body.classList.add('no-scroll')
        }
        if (e.target.closest('.header-catalog-menu-item')) {
            let parent = e.target.closest('.header-catalog-menu')
            let menu = e.target.closest('.header-catalog-menu-item')
            let itemMenu = menu.querySelector('.item-menu')
            parent.classList.add('overflow-hidden')
            itemMenu.classList.add('open')
        }
        if (e.target.closest('.header-catalog-menu .close-button')) {
            let body = document.querySelector('body')
            let menu = document.querySelector('.header-catalog-menu ')
            let itemMenuActive = document.querySelector('.header-catalog-menu .item-menu.open')
            if (itemMenuActive) {
                itemMenuActive.classList.remove('open')
                menu.classList.remove('overflow-hidden')
            }
            body.classList.remove('no-scroll')
            menu.classList.remove('open')
        }
        if (e.target.closest('.header-catalog-menu .button-back')) {
            let parent = e.target.closest('.header-catalog-menu ')
            let itemMenu = e.target.closest('.item-menu')
            parent.classList.remove('overflow-hidden')
            itemMenu.classList.remove('open')

        }
    })
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1279 && document.querySelector('.header-catalog-menu.open')) {
            let menu = document.querySelector('.header-catalog-menu.open')
            let body = document.querySelector('body')
            menu.classList.remove('open')
            body.classList.remove('no-scroll')
            let itemMenuActive = document.querySelector('.header-catalog-menu .item-menu.open')
            if (itemMenuActive) {
                itemMenuActive.classList.remove('open')
                menu.classList.remove('overflow-hidden')
            }
        }
    })

}

initCatalogMenu()

function initSearch() {
    let searchInput = document.querySelector('.header-middle .header-search-input')
    if (searchInput) {
        // searchInput.addEventListener('input', function (e) {
        //     let headerSearchWrapper = e.target.closest('.header-search-wrapper')
        //     if (searchInput.value.length > 0) {
        //         headerSearchWrapper.classList.add('active')
        //     }
        //     if (searchInput.value.length < 1) {
        //         headerSearchWrapper.classList.remove('active')
        //     }
        //
        // })
        document.addEventListener('click', function (e) {
            if (e.target.closest('.header-search-wrapper .overlay')) {
                let parent = e.target.closest('.header-search-wrapper')
                parent.classList.remove('active')
            }
            if (e.target.closest('.header-search-wrapper .button-delete')) {
                let parent = e.target.closest('.header-search-wrapper ')
                parent.classList.remove('active')
                let input = parent.querySelector('.header-search-input')
                input.value = ""
            }
        })
    }
}

initSearch()

function initmainMenu() {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.header .menu-button')) {
            let userMenu = document.querySelector(".header .mobile-user-menu")
            let body = document.querySelector('body')
            body.classList.add('no-scroll')
            userMenu.classList.add('open')
        }
        if (e.target.closest('.mobile-user-menu .close-button') || e.target.classList.contains('mobile-user-menu')) {
            let userMenu = document.querySelector(".header .mobile-user-menu")
            let body = document.querySelector('body')
            body.classList.remove('no-scroll')
            userMenu.classList.remove('open')
        }

    })
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1280 && document.querySelector('.mobile-user-menu.open')) {
            let userMenu = document.querySelector(".header .mobile-user-menu")
            let body = document.querySelector('body')
            body.classList.remove('no-scroll')
            userMenu.classList.remove('open')
        }
    })
}

initmainMenu()

function initProductTopSlider() {
    let productSliderPreview = document.querySelector('.product-slider-preview')
    if (productSliderPreview) {
        let productSliderMain = document.querySelector('.product-slider-main')
        let swiper = new Swiper(productSliderPreview, {
            spaceBetween: 32,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            watchOverflow:true,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    direction: "horizontal",
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 26,
                    direction: "vertical",
                },
            },
        });
        let swiper2 = new Swiper(productSliderMain, {
            spaceBetween: 10,
            loop: true,
            watchOverflow:true,
            navigation: {
                nextEl: ".product-slider-main-wrapper .next-slide",
                prevEl: ".product-slider-main-wrapper .prev-slide",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }

}

initProductTopSlider()
// Fancybox.bind('.fancybox')

function initProductTab() {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.product-information-main .tab-item')) {
            let target = e.target.closest('.product-information-main .tab-item')
            let targetId = target.getAttribute('data-item')
            let tabContent = document.querySelector('[data-tab="' + targetId + '"]')
            let activeTabContent = document.querySelector('.product-information-main .tab-content.active')
            let activeButton = document.querySelector('.product-information-main .tab-item.active')
            if (!tabContent.classList.contains('active') && activeTabContent) {
                activeTabContent.classList.remove('active')
                activeButton.classList.remove('active')
                target.classList.add('active')
            }
            tabContent.classList.add('active')
        }
    })
}

initProductTab()

function initAccordion() {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.accordion-title')) {
            let parent = e.target.closest('.accordion-item')
            parent.classList.toggle('close')
        }
    })
}

initAccordion()

function initRate() {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.rate .rating-item')) {
            let item = e.target.closest('.rate .rating-item')
            let parent = e.target.closest('.rate')
            let input = parent.querySelector('.rating-input')
            let selectedNumber = item.getAttribute('data-number')
            input.value = selectedNumber
            item.classList.add('is-active')
            let ratingList = parent.querySelectorAll('.rating-item')
            ratingList.forEach((item, idx) => {
                    if (idx < selectedNumber) {
                        item.classList.add('is-active')
                    }
                    else{
                        item.classList.remove('is-active')
                    }
                }
            )
        }

    })
}

initRate()

function initFileUpload() {
    let uploadButton = document.querySelector(".upload-button");
    if(
        uploadButton
    ){
        let chosenImage = document.getElementById("chosen-image");
        let fileName = document.getElementById("file-name");
        let label = document.querySelector('.custom-file-upload label')
        let container = document.querySelector(".custom-file-upload");
        let error = document.getElementById("error");
        let imageDisplay = document.getElementById("image-display");
        const fileHandler = (file, name, type) => {
            if (type.split("/")[0] !== "image") {
                //File Type Error
                error.innerText = "Please upload an image file";
                return false;
            }
            error.innerText = "";
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                //image and file name
                let imageContainer = document.createElement("figure");
                let img = document.createElement("img");
                img.src = reader.result;
                imageContainer.appendChild(img);
                label.innerHTML= ""
                label.appendChild(imageContainer);
            };
        };
//Upload Button
        uploadButton.addEventListener("change", () => {
            imageDisplay.innerHTML = "";
            Array.from(uploadButton.files).forEach((file) => {
                fileHandler(file, file.name, file.type);
            });
        });
        container.addEventListener(
            "dragenter",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
                container.classList.add("active");
            },
            false
        );
        container.addEventListener(
            "dragleave",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
                container.classList.remove("active");
            },
            false
        );
        container.addEventListener(
            "dragover",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
                container.classList.add("active");
            },
            false
        );
        container.addEventListener(
            "drop",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
                container.classList.remove("active");
                let draggedData = e.dataTransfer;
                let files = draggedData.files;
                imageDisplay.innerHTML = "";
                Array.from(files).forEach((file) => {
                    fileHandler(file, file.name, file.type);
                });
            },
            false
        );
    }

}

initFileUpload()

function toggleReviewPopup() {
        document.addEventListener('click', function (e) {
            if(e.target.closest('.add-review')){
                let popup = document.querySelector('.popup-review')
                let body = document.querySelector('body')
                popup.classList.add('open')
                body.classList.add('no-scroll')
            }
            if(e.target.closest('.popup-review .close-button') || e.target.classList.contains('.popup-review')){
                let popup = document.querySelector('.popup-review')
                let body = document.querySelector('body')
                popup.classList.remove('open')
                body.classList.remove('no-scroll')
            }
        })
}
toggleReviewPopup()

function toggleFilterPopup() {
    document.addEventListener('click', function (e) {
        if(e.target.closest('.catalog .filter-button')){
            let filterBlock = document.querySelector('.catalog .filter-block')
            let body = document.querySelector('body')
            filterBlock.classList.add('active')
        }
        if(e.target.closest('.catalog .filter-block .close-button') || e.target.classList.contains('filter-block')){
            let filterBlock = document.querySelector('.catalog .filter-block')
            let body = document.querySelector('body')
            filterBlock.classList.remove('active')
            body.classList.remove('no-scroll')
        }
    })
    window.addEventListener('resize', function () {
        if( document.querySelector('.catalog .filter-block.active') && window.innerWidth>1100){
            let filterBlock = document.querySelector('.catalog .filter-block.active')
            let body = document.querySelector('body')
            filterBlock.classList.remove('active')
            body.classList.remove('no-scroll')
        }
    })
}
toggleFilterPopup()

function toggleSortList() {
    document.addEventListener('click', function (e) {
        if(e.target.closest('.mobile-sorting .current-sorting')){
            let block = e.target.closest('.mobile-sorting ')
            block.classList.toggle('active')
        }
        if(document.querySelector('.mobile-sorting.active') && !e.target.closest('.mobile-sorting ') ){
            let block = document.querySelector('.mobile-sorting.active ')
            block.classList.remove('active')
        }

    })
}
toggleSortList()

// function showFilterApply() {

//     document.addEventListener('change', function (e) {
//         if(e.target.closest('.filter-block .custom-checkbox') && window.innerWidth > 1100){
//             let tooltip = document.querySelector('.tooltip')
//             if(tooltip){
//                 let item = e.target.closest('.filter-block .custom-checkbox-item')
//                 let checkbox = item.querySelector('.custom-checkbox input ')
//                 const checkboxRect = item.getBoundingClientRect();
//                 const tooltipHeight = tooltip.offsetHeight;

//                 const tooltipTop = checkboxRect.top + checkboxRect.height / 2 ;
//                 const tooltipLeft = checkboxRect.right;

//                 tooltip.style.top = tooltipTop + 'px';
//                 tooltip.style.left = tooltipLeft + 'px';

//                 tooltip.classList.add('active') ;

//             }

//         }
//     })
//     document.addEventListener('scroll', function () {
//         let tooltip = document.querySelector('.tooltip.active')
//         if(tooltip && window.innerWidth > 1100){
//             tooltip.classList.remove('active')

//         }
//     })
//     document.addEventListener('resize', function () {
//         let tooltip = document.querySelector('.tooltip.active')
//         if(tooltip && window.innerWidth > 1100){
//             tooltip.classList.remove('active')
//         }
//     })
// }
// showFilterApply()

function initCompareSlider() {
    let compareSlider = document.querySelector('.compare-slider')
    if(compareSlider){
        let slider = new Swiper(compareSlider,{
            slidesPerView: 4,
            navigation: {
                nextEl: ".compare-slider-wrapper .button-next-slide",
                prevEl: ".compare-slider-wrapper  .button-prev-slide",
            },
        })
    }
}
initCompareSlider()
function setHeight(el, val) {
    if (typeof val === "function") val = val();
    if (typeof val === "string") el.style.height = val;
    else el.style.height = val + "px";
}

function equalHeights() {
   let tallest = 0
    let rowList = document.querySelectorAll('.equal-row')
    if(rowList.length){
        rowList.forEach(item=>{
            let dataId = item.getAttribute('data-row')
            let rowItemList = document.querySelectorAll('[data-row="' + dataId + '"]')
            rowItemList.forEach(item=>{
                let innerElement = item.querySelector(' .inner')
                let elementHeight = innerElement.offsetHeight
                tallest = (elementHeight>tallest)  ?  elementHeight : tallest

            })
            rowItemList.forEach(item=>{
                item.style.height= tallest + "px"
            })
            tallest = 0
        })
    }


}
window.addEventListener("load", function(){
    equalHeights('.equal-row')
})

window.addEventListener("resize", function(){
    setTimeout(equalHeights('.equal-row'))

})

function toggleMainPopup() {
    document.addEventListener('click', function (e) {
        if(e.target.closest('.main-popup .close-button') ||e.target.classList.contains('main-popup')){

            let popup = e.target.closest('.popup')
            let body = document.querySelector('body')
            popup.classList.remove('open')
            body.classList.remove('no-scroll')
        }
        if(e.target.closest('.button-popup')){
            e.preventDefault()
            let button = e.target.closest('.button-popup')
            let dataId = button.getAttribute('data-id')
            let targetPopup = document.querySelector('[data-popup="' + dataId + '"]')
            let body = document.querySelector('body')
            targetPopup.classList.add('open')
            body.classList.add('no-scroll')
        }
    })

}
toggleMainPopup()

function togglePassword() {
    document.addEventListener('click', function (e) {
        if(e.target.closest('.toggle-password')){
            let parent = e.target.closest('.input-wrapper')
            let button = e.target.closest('.toggle-password')
            button.classList.toggle('active')
            let input = parent.querySelector('.input')
            let inputType = input.getAttribute('type')
            inputType === "password" ? input.setAttribute('type', "text") : input.setAttribute('type', "password")
        }
    })
}
togglePassword()
function initFaqAccordion() {
    document.addEventListener('click', function (e) {
        if(e.target.closest('.faq-accordion-item-title')){
            let accordionButton = e.target.closest('.faq-accordion-item-title')
            let activeButton = document.querySelector('.faq-accordion-item-title.active')
            if(!accordionButton.classList.contains('active') && activeButton ){
                activeButton.classList.remove('active')
            }
            accordionButton.classList.toggle('active')
        }
    })
}
initFaqAccordion()

function initPromotionTimer(){
    let countDownTimeItem = document.querySelector('.countdown-time')
    if(countDownTimeItem){
        let dataTime = countDownTimeItem.getAttribute('data-time')
        let countDownDate = new Date(dataTime).getTime();
        let daysItem = countDownTimeItem.querySelector('.days-value')
        let hoursItem = countDownTimeItem.querySelector('.hours-value')
        let minutesItem = countDownTimeItem.querySelector('.minutes-value')
        let secondsItem = countDownTimeItem.querySelector('.seconds-value')
// Update the count down every 1 second
        let x = setInterval(function() {
            // Get todays date and time
            let now = new Date().getTime();

            // Find the distance between now an the count down date
            let distance = countDownDate - now;
            if (distance < 0) {
                clearInterval(x);
                daysItem.textContent= '00'
                hoursItem.textContent = '00'
                minutesItem.textContent = '00'
                secondsItem.textContent = '00'
                return false
            }
            // Time calculations for days, hours, minutes and seconds
            let daysValue = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hoursValue = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let secondsValue = Math.floor((distance % (1000 * 60)) / 1000);
            // Display the result in the element with id="demo"

            daysItem.textContent = daysValue
            hoursItem.textContent = hoursValue
            minutesItem.textCpotent = minutesValue
            secondsItem.textContent = secondsValue

        }, 1000);
    }

}
initPromotionTimer()

function toggleWishList() {
    document.addEventListener('click', function (e) {
        if(e.target.closest('.item-title.hide-info')){
            let button = e.target.closest('.item-title.hide-info')
            let parent = e.target.closest('.cabinet-wishlist-item')
            let itemList = parent.querySelector('.cabinet-wishlist-item-content')
            button.classList.toggle('active')
            itemList.classList.toggle('hide')
        }
    })
}
toggleWishList()

function wishlListChooseAll() {
    document.addEventListener('click', function (e) {
        if(e.target.closest('.action-item.choose-all')){
            e.preventDefault()
            let parent = e.target.closest('.cabinet-wishlist-item')
            let itemsCheckboxList = parent.querySelectorAll('.additional-list .custom-checkbox input')
            itemsCheckboxList.forEach(item=>{
                item.checked = true
            })
        }
    })
}
wishlListChooseAll()

function initCopy() {

    let copyList = document.querySelectorAll(".button-copy")
    if(copyList.length){
        copyList.forEach( item=>{
            let clipboard = new ClipboardJS(item);
            clipboard.on('success', function(e) {

                console.log("success")
                let tooltipElem;

                let tooltipHtml = e.trigger.dataset.tooltip;

                if (!tooltipHtml) return;

                tooltipElem = document.createElement('div');
                tooltipElem.className = 'tooltip';
                tooltipElem.innerHTML = tooltipHtml;
                document.body.append(tooltipElem);

                let coords = e.trigger.getBoundingClientRect();

                let left = coords.left + ( e.trigger.offsetWidth - tooltipElem.offsetWidth) / 2;

                if (left < 0) {
                    left = 0;
                }

                let top = coords.top - tooltipElem.offsetHeight - 5;

                if (top < 0) {
                    top = coords.top + target.offsetHeight + 5;
                }

                tooltipElem.style.left = left + 'px';
                tooltipElem.style.top = top + 'px';

                setTimeout(function(){
                    tooltipElem.remove();
                    tooltipElem = null;
                }, 3000);

                e.clearSelection();
            });
        })


    }


}
initCopy()

function toggleFormEdit() {
    document.addEventListener('click', function (e) {
        if(e.target.closest('.cabinet-data-form .button-edit')){
            let form = e.target.closest('.cabinet-data-form')
            let inputList = form.querySelectorAll('.input')
            let password = form.querySelector('.password')
            if(password){
                password.classList.add('active')
            }
            inputList.forEach(item=>{
                item.removeAttribute('readonly')
            })
            let block = e.target.closest('.buttons-block')
            block.classList.add('active')
        }
        if(e.target.closest('.cabinet-data-form .button-cancel')){
            let form = e.target.closest('.cabinet-data-form')
            let inputList = form.querySelectorAll('.input')
            let password = form.querySelector('.password')
            if(password){
                password.classList.remove('active')
            }
            inputList.forEach(item=>{
                item.setAttribute('readonly','true')
                item.value = ''
            })
            let block = e.target.closest('.buttons-block')
            block.classList.remove('active')
        }
    })
}
toggleFormEdit()

function toggleOrder() {
    document.addEventListener('click', function (e) {
        if(e.target.closest('.cabinet-order-item .opener')){
            let parent = e.target.closest('.cabinet-order-item')
            parent.classList.toggle('open')
        }
    })

}
toggleOrder()
Fancybox.bind(".fancybox", {
    // Your custom options
});
