/* Toolgif | https://mburakerman.github.io/toolgif/ | @mburakerman | License: MIT */
(function () {

	class Toolgif {

		constructor(el, options = {}) {
			this.el = document.querySelectorAll(el);
			this.options = options;

			this.giphyUrl = '';

			this.defaultOptions = {
				width: 120,
				height: 100,
				borderRadius: 5,
				placement: "top",
				downsized: true,
				preloader: "data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDov%0D%0AL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjQ0IiBoZWlnaHQ9IjQ0IiB2aWV3Qm94PSIw%0D%0AIDAgNDQgNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjNzE2%0D%0AOERCIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRo%0D%0APSIyIj4KICAgICAgICA8Y2lyY2xlIGN4PSIyMiIgY3k9IjIyIiByPSIxIj4KICAgICAgICAgICAg%0D%0APGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIKICAgICAgICAgICAgICAgIGJlZ2luPSIwcyIgZHVy%0D%0APSIxLjhzIgogICAgICAgICAgICAgICAgdmFsdWVzPSIxOyAyMCIKICAgICAgICAgICAgICAgIGNh%0D%0AbGNNb2RlPSJzcGxpbmUiCiAgICAgICAgICAgICAgICBrZXlUaW1lcz0iMDsgMSIKICAgICAgICAg%0D%0AICAgICAgIGtleVNwbGluZXM9IjAuMTY1LCAwLjg0LCAwLjQ0LCAxIgogICAgICAgICAgICAgICAg%0D%0AcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0%0D%0AZU5hbWU9InN0cm9rZS1vcGFjaXR5IgogICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjEu%0D%0AOHMiCiAgICAgICAgICAgICAgICB2YWx1ZXM9IjE7IDAiCiAgICAgICAgICAgICAgICBjYWxjTW9k%0D%0AZT0ic3BsaW5lIgogICAgICAgICAgICAgICAga2V5VGltZXM9IjA7IDEiCiAgICAgICAgICAgICAg%0D%0AICBrZXlTcGxpbmVzPSIwLjMsIDAuNjEsIDAuMzU1LCAxIgogICAgICAgICAgICAgICAgcmVwZWF0%0D%0AQ291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgPC9jaXJjbGU+CiAgICAgICAgPGNpcmNsZSBj%0D%0AeD0iMjIiIGN5PSIyMiIgcj0iMSI+CiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9%0D%0AInIiCiAgICAgICAgICAgICAgICBiZWdpbj0iLTAuOXMiIGR1cj0iMS44cyIKICAgICAgICAgICAg%0D%0AICAgIHZhbHVlcz0iMTsgMjAiCiAgICAgICAgICAgICAgICBjYWxjTW9kZT0ic3BsaW5lIgogICAg%0D%0AICAgICAgICAgICAga2V5VGltZXM9IjA7IDEiCiAgICAgICAgICAgICAgICBrZXlTcGxpbmVzPSIw%0D%0ALjE2NSwgMC44NCwgMC40NCwgMSIKICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmlu%0D%0AaXRlIiAvPgogICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2Utb3BhY2l0%0D%0AeSIKICAgICAgICAgICAgICAgIGJlZ2luPSItMC45cyIgZHVyPSIxLjhzIgogICAgICAgICAgICAg%0D%0AICAgdmFsdWVzPSIxOyAwIgogICAgICAgICAgICAgICAgY2FsY01vZGU9InNwbGluZSIKICAgICAg%0D%0AICAgICAgICAgIGtleVRpbWVzPSIwOyAxIgogICAgICAgICAgICAgICAga2V5U3BsaW5lcz0iMC4z%0D%0ALCAwLjYxLCAwLjM1NSwgMSIKICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRl%0D%0AIiAvPgogICAgICAgIDwvY2lyY2xlPgogICAgPC9nPgo8L3N2Zz4="
			}

			// copy defaultOptions values and paste options object
			this.options = Object.assign(this.defaultOptions, this.options);
		}

		toolgif() {

			for (let i = 0; i < this.el.length; i++) {

				this.el[i].style.position = "relative";
				this.el[i].style.top = 0;

				let img = document.createElement("img");
				this.el[i].appendChild(img);
				img.className = "toolgif-gif" + " " + "toolgif-gif-" + i;
				img.style.display = "none";


				// check preloader
				if (this.options.preloader !== null || this.options.preloader !== "") {
					img.src = this.options.preloader
				}


				let elLength = this.el[i].offsetHeight;
				let defaultStyles = {
					"display": "block",
					"visibility": "hidden",
					"opacity": 0,
					"position": "absolute",
					"left": "50%",
					"marginLeft": -(this.options.width / 2) + "px",
					"borderRadius": this.options.borderRadius + "px",
					"width": this.options.width + "px",
					"height": this.options.height + "px",
					"transition": "all .2s",
					"transform": "translateY(5px)",
					"zIndex": 9999
				}


				Object.getOwnPropertyNames(defaultStyles).forEach((cssProperty) => {
					img.style[cssProperty] = defaultStyles[cssProperty]
				});


				// placement
				if (this.options.placement == "bottom") {
					img.style.top = this.el[i].offsetHeight + "px"
				} else {
					img.style.bottom = this.el[i].offsetHeight + "px"
				}


				// mouseenter
				this.el[i].addEventListener('mouseenter', (e) => {
					// check preloader
					if (this.options.preloader !== null || this.options.preloader !== "") {
						img.src = this.options.preloader
					}
					img.style.transform = "translateY(0px)";
					img.style.visibility = "visible";
					img.style.opacity = 1;

					let currentText = e.target.textContent;


					// check tag
					let dataToolgifTag = this.el[i].getAttribute("data-toolgif-tag");
					if (dataToolgifTag !== null && dataToolgifTag !== '') {
						this.giphy(dataToolgifTag, () => this.checkDataUrl(this.el[i], img, () => this.fetchData(img)));
					} else {
						this.giphy(currentText, () => this.checkDataUrl(this.el[i], img, () => this.fetchData(img)));
					}
				});


				// mouseleave
				this.el[i].addEventListener('mouseleave', (e) => {
					img.style.transform = "translateY(5px)";
					img.style.visibility = "hidden";
					img.style.opacity = 0;
				});

			}

		}

		giphy(text, callback) {
			const host = "https://api.giphy.com";
			const path = "/v1/gifs/random?";
			const api_key = "&api_key=dc6zaTOxFJmzC";
			const query = "&q=";
			const tag = "&tag=";
			let word = text;

			let url = host + path + api_key + tag + word;
			this.giphyUrl = url;

			callback();
		}

		checkDataUrl(element, image, callback) {
			let dataToolgifUrl = element.getAttribute("data-toolgif-url");

			if (dataToolgifUrl !== null && dataToolgifUrl !== '') {
				image.src = dataToolgifUrl;
			} else {
				callback();
			}
		}

		fetchData(element) {
			fetch(this.giphyUrl)
				.then(res => res.json())
				.then((data) => {
					let gif_url = data.data.image_url;
					let downsizded_gif_url = data.data.images.downsized.url;

					this.options.downsized ? element.src = downsizded_gif_url : element.src = gif_url;
				});
		}

	}


	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = Toolgif;
	} else {
		if (typeof define === 'function' && define.amd) {
			define([], function () {
				return Toolgif;
			});
		} else {
			window.Toolgif = Toolgif;
		}
	}
})();