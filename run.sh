#!/bin/bash

for (( i = 0; ; i++))
do
	if (($i % 3 == 0)) 
	then 
		osascript privatTunnelClick.scpt
	fi
	casperjs likebot.js
done
