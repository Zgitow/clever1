#!/bin/sh
UUID=${UUID:-'ce8f568f-191a-457c-a969-d9000d6fe19f'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
