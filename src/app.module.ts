import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiddleWare } from './logger.middleware';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})

// with no middleware >>>
// export class AppModule {}

// with middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // inside the exported class that now extends nestmodule interface
    // we pass in the middlewareconsumer as 'consumer' into a configure function
    consumer
      // the consumer is a helper class that we passed in
      // and it has methods to manage middleware
      // these methods can be chained
      .apply(MiddleWare) // the middleware function we are applying
      .forRoutes({ path: 'pokemon', method: RequestMethod.GET }); // can specificy specific routes/req methods to apply it to
  }
}

// functional application of middleware
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(logger).forRoutes(CatsController);
//   }
// }
