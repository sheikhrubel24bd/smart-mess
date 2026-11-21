import { App } from '@capacitor/app';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import html2pdf from 'html2pdf.js';

window.SmartMessApp = App;
window.SmartMessFiles = { Filesystem, Directory };
window.SmartMessShare = Share;
window.SmartMessPdf = html2pdf;
