import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// some random logic to validate authentication
function validateRequest(req: Request) {
  console.log('validated? or not? maybe? who knows?');
  return true;
}

@Injectable()
// create a guard class (ex: authorization)
// implements the **CanActivate** function
// ALL GUARDS MUST IMPLEMENT THIS FUNCTION
export class Auth implements CanActivate {
  canActivate(
    context: ExecutionContext,
    // canActivate function takes the ExecutionContext as an argument
  ): boolean | Promise<boolean> | Observable<boolean> {
    // returns a boolean that says "allowed" or "not allowed"
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
