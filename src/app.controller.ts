import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
	@Get()
	getRootRout() {
		return 'hi there!'
	}
}
