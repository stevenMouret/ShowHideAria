# showHideAriajQuery.js

jQuery plugin. Accessible collapsible content with ARIA

## How to use ?

Just link to `showHideAriajQuery.js` before closing `</body>` tag.

```html
<script src="showHideAriajQuery.js"></script>
```

Import CSS

```css
<style type="text/css">
	@import url("showHideAriajQuery.css") all;
</style>
```

HTML structure

```html
<div class="showHideAria">
	<h2 class="showHideTitle">Title</h2>
	<div class="showHideContent">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur deserunt dolor enim excepturi expedita in incidunt ipsum, iste iusto modi mollitia ratione veniam voluptatum.</p>
	</div>
</div>
```

Call in Javascript

```js
$(document).ready(function(){
	$(".showHideAria").showHideAria();
});
```


## License

This script is [MIT licensed](http://outline.mit-license.org/).

## Author

* [Steven Mouret](http://www.steven-mouret.fr)
* Twitter: [@StevenMouret](https://twitter.com/StevenMouret)