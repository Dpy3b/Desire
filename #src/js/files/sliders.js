//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }
//ниже собсна название переменной и класс, ключевые пишем, и всё заработает!!!
let mainSlider = new Swiper('.main-slider__body', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
    pagination: {
        el: ".body-slider__pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.about__more .more__item_next',
		prevEl: '.about__more .more__item_prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});
slider_asdasd = new Swiper(".mini-slider__body",{
    observer: !0,
    observeParents: !0,
    slidesPerView: 10,
    autoHeight: !0,
    speed: 1000,
    //spaceBetween: 15,
    loop: !0,
    lazy: !0,
    //группирует кол-во картинок для кол-ва пагинационных буллетов
    slidesPerGroup: 10,
    autoplay: {
        delay: 4000,
    },
    //spaceBetween: 0,
    pagination: {
        el: ".mini-slider__pagination",
        clickable: !0
    },
    breakpoints: {
        310: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        425: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            pagination: {
                type: 'fraction'
            }
        },
        992: {
            //spaceBetween: 0,
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1268: {
            //spaceBetween: 15,
            slidesPerView: 7,
            slidesPerGroup: 7,
        },
        1600: {
            slidesPerView: 8,
            slidesPerGroup: 8
        },
        1800: {
            slidesPerView: 9,
            slidesPerGroup: 9
        },
        1880: {
            //slidesPerView: 10
        }
    },
    on: {
        lazyImageReady: function() {
            ibg()
        }
    }

});
