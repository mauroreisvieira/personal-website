I've been using Sublime Text 3 for probably five years now and in that time I've discovered tons of useful tricks.

I figured I should start writing them down for anyone who might be interested.

I'll try to explain the bits that seem esoteric because there are a lot of cool commands which only work in certain contexts.

### Package Control

Package Control makes it extremely easy to manage your Sublime packages. Also helps with discovering new ones, which is nice.

### Goto Anything...

So you want to fly around your project super fast? Then the shortcut you want is `CMD+P`.\
Once you've opened the dialog try typing a filename.

If you preface what you're typing with a `@` it will look for "symbols" in the current file.

Ex: `@foobar`. But just typing `@` will give you a nice file outline. The definition of what a symbol is depends on the file-type. In a Markdown file, for instance, it will list every header. In a JavaScript or Ruby file it will list every method of an object.

One last trick. If instead of an `@` you preface things with an : you can type a line number instead and hit enter to jump to that point. Ex: `:415`

There are other keyboard shortcuts for jumping to a line and going to a symbol but why bother when you can just use `CMD+P` and some easy prefixing.

### Selections

There are some neat selections which come in handy depending on your context.\
Personally I use Expand Selection to Tag, `CMD+SHIFT+A` quite frequently when writing HTML.
I also use Expand Selection to Line, `CMD+L` and Expand Selection to Word, `CMD+D` a lot.
