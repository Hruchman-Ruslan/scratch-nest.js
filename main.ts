import { Controller, Module, Get } from '@nestjs/common'

@Controller()
class AppController {
	@Get()
	getRootRout() {
		return 'hi there!'
	}
}
