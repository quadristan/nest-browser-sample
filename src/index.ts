import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppService } from './app.service'

export async function main () {
  const app = await NestFactory.createApplicationContext(AppModule)
  const appService = app.get(AppService)
  process.stdout.write(appService.getHello())
}

main()
  .catch((e) => {
    console.trace(e)
  })
  .then(() => {
    process.stdout.write('Terminated')
  })
