# Toolgif

>The only GIF tooltip plugin you need


## Install

[![NPM](https://nodei.co/npm/toolgif.png?mini=true)](https://www.npmjs.com/package/toolgif/)

or use CDN
```html
<script src="https://cdn.rawgit.com/mburakerman/toolgif/master/src/toolgif.min.js"></script>
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
[Simple usage CodePen demo ](https://codepen.io/anon/pen/VxPYwW/)

**Visit the [website](https://mburakerman.github.io/toolgif/) for more examples and settings.**


## Customize

```js
new Toolgif(".my-class", {
  width: 120,
  height: 100,
  borderRadius: 5,
  placement: "top",
  downsized: true, // File size under 2mb (see https://developers.giphy.com/docs/)
  preloader: // data url here(it's kinda long as you expect so i didn't put here)
}).toolgif();
```


## License

Licensed under the MIT License.
