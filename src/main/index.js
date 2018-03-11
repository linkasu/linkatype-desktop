import {
	app,
	BrowserWindow,
	Menu,
	shell,
	dialog
} from 'electron'

import defaultMenu from 'electron-default-menu';

import Updater from './update'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
	global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development' ?
	`http://localhost:9080` :
	`file://${__dirname}/index.html`

function createWindow() {
	/**
	 * Initial window options
	 */
	mainWindow = new BrowserWindow({
		height: 563,
		useContentSize: true,
		width: 1000
	})
	mainWindow.loadURL(winURL)

	mainWindow.on('closed', () => {
		mainWindow = null
	})
	const menu = defaultMenu(app, shell);

	Menu.setApplicationMenu(Menu.buildFromTemplate(menu));



}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow()
	}
})

const updater = new Updater(app.getVersion());

updater.on('newversion', (version, url) => {
	const dialogOpts = {
		type: "info",
		buttons: ["Загрузить", "Не сейчас"],
		title: "Обновление",
		message: "Обновление приложения",
		detail: `Вышла новая версия приложения ${version}, пожалуйста, скачайте и установите ее`
	};
	dialog.showMessageBox(dialogOpts, response => {
		if(response===0) {
			shell.openExternal(url)
		}
	});

})

updater.check()