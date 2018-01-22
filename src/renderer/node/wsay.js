import path from 'path'
import os from 'os'
import fs from 'fs-extra'
import { execFile } from 'child_process'

const bin = path.join(__static, '/bin/voice.exe')
const tmp = path.join(os.tmpdir(), '/say.txt')

let proc

export default {
	speak: async(text) => {
		try {
			await fs.outputFile(tmp, text)
			proc = execFile(bin, ['-v', 100, '-k', tmp], (err) => {
				if (err) console.log(err)
			})

		} catch (e) {
			console.error(e)
		}
	},
	stop() {
		proc.kill(-8)
	}
}
