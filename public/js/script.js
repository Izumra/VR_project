//price-tabs
const tabBtns = document.querySelectorAll('.prices-tabs__btn')
const tabPanes = document.querySelectorAll('.prices-tabs__pane')

tabBtns.forEach((btn, i) => {
	btn.addEventListener('mouseover', function(){
		for (const btn of tabBtns){
			btn.classList.remove('prices-tabs__btn_active')
		}
		for (const pane of tabPanes){
			pane.classList.remove('prices-tabs__pane_show')
		}

		btn.classList.add('prices-tabs__btn_active')
		tabPanes[i].classList.add('prices-tabs__pane_show')
	})
})

//modal window
const allPopup = document.querySelectorAll('.popup')
allPopup.forEach(popup => {
	popup.addEventListener('click', function(evt){
		if (!evt.target.closest('.popup__content') || evt.target.classList.contains('popup__close')){
			document.body.style.overflow = 'visible'
			popup.classList.remove('popup_active')
		}
	})

	const popupShowBtns = document.querySelectorAll(`[data-popup-id="${popup.id}"]`)
	for (const btn of popupShowBtns){
		btn.addEventListener('click', function(){
			document.body.style.overflow = 'hidden'
			popup.classList.add('popup_active')
		})
	}
})

