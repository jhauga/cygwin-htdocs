# Cover Letter

Subject: cygwin-htdocs: website fresh coat of paint

Attached are several patches that update the site's UI/UX. As a whole, this is a fresh coat of paint for the website. For a full demonstration of all the patches applied to the site, see this support repo:

https://github.com/jhauga/cygwin-htdocs

For the debatably controversial patches, I added nested links to UX/UI research in support of the "whys".
This mostly consists of links to UX/UI studies, and the research takeaways.

Apart from that the nestetd list items are the corresponding patch name, or additional info.

Changes include:

- Clean style.css, making consitent formatting
  - clean-style.css.patch
- Fixed menu position
  - fixed-menu-position.patch
- Logo added to top.html
  - add-logo-to-top.html.patch
  - Gets better user recall - https://www.nngroup.com/articles/logo-placement-brand-recall/
  - NOTE - logo downloaded from `https://commons.wikimedia.org/wiki/File:Cygwin_logo.svg`
- Menu font weight applied hierarchically per menu section
  - font-weight-applied-hierarchically-per-menu-section.patch
  - Differentiate text levels - https://medium.com/@oluwanifemiajayi61/typography-hierarchy-3ed06c206ea7#:~:text=Using%20weight%20strategically%20prevents%20visual%20clutter
- Prepend a HTML star entity the "Gold Stars" menu item
  - add-html-star-entity-for-the-Gold-Stars-menu-item.patch
  - Draw attention to item and clearly labels it as not the current page - https://www.netwaveinteractive.com/blog/visual-hierarchy-in-ui-ux-design-principles-strategies-and-best-practices/#:~:text=enhance%20hierarchy%20by%20breaking%20up%20text
- Change HTML `h1` header's font family to system-ui
  - h1-header-s-font-family-to-sans-serif.patch
  - Keeping other text as serif makes for good visual contrast
  - Sans serif is best for digital:
    - https://ixdf.org/literature/topics/typography#:~:text=preferable%20for%20digital%20interfaces
    - https://medium.com/the-interaction-design-foundation/the-ux-designers-guide-to-typography-7ddf87288123#:~:text=preferred%20for%20digital%20interfaces
- Style `code` HTML elements
  - style-code-HTML-elements.patch
  - I mean - I'd ballpark it at 90% of website that have software documentation apply background color to code blocks
- Style `pre` code-blocks
  - style-pre-code-blocks.patch
  - Same for `pre` tags that hold code examples; at least 90% of software docs, blogs, articles, etc. use a differentiating background color for code-blocks
- Link hover UX effect
  - link-hover-UX-effect.patch
  - Users expect hover effects, and essentailly a web standard - https://www.nngroup.com/articles/guidelines-for-visualizing-links/#:~:text=hover%20states%20have%20become%20a%20standard%20and%20expected%20interaction%20pattern
- Responsive styling
  - responsive-styling.patch
- Use CSS variables for colors to keep DRY (Do not Repeat Yourself)
  - css-variables-for-colors-to-keep-DRY.patch
