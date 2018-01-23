Маска ввода
==========
yuyu-input-mask
-------------
Маска ввода для телефона. Шаблон ввода задается в теге input с помощью атрибута data-mask. Например data-mask="+375(__)___-____". 
Все символы нижнего подчеркивания заменяются цифрами.  

Подключение
---------------

Ссылка development (будет использоваться самая последняя версия):

https://rawgit.com/yii-yu/yuyu-input-mask/master/js/yuyu_input_mask.js

Ссылка production(текущая версия в дальнейшем не будет меняться):
https://cdn.rawgit.com/yii-yu/yuyu-input-mask/d383af8b/js/yuyu_input_mask.js

Подключается на странице как обычный js файл, например:
<script type="text/javascript" src="https://rawgit.com/yii-yu/yuyu-modal/master/js/yuyu-input-mask.js"></script>

Использование
-----------------

**Пример:**
```html
    <input type="text" class="yuyu-mask-input" data-mask="+375(__)___-____" >
``` 

