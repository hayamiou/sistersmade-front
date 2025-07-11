#!/usr/bin/env bash

source "$(dirname "$0")/../utils.sh"
source "$(dirname "$0")/common.sh"

validate_env "$1" "staging|production"

echo_separator
echo_green "🚀 Building for Environment: $1"
echo_separator

ng build --configuration=$1
