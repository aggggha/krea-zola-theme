+++
date = 2021-07-25T17:05:00Z
title = "Welcome to Krea Theme for Zola"
updated = 2021-07-25T17:07:00Z
[extra]
headline = "Hi! Krea is a theme for Zola. Krea introduces a grid layout view on its homepage and bunch of other feature. Pssstttt… Krea really likes loading pictures."
+++

What you just read is one of Krea's features, namely **Headline**. Headlines allow you to write down what you want to emphasize in a blog post. Headlines are added to the `*.md` document that you save in the `/content` directory. To add it, simply write `headline`  variable after `[extra]` in the front matter setting of the blog post content you want to publish. 

<!-- more -->

## Cover Image
Just like Headlines, you can add this feature to the front matter of the content document. The cover image will appear on the homepage, it will also appear at the very top of the post page. Cover images can be added via image url from the internet or files stored in the `static` directory. For example:

```js
[extra]
cover = "/image/cover.png"
// or
cover = "https://source.unsplash.com/random"
```

## Tags
You can also add tags via the front matter `[taxonomies]` followed by `tags` in an array format. Tags can contains more than one tag. For example:

```js
[taxonomies]
tags = ["HTML", "Programming", "Design"]
```

Please note that, on homepage only first two tag will be displayed.

## Images

Krea loves image, with Krea you can insert image using the old way:

```js
![Some random image from unsplash](https://source.unsplash.com/random/800x480)
```

![Some random image from unsplash](https://source.unsplash.com/random/800x480)

or, you can insert using HTML tag as usual. Even more, you can customize how it looks on this page using `.expanded`, `.small` or `.wrapped` class. That first image is default sizing for image.

<img src="https://source.unsplash.com/random/800x480" alt="Using .expanded class" class="expanded" />

Using .wrapped

<img src="https://source.unsplash.com/random/800x480" alt="Using .wrapped class" class="wrapped" />

Using .small

<img src="https://source.unsplash.com/random/800x480" alt="Using .small class" class="small" />

You don't need to worry about caption and `<figure>` tag, Krea handle it for you and also those images are clickable. 

## Some Other Basic Feature

I'm sorry but I had to copy this section from [this](hulufei/solar-theme-zola) guy repo because this take more time than I expected.

### Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

### Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

### Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.</p>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

### Tables

Zola supports Tables out-of-the-box.

   Name | Age
--------|------
    Bob | 27
  Alice | 23
   Jake | 32
 Claire | 19

#### Inline Markdown within tables

| Inline&nbsp;&nbsp;&nbsp;     | Markdown&nbsp;&nbsp;&nbsp;  | In&nbsp;&nbsp;&nbsp;                | Table      |
| ---------- | --------- | ----------------- | ---------- |
| *italics*  | **bold**  | ~~strikethrough~~&nbsp;&nbsp;&nbsp; | `code`     |

### Code Blocks

#### Code block with backticks

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```
#### Code block indented with four spaces

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* List item
* Another item
* And another item

#### Nested list

* Item
  - First Sub-item
  - Second Sub-item

### Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

### Last but Not Least, mathjax

Thanks to [mathjax](https://www.mathjax.org/) Krea is able to display math equation out-of-the-box.

$$
\displaylines{x = a + b \\\\ y = b + c}
$$

$$
\require{bussproofs}
\begin{prooftree}
\AxiomC{A}
\AxiomC{B}
\BinaryInfC{D}
\end{prooftree}
$$