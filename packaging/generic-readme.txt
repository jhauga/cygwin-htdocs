<package name>
------------------------------------------
<short description, 2 or 3 lines>

Runtime requirements:
  cygwin-1.5.18 or newer
  <other requirements, e.g., libintl3>
  <If you use g-b-s, "./pkg-ver-rel.sh depend" will tell you some of this.
   Also remember to depend on bash if you have a postinstall script or if
   a binary calls system(2).  Make sure these also appear in setup.hint.>

Build requirements:
  cygwin-1.5.18 or newer
  gcc-3.4.4-1 or newer
  binutils-20050610-1 or newer
  <other requirements, e.g., gettext>

Canonical homepage:
  http://... <where the upstream, non-cygwinized package lives>

Canonical download:
  ftp://...  <ditto>

License:
  <GPL, LGPL, ...>

Language:
  <C, Perl, shell, ...>

------------------------------------

Build instructions:
  unpack <PKG>-<VER>-<REL>-src.tar.bz2
    if you use setup to install this src package, it will be
	 unpacked under /usr/src automatically
  cd /usr/src
  ./<PKG>-<VER>-<REL>.sh all

This will create:
  /usr/src/<PKG>-<VER>-<REL>.tar.bz2
  /usr/src/<PKG>-<VER>-<REL>-src.tar.bz2

Or use './<PKG>-<VER>-<REL>.sh prep' to get a patched source directory

To find out the files included in the binary distribution, you can
use "cygcheck -l <PKG>", or browse the listing for the appropriate version
at <http://cygwin.com/packages/>.

------------------

Port Notes:

----------  <PKG>-<VER>-<REL> -- <date> -----------
Other information

...

----------  <PKG>-<older VER>-1 -- <date> -----------
Initial release

For more information about this package, see the upstream documentation in
/usr/share/doc/<PKG>-<VER>.

Cygwin port maintained by: <Your Name Here> <your email here, can be
spam protected>
Please address all questions to the Cygwin mailing list at <cygwin@cygwin.com>
