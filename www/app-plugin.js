import { App } from '@capacitor/app';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { GoogleSignIn } from '@capawesome/capacitor-google-sign-in';
import { SystemBars, SystemBarsStyle } from '@capacitor/core';
import html2pdf from 'html2pdf.js';

window.SmartMessApp = App;
window.SmartMessFiles = { Filesystem, Directory };
window.SmartMessShare = Share;
window.SmartMessGoogleSignIn = GoogleSignIn;
window.SmartMessSystemBars = SystemBars;
window.SmartMessPdf = html2pdf;

// Keep light (white) system-bar icons for the Smart-Mess green edge-to-edge header.
// Capacitor SystemBars also applies Android-safe inset handling from capacitor.config.json.
SystemBars.setStyle({ style: SystemBarsStyle.Dark }).catch(error => {
  console.warn('System bar style setup:', error);
});
