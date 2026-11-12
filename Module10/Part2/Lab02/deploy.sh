#!/usr/bin/env bash
set -euo pipefail
image_name="${1:?Usage: bash deploy.sh DOCKERHUB_USERNAME/module10-calculator:latest}"
sudo docker pull "$image_name"
sudo docker rm -f module10-calculator 2>/dev/null || true
sudo docker run -d --name module10-calculator --restart unless-stopped -p 80:3000 "$image_name"
curl --fail --retry 5 --retry-connrefused --retry-delay 2 http://localhost/health
