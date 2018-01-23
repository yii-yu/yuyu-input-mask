/**
 * 	Author     : Lipinski Yury
 * 	E-mail     : lipinski.yury@gmail.com
 *  Created on : 04.12.2017
 *  
 *  
 *  Example use
 *
 *	<input type="text" class="yuyu-mask-input" data-mask="+375(__)___-____" >
 *
 * 	
 */


(function () {

    function Widget() {

        this.classNameInput = 'yuyu-mask-input';
        this.inputElements = [];
        this.init();
    }

    Widget.prototype.init = function () {
        var
                tagsInput = document.getElementsByTagName('input'),
                i;

        for (i = 0; i < tagsInput.length; i++) {
            if (tagsInput[i].classList.contains(this.classNameInput)) {
                this.inputElements.push(tagsInput[i]);
            }
        }

        this.listener();
    }

    Widget.prototype.listener = function () {
        var
                length = this.inputElements.length,
                i;

        for (i = 0; i < length; i++) {
            this.inputElements[i].addEventListener('mouseover', function () {
                var objMask = new Mask(this);
                objMask.init();
            });

            this.inputElements[i].addEventListener('input', function () {
                var objMask = new Mask(this);
                objMask.init();
            });
        }
    }


    function Mask(elem) {
        this.matrix = '';
        this.i = 0;
        this.def = '';
        this.val = '';
        this.elem = elem;

    }

    Mask.prototype.init = function () {
        this.matrix = this.elem.dataset.mask;
        this.def = this.matrix.replace(/\D/g, "");
        this.val = this.elem.value.replace(/\D/g, "");

        if (this.def.length > this.val.length) {
            this.val = this.def;
        }

        this.fillMask(this.val);
    }

    Mask.prototype.fillMask = function () {
        var
                n = 0,
                _this = this;

        this.matrix = this.matrix.replace(/[_\d]/g, function (find, pos, str) {
            return _this.val.charAt(n++) || "_";
        });

        this.elem.value = this.matrix;

        if (String(this.val).length < 12) {
            if (this.matrix === this.elem.dataset.mask) {
                this.i = this.elem.value.indexOf("_");
            } else {
                this.i = this.matrix.lastIndexOf(this.val.substr(-1));
                this.i++;
            }
        } else {
            this.i = this.matrix.length;
        }

        this.setCursorPosition();
    }

    Mask.prototype.setCursorPosition = function () {
        var _this = this;
        this.elem.focus();

        if (this.elem.setSelectionRange) {
            setTimeout(function () {
                _this.elem.setSelectionRange(_this.i, _this.i);
            }, 0);
        } else if (this.elem.createTextRange) {
            setTimeout(function () {
                var range = this.elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", this.i);
                range.moveStart("character", this.i);
                range.select();
            }, 0);
        }
    }


    var objWidjet;
    objWidjet = new Widget();

    return objWidjet;



}());