/* 
 * switch 开关控件
 * created by flandre on 2018-01-30
 */
function Switch(name, init) {
	var dom = document.querySelector('label[name="'+name+'"]');
	var status = init ? init : dom.attributes['data-checked'].value;
	var checkbox = dom.querySelector('input');
	this.status = status ? true : false;
	if (this.status) {checkbox.checked = true;}
	dom.onclick = function() {
		checkbox.checked = !checkbox.checked;
		this.status = checkbox.checked
		return this.status;
	}.bind(this);
}