import {
	RouteReuseStrategy,
	DetachedRouteHandle,
	ActivatedRouteSnapshot,
} from "@angular/router";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
	private handlers: { [key: string]: DetachedRouteHandle } = {};

	constructor() {}

	public shouldDetach(_route: ActivatedRouteSnapshot): boolean {
		return true;
	}

	public store(
		route: ActivatedRouteSnapshot,
		handle: DetachedRouteHandle
	): void {
		this.handlers[route.data.title] = handle;
	}

	public shouldAttach(route: ActivatedRouteSnapshot): boolean {
		return !!this.handlers[route.data.title];
	}

	public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
		return this.handlers[route.data.title];
	}

	public shouldReuseRoute(
		future: ActivatedRouteSnapshot,
		curr: ActivatedRouteSnapshot
	): boolean {
		return future.routeConfig === curr.routeConfig;
	}
}
