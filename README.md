# Socialight
> Get Social Network Share Counts with Vanilla JS

![](https://raw.github.com/pinceladasdaweb/Socialight/master/screenshot.png)

## Demo
View demo [here](http://www.pinceladasdaweb.com.br/blog/uploads/socialight/).

## How to use?
In HTML, set the element that will be displayed counters, an example can be seen below:

```html
<div class="social" data-url="http://www.pinceladasdaweb.com.br/"></div>
```
Socialight is a [Vanilla JS](http://vanilla-js.com/) plugin with no dependancies. Include the [`socialight.min.js`](build/socialight.min.js) in the footer of your page and initialise it:

```javascript
(function(window, document, undefined) {
    "use strict";

    function SocialightFacade ($element) {
        var socialight = new Socialight({
                container: $element,
                url: $element.getAttribute("data-url")
            });

        socialight.add(new Twitter());
        socialight.add(new Facebook());
        socialight.add(new GooglePlus());
        socialight.add(new LinkedIn());
        socialight.add(new Buffer());
        socialight.add(new Pinterest());

        socialight.draw();
    }

    var el = document.querySelectorAll(".social"), i, len;

    for (i = 0, len = el.length; i < len; i++) {
        SocialightFacade(el[i]);
    }

}(window, document));
```
The [`plus.php`](plus.php) file is responsible for making the request to return the data from Google+.

## Browser support
IE8+ and modern browsers.

## License
Socialight is licensed under the MIT License.
