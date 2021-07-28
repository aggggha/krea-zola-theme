# Krea

Krea is a WIP static site themefor [Zola](https://getzola.org/) featuring tags, pagination and more.

## Contents

- [Usage](#usage)
- [Options](#options)
  - [Top menu](#top-menu)
  - [Title](#title)

## Usage
In order to use this theme, you need to clone this repository in your `themes` folder:

```bash
git clone https://github.com/aggggha/krea-zola-theme.git
```

Then set `theme` setting in `config.toml` to `krea`

```toml
theme = "krea"
```

The theme requires tags and categories taxonomies to be enabled in your `config.toml`:

```toml
taxonomies = [
    # You can enable/disable RSS
    {name = "categories", feed = true},
    {name = "tags", feed = true},
]
```

Pagination is available by default, you can customize how many post to be displayed per page by setting `paginate_by` in `content/blog/_index.md`:

```
+++
sort_by = "date"
template = "index.html"
paginate_by = 7
+++
```

## Options

### Top-menu
Set a field in `extra` with a key of `even_menu`:

```toml
# This is the default menu
krea_menu_links = [
    {url = "$BASE_URL", name = "Home"},
    {url = "$BASE_URL/categories", name = "Categories"},
    {url = "$BASE_URL/tags", name = "Tags"},
    {url = "$BASE_URL/about", name = "About"},
]
```

If you put `$BASE_URL` in a url, it will automatically be replaced by the actual
site URL.

### Title
The site title is shown on the header. As it might be different from the `<title>`
element that the `title` field in the config represents, you can set the `even_title`
instead.

### KaTeX math formula support

This theme contains math formula support using [KaTeX](https://katex.org/),
which can be enabled by setting `katex_enable = true` in the `extra` section
of `config.toml`:

```toml
[extra]
katex_enable = true
```

After enabling this extension, the `katex` short code can be used in documents:
* `{{ katex(body="\KaTeX") }}` to typeset a math formula inlined into a text,
  similar to `$...$` in LaTeX
* `{% katex(block=true) %}\KaTeX{% end %}` to typeset a block of math formulas,
  similar to `$$...$$` in LaTeX

#### Automatic rendering without short codes

Optionally, `\\( \KaTeX \\)` inline and `\\[ \KaTeX \\]` / `$$ \KaTeX $$`
block-style automatic rendering is also supported, if enabled in the config:

```toml
[extra]
katex_enable = true
katex_auto_render = true
```
