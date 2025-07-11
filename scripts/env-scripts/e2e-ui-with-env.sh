#!/usr/bin/env bash

source "$(dirname "$0")/common.sh"

validate_env "$1" "staging|production"

echo_separator
echo_green "✨ Running e2e:ui tests for environment: $1"
echo_separator

start-server-and-test \
    "npm run build --env=$1 && npm run start-server" \
    http://localhost:4200 \
    cypress:open
