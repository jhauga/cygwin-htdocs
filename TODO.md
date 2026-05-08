# User TODO

- [x] clean-style-css
  - [x] patch file subject
  - [x] comment
- [x] code-style
  - [x] patch file subject
  - [x] comment
- [ ] css-variables
  - [ ] patch file subject
  - [ ] comment
- [x] fixed-menu-position
  - [x] patch file subject
  - [x] comment
- [x] h1-font
  - [x] patch file subject
  - [x] comment
- [x] link-hover
  - [x] patch file subject
  - [x] comment
- [x] menu-font-weight
  - [x] patch file subject
  - [x] comment
- [x] pre-style
  - [x] patch file subject
  - [x] comment
- [ ] responsive-styling
  - [ ] patch file subject
  - [ ] comment
- [ ] star-entity and menu
  - [ ] patch file subject
  - [ ] comment
- [ ] top-logo
  - [ ] patch file subject
  - [ ] comment
  - [ ] Add `hover` to style
- [ ] Add class to `pre` tags where missing
  - [ ] patch file subject
  - [ ] comment
- [ ] Apply sans-serif to all but `code` and `pre`
  - [ ] patch file subject
  - [ ] comment
- [ ] Accessibility increasing `line-height`. Look for:
  - [ ] patch file subject
  - [ ] comment

## New Patch

- [ ] Add class to `pre` with appropriate use-case. See

```text
> - 0008-style-pre-code-blocks.patch
>    - Adds a background color to all code-blocks, using the menu color at 20% opacity
>    - Same for `pre` tags that hold code examples; at least 90% of software docs,
>      blogs, articles, etc. use a differentiating background color for code-blocks

I'm sure this is fine, but I'd be interested to know where we're using
<pre> without a class.

It's might be a good idea to add a class in those places to indicate how
we're using it?
```

- [ ] Update responsive styling. See:

```text
> - 0010-responsive-styling.patch
>    - Really simple responsive CSS added to style.css
>    - A new fragment file; "head.html" - adds the required `meta` tag for responsive HTML

Uh, not sure what the benefit of this is.

On phone sized screens, most of the space is taken up by the navigation bar?

(although making it look better on screens of that size is something I'd
very much like to fix, but I think that probably involves a lot more
restructuring?)
```

- [ ] Remove star text color. See:

```text
> - 0005-add-html-star-entity-for-the-Gold-Stars-menu-item.patch
>    - Use HTML encoding to add a start icon the the menu item "Gold Stars"
>    - Draw attention to item and clearly labels it as not the current page:
>      https://www.netwaveinteractive.com/blog/visual-hierarchy-in-ui-ux-design-principles-strategies-and-best-practices/#:~:text=enhance%20hierarchy%20by%20breaking%20up%20text

This is one I'm not sure about.

This page isn't that important. It's only due to an accident of "design
by developer" that it's distinguished by colour at all.

Maybe we ought to just drop that?
```

- [ ] Apply sans-serif to all but `code` and `pre`

```text
> - 0006-h1-header-s-font-family-to-sans-serif.patch
>    - Set the font family to sans serif for `h1` tags
>    - Keeping other text as serif makes for good visual contrast
>    - Sans serif is best for digital:
>      https://ixdf.org/literature/topics/typography#:~:text=preferable%20for%20digital%20interfaces
>      https://medium.com/the-interaction-design-foundation/the-ux-designers-guide-to-typography-7ddf87288123#:~:text=preferred%20for%20digital%20interfaces

I wonder if we should just switch to sans-serif throughout? or just stop
specifying the font-family altogether?
```

- [ ] Accessibility increasing `line-height`. Look for:

```text
/* PATCH */
/* Access */
```
