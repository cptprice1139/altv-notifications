import * as alt from 'alt-client';

let webview: alt.WebView = new alt.WebView('http://resource/client/html/index.html');

alt.onServer('notifications:create', (type: number, duration: number, title: string, message: string) => {
    if (webview) webview.emit('notifications:create', {id: 0, type: type, duration: duration, title: title, message: message});
})

export function CreateNotification(type: number, duration: number, title: string, message: string) {
    if (webview) webview.emit('notifications:create', {id: 0, type: type, duration: duration, title: title, message: message});
}