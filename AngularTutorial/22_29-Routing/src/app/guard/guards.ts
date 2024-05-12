import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanMatchFn, ResolveFn, RouterStateSnapshot } from '@angular/router';

// Old guard function before Angular 15 upgrade
/*
export class ExampleGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }
}
*/

// New guard function after Angular 15 upgrade
//CanActivateGuard
export const canActivateGuard: CanActivateFn = (route, state) => {
  console.log("CanActivateGuard is called");
  return true;
};

//CanActivateChildGuard
export const canActivateChildGuard: CanActivateChildFn = (route, state) => {
  console.log("CanActivateChildGuard is called");
  return false;
};

//CanDeactivateGuard
export const canDeactivateGuard: CanDeactivateFn<any> = (route, state) => {
  console.log("CanDeactivateGuard is called");
  return false;
};

//ResolveGuard
export const resolveGuard: ResolveFn<any> = (route, state) => {
  //inject http client
  const httpClient = inject(HttpClient);
  return httpClient.get("https://jsonplaceholder.typicode.com/photos");
};

//CanMatchGuard
export const isAdminGuard: CanMatchFn = (route, state) => {
  return !!localStorage.getItem("admin");
};

export const isUserGuard: CanMatchFn = (route, state) => {
  return !localStorage.getItem("admin");
};

