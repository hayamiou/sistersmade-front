#!/usr/bin/env bash

source "$(dirname "$0")/../utils.sh"

get_available_envs() {
    local filter=${1:-.*}
    find src/environments -type f -name "environment.*.ts" |
        sed -E 's/.*environment\.([a-zA-Z0-9_-]+)\.ts/\1/' |
        grep -E "$filter"
}

validate_env() {
    local filter=${2:-.*}
    if [ -z "$1" ]; then
        echo "\n🚨 No environment specified. Please provide one of the following environments:"
        for env in $(get_available_envs "$filter"); do
            echo "  ➡️ $env"
        done
        exit 1
    fi

    if ! get_available_envs "$filter" | grep -w -q "$1"; then
        echo "\n🚨 Invalid environment: '$1'. Available environments are:"
        for env in $(get_available_envs "$filter"); do
            echo "  ➡️ $env"
        done
        exit 1
    fi
}
