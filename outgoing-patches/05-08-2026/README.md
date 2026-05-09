# Cover Letter

Subject: cygwin-htdocs: website fresh coat of paint

Attached are several patches that continue the site's UI/UX refresh, picking
up on feedback from the previous round. Together this is another fresh coat
of paint for the website. For a full demonstration of all the patches applied
to the site, see this support repo:

https://github.com/jhauga/cygwin-htdocs

Below are the details of each patch in this pull request:

- 0001-access.patch
  - Set a global font-size of 1em and line-height of 1.35 for better
    readability/accessibility (preserves pre/code sizing)

- 0002-add-pre-class.patch
  - Apply class="screen" to bare <pre> tags so they pick up existing
    pre.screen styling already defined in style.css

- 0003-font.patch
  - Apply font-family: sans-serif globally except for pre and code tags

- 0004-gold-stars.patch
  - Remove the special menu coloring for the Gold Stars item so it
    matches the rest of the navbar

- 0005-top-logo.patch
  - Add logo.svg (pure SVG elements only) and reference it from top.html

- 0006-responsive-styling.patch
  - Add a responsive style section to style.css and switch the HTML
    files over to a shared head.html include for the meta/stylesheet
    boilerplate

- 0007-css-variables.patch
  - Refactor style.css to use CSS custom properties (:root variables)
    for colors used 2+ times, keeping the CSS DRY

Response To Prior Emails

> On 2026-05-04 12:52, Jon Turney wrote:

>    I'm sure this is fine, but I'd be interested to know where we're using
>    \<pre\> without a class.
>
>   It's might be a good idea to add a class in those places to indicate how
>   we're using it?

See patch `0002-add-pre-class.patch`. For the most part it is a find
replace all `<pre>` with `<pre class="screen">`. Which seemed fitting
according to the AI's rule

NOTE - Claudes Class Rules of Application:

START-Class Rule Applied --
Existing classes observed in the codebase (left untouched):
- Class: screen
  - Used For: Shell commands, terminal output, config snippets (DocBook + handwritten)
- Class: programlisting
  - Used For: C/C++ source-code listings (DocBook generated)
- Class: funcsynopsisinfo
  - Used For: Function signature synopses (inside `<div class="funcsynopsis">`)
- Class: prewrap
  - Used For: Word-wrapping preformatted blocks inside table cells (e.g. hint-file examples)
- Class: sample-preformat
  - Used For: Sample preformatted text in contributors guide

Rule used for tags missing a class (per --when-in-doubt-apply-class screen
and --create-new-class=false):

All bare `<pre>` (and `<PRE>`) tags receive class="screen".

Justification: every unclassed instance was in handwritten pages
(git.html, install.html, etc...), and contained shell commands, build/git
invocations, setup.ini/.hint config samples, or man-page output — all of
which match the established semantics of screen in the existing codebase.
No new CSS class was created (pre.screen already exists in style.css), and
no tag with a pre-existing class was modified.
END-Class Rule Applied --

> On 2026-05-04 12:52, Jon Turney wrote:

> Uh, not sure what the benefit of this is.
> 
> On phone sized screens, most of the space is taken up by the navigation
> bar?
> 
> (although making it look better on screens of that size is something I'd
> very much like to fix, but I think that probably involves a lot more
> restructuring?)

With that being the case see `0006-responsive-styling.patch`. It is a
more verbose approach to making the site responsive.

> On 2026-05-04 12:52, Jon Turney wrote:

>> I wonder if we should just switch to sans-serif throughout? or just stop
>> specifying the font-family altogether?

See `0003-font.patch`. Change all except the `code` and `pre` tag to use
sans-serif.

> On Wed, May 6, 2026 at 6:32 AM Brian Inglis

> Serif fonts tend to be harder to read on LCDs especially mobile with one
> narrow direction where you have to optimize content vs font size.
> In general I have always kept sizes to a minimum of 10pt to preserve my
> eyesight

See patch `0001-access.patch`. It starts style.css with setting the
font-size to `1em`. Essentially `12pt` but a better unit.

```bash
John Haugabook (7):
  style.css: apply global font size and line-height, better
    accessibility
  html: add class screen to pre tag without class
  style.css: apply font-family sans-serif to all but pre and code
  style.css: remove gold star menu color
  logo.svg: use only svg elements, add to top.html
  responsive: add responsive style section, update html to `head.html`
    template
  style.css: css variables for colors to keep DRY

 acronyms/index.html                           |   3 +-
 contrib.html                                  |   3 +-
 contrib/dll.html                              |   7 +-
 cygwin-api.html                               |   3 +-
 cygwin-api/index.html                         |   3 +-
 cygwin-ug-net.html                            |   3 +-
 docs.html                                     |   3 +-
 donations.html                                |   3 +-
 faq.html                                      |   3 +-
 git.html                                      |   7 +-
 goldstars/index.html                          |   3 +-
 goldstars/src/index.html.tpl                  |   3 +-
 head.html                                     |   3 +
 index.html                                    |   3 +-
 install.html                                  |   5 +-
 irc.html                                      |   3 +-
 licensing.html                                |   3 +-
 links.html                                    |   3 +-
 lists.html                                    |   3 +-
 logo.svg                                      | 170 ++++++++
 mirrors-report.html                           |   3 +-
 mirrors.html                                  |   3 +-
 navbar.html                                   |   7 +
 news.html                                     |   3 +-
 package-server.html                           |  13 +-
 package-upload.html                           |  13 +-
 packages.html                                 |   3 +-
 packages/index.html                           |   3 +-
 packages/package_docs.html                    |   3 +-
 packages/package_list.html                    |   3 +-
 packages/src_package_list.html                |   3 +-
 packaging-contributors-guide.html             |   5 +-
 packaging-hint-files.html                     |  17 +-
 packaging-package-files.html                  |  11 +-
 packaging/build.html                          |   5 +-
 packaging/cygport_tips.html                   |  11 +-
 packaging/key.html                            |   9 +-
 packaging/repos.html                          |   3 +-
 .../trusted-maintainer-policy-manual.html     |   3 +-
 problems.html                                 |   3 +-
 profiling/index.html                          |   5 +-
 setup-packaging-historical.html               |  19 +-
 snapshots/index.html                          |   3 +-
 style.css                                     | 385 +++++++++++++++---
 top.html                                      |   3 +
 who.html                                      |   3 +-
 xfree/docs/man1/Xserver.1.html                |   6 +-
 xfree/docs/man1/startxwin.1.html              |   2 +-
 xfree/docs/xlaunch/finish.html                |   4 +-
 xfree/docs/xlaunch/program.html               |  16 +-
 xfree/docs/xlaunch/xdmcp.html                 |   6 +-
 51 files changed, 619 insertions(+), 194 deletions(-)
 create mode 100644 head.html
 create mode 100644 logo.svg

-- 
2.49.0.windows.1
```