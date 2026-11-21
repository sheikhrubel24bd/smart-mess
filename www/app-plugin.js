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

// Draw the app behind the Android status bar so the green header reaches the top.
StatusBar.setOverlaysWebView({ overlay: true }).catch(error => {
  console.warn('Status bar overlay setup:', error);
});
StatusBar.setStyle({ style: Style.Dark }).catch(error => {
  console.warn('Status bar style setup:', error);
});
