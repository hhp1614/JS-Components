function Paging(options) {
    this.listEl         = document.querySelector(options.listEl);   // 获取列表容器
    this.pageEl         = document.querySelector(options.pageEl);   // 获取页码容器
    this.limit          = options.limit || 10;                       // 获取每页显示个数
    this.class          = options.class;                            // 获取自定义类名
    this.activeClass    = options.activeClass;                      // 获取自定义选中类名
    this.listChild      = this.listEl.children;                     // list对象
    this.listChildCount = this.listChild.length;                    // list个数
    this.pageCount      = Math.ceil(this.listChildCount/this.limit);// page总页数
    this.pageCurrent    = 1;                                        // 当前页数初始值
    this.initPage();    // 初始化
    this.showPage();    // 显示逻辑
    this.pageEvent();   // 绑定事件
};
// 初始化page HTML结构
Paging.prototype.initPage = function () {
    var pageHTML = '';
    var style    = '';
    for (let i=1; i<=this.pageCount; i++) {
        pageHTML += `<a href="javascript:;" class="${this.class}" data-click="index">${i}</a>`
    }
    var html = `<a href="javascript:;" class="${this.class}" data-click="first">首页</a>
                <a href="javascript:;" class="${this.class}" data-click="prev">上一页</a>
                ${pageHTML}
                <a href="javascript:;" class="${this.class}" data-click="next">下一页</a>
                <a href="javascript:;" class="${this.class}" data-click="last">尾页</a>
                <span style="font-size: 12px;color: #999;">共 ${this.pageCount} 页</span>`;
    this.pageEl.innerHTML = html;
    if (this.pageCount > 5) {
        for (let i=0; i<this.pageEl.children.length; i++) {
            this.pageEl.children[i].style.display = 'none';
            if (i < 7 || i >= this.pageEl.children.length-3)
                this.pageEl.children[i].style.display = 'inline-block';
        }
    }
};
// 显示对应页数及相应样式
Paging.prototype.showPage = function () {
    for (let i=0; i<this.listChild.length; i++) {
        this.listChild[i].style.display = 'none';
        if (this.limit*(this.pageCurrent-1)<=i && this.limit*this.pageCurrent-1>=i)
            this.listChild[i].style.display = 'block';
    };
    for (let i=0; i<this.pageEl.children.length; i++) {
        this.pageEl.children[i].classList.remove(this.activeClass);
        if (i == this.pageCurrent+1) this.pageEl.children[i].classList.add(this.activeClass);
    };
    if (this.pageCount > 5 && this.pageCurrent >= 3 && this.pageCurrent <= this.pageCount-2) {
        for (let i=2; i<this.pageEl.children.length-3; i++) {
            this.pageEl.children[i].style.display = 'inline-block';
            if (i < this.pageCurrent-1 || i > this.pageCurrent+3)
                this.pageEl.children[i].style.display = 'none';
        };
    };
};
// 事件监听
Paging.prototype.pageEvent = function () {
    var that = this;
    this.pageEl.addEventListener('click', function (e) {
        var e = e || window.event;
        var targer = e.targer || e.srcElement;
        switch (targer.getAttribute('data-click')) {
            case 'index' : index(); break;
            case 'prev'  : prev(); break;
            case 'next'  : next(); break;
            case 'first' : first(); break;
            case 'last'  : last(); break;
            default      : break;
        };
        function index() {
            that.pageCurrent = parseInt(targer.innerText);
            that.showPage();
        };
        function prev() {
            that.pageCurrent--;
            if (that.pageCurrent<=1) that.pageCurrent=1;
            that.showPage();
        };
        function next() {
            that.pageCurrent++;
            if (that.pageCurrent>=that.pageCount) that.pageCurrent=that.pageCount;
            that.showPage();
        };
        function first() {
            that.pageCurrent = 1
            that.showPage();
            for (let i=0; i<that.pageEl.children.length; i++) {
                that.pageEl.children[i].style.display = 'none';
                if (i < 7 || i >= that.pageEl.children.length-3)
                    that.pageEl.children[i].style.display = 'inline-block';
            }
        }
        function last() {
            that.pageCurrent = that.pageCount
            that.showPage();
            for (let i=0; i<that.pageEl.children.length; i++) {
                that.pageEl.children[i].style.display = 'none';
                if (i < 2 || i >= that.pageEl.children.length-8)
                    that.pageEl.children[i].style.display = 'inline-block';
            }
        }
    });
};