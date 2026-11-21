import { App } from '@capacitor/app';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { GoogleSignIn } from '@capawesome/capacitor-google-sign-in';
import { StatusBar, Style } from '@capacitor/status-bar';
import html2pdf from 'html2pdf.js';

window.SmartMessApp = App;
window.SmartMessFiles = { Filesystem, Directory };
window.SmartMessShare = Share;
window.SmartMessGoogleSignIn = GoogleSignIn;
window.SmartMessStatusBar = StatusBar;
window.SmartMessPdf = html2pdf;

// Keep light (white) status-bar icons on the Smart-Mess green background.
// Native StatusBar configuration handles the background before the WebView starts.
StatusBar.setStyle({ style: Style.Dark }).catch(error => {
  console.warn('Status bar style setup:', error);
});
