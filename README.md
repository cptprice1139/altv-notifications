# altv-notifications

![](preview.gif)

## Features

With this resource you can create notifications, like shown above.

## Install

To install this script, just download the latest release or download the repository

## Usage

You can either create them clientside with [CreateNotification](https://github.com/elsucco/altvnotifications/blob/28b4d64664b879e67fe44c377b2259455a40ce13/src/client/index.ts#L9):

```
export function CreateNotification(type: number, duration: number, title: string, message: string) {
    if (webview) webview.emit('notifications:create', {id: 0, type: type, duration: duration, title: title, message: message});
}
```

Or you can just emit from server [here](https://github.com/elsucco/altv-notifications/blob/28b4d64664b879e67fe44c377b2259455a40ce13/src/client/index.ts#L5):

```
alt.onServer('notifications:create', (type: number, duration: number, title: string, message: string) => {
    if (webview) webview.emit('notifications:create', {id: 0, type: type, duration: duration, title: title, message: message});
})
```

Example:

```
alt.emitClient(player, 'notifications:create', 0, 5, 'My title', 'My super cool message');
```

Notification types:

| Type  | Number |
| ------| ------ |
| Information | 0 |
| Announcement | 1 |
| Success | 2 |
| Warning | 3 |
| Error | 4 |

## IMPORTANT: `duration` must be seconds not ms

# I hope you enjoy my small script

