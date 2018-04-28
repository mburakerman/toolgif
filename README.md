# Toolgif

>The only GIF tooltip plugin you need


## Install

[![NPM](https://nodei.co/npm/toolgif.png?mini=true)](https://www.npmjs.com/package/toolgif/)

Just nclude Toolgif file

```html
<script src="toolgif.js"></script>
```
or use CDN
```html
<script src="https://cdn.rawgit.com/mburakerman/toolgif/master/src/toolgif.js"></script>
```

## Usage

### Simple Usage

```html
<p>Lorem ipsum dolor sit <span class="my-class">cat</span>.</p>
```

```js
<script>
   new Toolgif(".my-class").toolgif();
</script>
```
[Simple usage CodePen demo ](#)

**Visit the [website](https://mburakerman.github.io/toolgif/) for more examples and settings.**


## Customize

```js
new Toolgif(".my-class", {
	width: 120,
	height: 100,
	borderRadius: 5,
	placement: "top",
	downsized: true,
	preloader: // data url here(it's kinda long as you expect so i didn't put here)
}).toolgif();
```


## License

Licensed under the MIT License.
