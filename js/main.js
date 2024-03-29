const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.addEventListener('click', () => {
	const isOpen = nav.classList.toggle('open')
	if (isOpen) {
		navBtnImg.src = './img/icons/nav-close.svg'
	} else {
		navBtnImg.src = './img/icons/nav-open.svg'
	}
})

AOS.init({
	once: true,
	disable: 'phone'
})
