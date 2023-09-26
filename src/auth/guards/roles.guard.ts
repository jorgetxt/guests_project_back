import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../decorators/roles.decorator';
import matchRoles from '../hooks/useMatchRoles';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      console.log('role guard');

      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log('role guard', user);
    return matchRoles(roles, user.rol);
  }
}
