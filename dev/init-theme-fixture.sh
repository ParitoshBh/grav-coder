#!/bin/sh
set -eu

# The upstream image installs Grav into the volume before running this hook.
# Refreshing the fixture on every start keeps the test site reproducible.
rm -rf \
  /var/www/html/user/pages \
  /var/www/html/user/config/plugins \
  /var/www/html/user/config/themes
rm -f \
  /var/www/html/user/config/site.yaml \
  /var/www/html/user/config/system.yaml
cp -R /opt/grav-coder-fixture/. /var/www/html/user/
rm -rf /var/www/html/user/themes/grav-coder
ln -s /opt/grav-coder-theme /var/www/html/user/themes/grav-coder

cd /var/www/html
bin/grav clearcache --quiet
chown -R www-data:www-data cache logs tmp
