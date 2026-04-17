#!/bin/bash
# startSite
# Run install of apache and start localhost.

sudo apt-get update
sudo apt-get install -y apache2
/usr/sbin/apache2 -f /workspaces/cygwin-htdocs/httpd.conf.local -DFOREGROUND
