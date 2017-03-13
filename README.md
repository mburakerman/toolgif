# Toolgif

>A very simple jQuery gif tooltip plugin


### Install

Load jQuery and include Toolgif file

```html
<script src="jquery.js"></script>
<script src="src/toolgif.js"></script>
```
or use CDN
```html
<link rel="stylesheet" href="https://code.jquery.com/jquery-3.1.1.min.js">
<link rel="stylesheet" href="https://cdn.rawgit.com/mburakerman/toolgif/master/src/toolgif.js">
```


### Usage

##### Simple Usage

```html
<p>Lorem ipsum dolor sit <span class="toolgif">cat</span>.</p>
```

```js
<script>
    $(function() {
      $(".toolgif").toolgif();
    });
</script>
```
[Simple usage CodePen demo ](http://codepen.io/anon/pen/MpobLR)

**Visit the [website](https://mburakerman.github.io/toolgif) for more examples and settings.**


### Customize

```js
$(".toolgif").toolgif({
  width:200,
  height:100,
  speed:200,
  borderRadius:5,
  textColor:"initial",
  gifChange:true //If you make it false , one random gif limited by your tag will be found on Giphy.Gif won't change when you hover over your text again unless page reload is made.
});
```


### License

Licensed under the MIT License.
