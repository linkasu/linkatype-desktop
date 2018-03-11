import EventEmmiter from 'events'

import axios from 'axios'
import semver from 'semver-compare'


class Updater extends EventEmmiter {
	constructor(version) {
		super()
		this.server = 'http://aacidov.ru'
		this.path = '/apps/distype'
		this.url = this.server + this.path;

		this.version = version
		setInterval(this.check, 60 * 60 * 12 * 1000)
	}
	async check() {
		try {

			let {
				version
			} = (await axios.get(this.url + '/version')).data
			if (semver(version, this.version) === 1) {
				this.emit('newversion', version, this.url + '/latest')
			}

		} catch (error) {
			console.error(error);
			throw new Error('can\'t check update')
		}
	}
}

export default Updater
