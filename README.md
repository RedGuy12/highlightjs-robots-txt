![](https://badgen.net/badge/status/seeking%20maintainer/orange)

This project is currently unmaintained and could use a new maintainer.  If interested, please open an issue.

---

# bbcode - a language grammar for highlight.js


## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.


### Static website or simple usage

Simply load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/bbcode.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-bbcode@0.10/dist/bbcode.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsBbcode = require('highlightjs-bbcode');

hljs.registerLanguage("bbcode", hljsBbcode);
hljs.highlightAll();
```

## License

Released under the MIT License. See [LICENSE][1] file for details.

### Author

Paul Reid <paul@reid-family.org>

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about bbcode: <https://www.bbcode.org>

[1]: https://github.com/RedGuy12/highlightjs-bbcode/blob/master/LICENSE
