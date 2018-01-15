/**
 * tabs 切换组件
 * created by flandre on 2018-01-15
 */

class Tabs {
	constructor(el=null) {
		this.el = el || document.querySelector('.tabs')
		this.nav = this.el.querySelector('ol[data-role="tabs-nav"]')
		this.panes = this.el.querySelector('ol[data-role="tabs-panes"]')
		this.navItem = this.nav.querySelectorAll('li')
		this.i = this.nav.querySelector('i')
		this.leftArr = []
		this.init().clickTabs()
	}
	init() {
		this.panes.children[0].style.opacity = 1
		let iWidth = this.el.clientWidth/this.navItem.length
		this.i.style.width = iWidth + 'px'
		for (let i=0; i<this.navItem.length; i++) {
			let ileft = i * iWidth
			this.leftArr.push(ileft)
		}
		return this
	}
	clickTabs() {
		for (let i=0; i<this.navItem.length; i++) {
			this.navItem[i].addEventListener('click', e => {
				this.showPanes(i, this.navItem.length)
				this.i.style.left = this.leftArr[i] + 'px'
			})
		}
	}
	showPanes(index, total) {
		let panesItem = this.panes.querySelectorAll('li')
		for (let i=0; i<total; i++) {
			panesItem[i].style.opacity = 0
			panesItem[index].style.opacity = 1
		}
	}
}