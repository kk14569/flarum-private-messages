# Private Messages

A [Flarum](http://flarum.org) extension for adding private messages to your forum!

Private messages (PM's) are also known as "direct messages" (DM's). (e.g. "Send me a PM!" or "Send me a DM!")

![Flarum Private Messages screenshot](https://raw.githubusercontent.com/neoncube2/flarum-private-messages/main/resources/screenshot.jpg)

## Installation

	composer remove kyrne/whisper --no-update
	composer remove littlecxm/whisper --no-update
    composer require neoncube/flarum-private-messages:"*"

## Updating

    composer update neoncube/flarum-private-messages
    php flarum migrate
    php flarum cache:clear

## Links

- [Report an issue via Flarum forums](https://discuss.flarum.org/d/35388-private-messages)
- [Report an issue via Github](https://github.com/neoncube2/flarum-private-messages/issues)

## Credits

Thank you to [Kyrne](https://redevs.org), who made the original [Whisper](https://flarum.org/index.php/extension/kyrne/whisper) extension, which this extension is mostly based off of!

Thank you to [David Wheatleu](https://davwheat.dev) and [CXM](https://littlecxm.me/) for their many bug fixes and contributions!

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/neoncube/flarum-private-messages/blob/master/LICENSE)