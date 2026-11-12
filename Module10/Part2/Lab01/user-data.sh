#!/bin/bash
set -euo pipefail
apt-get update
apt-get install -y nginx docker.io
systemctl enable --now nginx docker
printf '<!doctype html><html lang="en"><title>Module 10 EC2</title><h1>My Ubuntu EC2 web server works</h1></html>' > /var/www/html/index.html
