#!/usr/bin/env bash

source "$(dirname "$0")/../utils.sh"
source "$(dirname "$0")/common.sh"
validate_env "$1"

echo_separator
echo_green "✨ Starting server for Environment: $1"
echo_separator

ng serve --configuration=$1
