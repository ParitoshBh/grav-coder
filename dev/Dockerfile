FROM getgrav/grav:latest

ENV GRAV_VERSION=2.0.11

COPY fixture /opt/grav-coder-fixture
COPY init-theme-fixture.sh /docker-entrypoint.d/init-theme-fixture.sh

RUN chmod +x /docker-entrypoint.d/init-theme-fixture.sh
