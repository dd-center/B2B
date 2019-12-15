# B2B

Get live streams from Bilibili use this tiny proxy server.

## Features

- Get live streams of **ALL ROOMS** from Bilibili

- Switch between sources if one source isn't good

- Use it on **ALL PLATFORMS**

- The app is **TINY** as it's only 1kb

## Requirements

**NODE ONLY**. You don't have to install npm or other packages.

## Installation

Install as the way you want.

- `node index`

- `pm2 start index`

- `docker run -d -p 2002:2002 afanyiyu/b2b`

## Usage

Open a player you like which supports stream playing, then play:

`http://localhost:2002/{room}?source={source}`

For example:

`http://localhost:2002/1?source=1`

You can switch from sources if one source is not good.

## FAQ

Feel free to create issues or ask questions.

## LICENSE

MIT
