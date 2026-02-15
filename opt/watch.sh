#!/bin/bash
inotifywait -e close_write,moved_to,create -m 'src/' | while read -r directory events filename; do bun run build; done
