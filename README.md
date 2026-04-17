# cygwin-htdocs

Static HTML site for the [Cygwin](https://cygwin.com/) project. Uses Apache `httpd` with Server Side Includes (SSI) to compose pages from shared fragments (`navbar.html`, `top.html`, `head.html`, etc.).

## Patch Set Overview

This branch represents a collection of patches submitted to the `cygwin-patches` mailing list under the subject **cygwin-htdocs: website fresh coat of paint**. The changes update the site's UI/UX and include:

- Clean `style.css` — consistent formatting
- Fixed menu position
- Logo added to `top.html` (improves brand recall)
- Menu font weight applied hierarchically per section
- Star entity prepended to the "Gold Stars" menu item
- `h1` font family changed to sans-serif
- `code` and `pre` element styling for documentation readability
- Link hover effects
- Responsive styling
- CSS variables for color values (DRY)

## Local Development (GitHub Codespaces)

The site requires Apache `httpd` because pages use SSI directives (`<!--#include virtual="..." -->`). A plain file server will not render the includes.

### 1. Install Apache

```bash
sudo apt-get update
sudo apt-get install -y apache2
```

### 2. Create the `httpd.conf`

Create a config file at the repo root that points Apache at the workspace:

```bash
cat > httpd.conf.local << 'EOF'
ServerRoot "/usr/lib/apache2"
Listen 8000
ServerName localhost

LoadModule mpm_prefork_module /usr/lib/apache2/modules/mod_mpm_prefork.so
LoadModule rewrite_module     /usr/lib/apache2/modules/mod_rewrite.so
LoadModule alias_module       /usr/lib/apache2/modules/mod_alias.so
LoadModule mime_module        /usr/lib/apache2/modules/mod_mime.so
LoadModule dir_module         /usr/lib/apache2/modules/mod_dir.so
LoadModule include_module     /usr/lib/apache2/modules/mod_include.so
LoadModule authz_core_module  /usr/lib/apache2/modules/mod_authz_core.so

DocumentRoot "/workspaces/cygwin-htdocs"

<Directory "/workspaces/cygwin-htdocs">
    AllowOverride None
    Options +Includes
    Require all granted
</Directory>

AddType text/html .html
AddOutputFilter INCLUDES .html
DirectoryIndex index.html
TypesConfig /etc/mime.types
PidFile /workspaces/cygwin-htdocs/httpd.pid
ErrorLog /workspaces/cygwin-htdocs/error.log
CustomLog /workspaces/cygwin-htdocs/access.log common
EOF
```

If `apache2 -t -f /workspaces/cygwin-htdocs/httpd.conf.local` reports that `log_config_module` is built-in, ensure the `LoadModule log_config_module ...` line is not present in your local config.

> **Note:** The checked-in `httpd.conf` contains Windows-specific paths. The `httpd.conf.local` above is the Codespaces equivalent — it is `.gitignore`'d and will not affect the repo.

### 3. Start the Server

```bash
/usr/sbin/apache2 -f /workspaces/cygwin-htdocs/httpd.conf.local -DFOREGROUND
```

The site will be available at **port 8000**. Codespaces will auto-detect the forwarded port — click the link in the Ports tab or open `http://localhost:8000` in the Simple Browser.

### 4. Stop the Server

Press `Ctrl+C` in the terminal running Apache, or:

```bash
kill $(cat httpd.pid)
```

## Local Development (Windows)

### 1. Install Apache

Install Apache via [WinGet](https://learn.microsoft.com/en-us/windows/package-manager/):

```powershell
winget install ApacheLounge.httpd
```

### 2. Configure

Edit `httpd.conf` so that `ServerRoot`, `DocumentRoot`, `LoadModule` paths, `TypesConfig`, `PidFile`, and log paths match your local Apache installation and repo clone location.

### 3. Start the Server

```powershell
httpd.exe -f "C:\path\to\cygwin-htdocs\httpd.conf" -DFOREGROUND
```

Then open <http://localhost:8000>.

## Project Structure

```
├── index.html          # Home page
├── head.html           # Shared <head> content (CSS, viewport meta)
├── navbar.html         # Navigation sidebar (SSI included)
├── top.html            # Header/logo banner (SSI included)
├── style.css           # Main stylesheet
├── httpd.conf          # Apache config (Windows paths — edit for your env)
├── cygwin-api/         # Cygwin API reference docs
├── cygwin-ug-net/      # Cygwin User's Guide
├── faq/                # FAQ pages
├── packages/           # Package listing
└── outgoing-patches/   # Patch files for mailing list submission
```

## SSI (Server Side Includes)

Pages use Apache SSI to include shared fragments:

```html
<!--#include virtual="navbar.html" -->
<!--#include virtual="top.html" -->
```

This is why a plain file server (e.g., `python -m http.server`) will **not** work — the include directives won't be processed and the pages will render without navigation or headers.
