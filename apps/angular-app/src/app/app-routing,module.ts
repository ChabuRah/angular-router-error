import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
	{
		path: "post",
		loadChildren: () =>
			import("@route-err/post").then(
				(module) => module.PostModule
			),
		data: { title: "post" },
	},
	{
		path: "topic",
		loadChildren: () =>
			import("@route-err/topic").then(
				(module) => module.TopicModule
			),
		data: { title: "topic" },
	},
	{
		path: "home",
		loadChildren: () =>
			import("@route-err/home").then(
				(module) => module.HomeModule
			),
		data: { title: "home" },
	},
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
		data: { title: "home" },
	},
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forRoot(appRoutes, {
			initialNavigation: "enabled",
			relativeLinkResolution: "legacy",
			scrollPositionRestoration: "enabled",
		}),
		CommonModule,
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
