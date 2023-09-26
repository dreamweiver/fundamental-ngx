import { Routes } from '@angular/router';
import { MOBILE_MODE_CONFIG } from '@fundamental-ngx/core/mobile-mode';
import {
    COMBOBOX_MOBILE_CONFIG,
    configureRoutes,
    CURRENT_LIB,
    MENU_MOBILE_CONFIG,
    MULTI_INPUT_MOBILE_CONFIG,
    POPOVER_MOBILE_CONFIG,
    SEARCH_FIELD_MOBILE_CONFIG,
    SELECT_MOBILE_CONFIG,
    StackblitzService
} from '@fundamental-ngx/docs/shared';
import { API_FILES } from './api-files';
import { sections } from './docs-data';

const configureCdkRoutes = configureRoutes(API_FILES);

// BEING UPDATED WITH THE SAP-COMPONENT SCHEMATIC; DO NOT MODIFY THE STRUCTURE!
export const ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('@fundamental-ngx/docs/shared-pages').then((m) => m.LibraryDocShellPageComponent),
        data: {
            sections
        },
        providers: [
            // @todo Needs schema module!
            StackblitzService,
            { provide: CURRENT_LIB, useValue: 'cdk' },
            { provide: MOBILE_MODE_CONFIG, useValue: MENU_MOBILE_CONFIG, multi: true },
            { provide: MOBILE_MODE_CONFIG, useValue: SELECT_MOBILE_CONFIG, multi: true },
            { provide: MOBILE_MODE_CONFIG, useValue: COMBOBOX_MOBILE_CONFIG, multi: true },
            { provide: MOBILE_MODE_CONFIG, useValue: MULTI_INPUT_MOBILE_CONFIG, multi: true },
            { provide: MOBILE_MODE_CONFIG, useValue: POPOVER_MOBILE_CONFIG, multi: true },
            { provide: MOBILE_MODE_CONFIG, useValue: SEARCH_FIELD_MOBILE_CONFIG, multi: true }
        ],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadComponent: () =>
                    import('@fundamental-ngx/docs/shared-pages').then((m) => m.LibraryReadmePageComponent)
            },
            {
                path: 'new-component',
                loadComponent: () =>
                    import('@fundamental-ngx/docs/shared-pages').then((m) => m.NewComponentPageComponent)
            },
            {
                path: 'control-value-accessor',
                loadChildren: () => import('@fundamental-ngx/docs/cdk/forms').then(configureCdkRoutes)
            },
            {
                path: 'data-source',
                loadChildren: () => import('@fundamental-ngx/docs/cdk/data-source').then(configureCdkRoutes)
            },
            {
                path: 'drag-n-drop',
                loadChildren: () => import('@fundamental-ngx/docs/cdk/drag-n-drop').then(configureCdkRoutes)
            },
            {
                path: 'focusable-item',
                loadChildren: () => import('@fundamental-ngx/docs/cdk/focusable-item').then(configureCdkRoutes)
            },
            {
                path: 'selectable-list',
                loadChildren: () => import('@fundamental-ngx/docs/cdk/selectable-list').then(configureCdkRoutes)
            },
            {
                path: 'focusable-list',
                loadChildren: () => import('@fundamental-ngx/docs/cdk/focusable-list').then(configureCdkRoutes)
            },
            {
                path: 'focusable-grid',
                loadChildren: () => import('@fundamental-ngx/docs/cdk/focusable-grid').then(configureCdkRoutes)
            },
            {
                path: 'disabled',
                loadChildren: () => import('@fundamental-ngx/docs/cdk/disabled').then(configureCdkRoutes)
            },
            {
                path: 'clicked',
                loadChildren: () => import('@fundamental-ngx/docs/cdk/clicked').then(configureCdkRoutes)
            },
            {
                path: 'tabbable',
                loadChildren: () => import('@fundamental-ngx/docs/cdk/tabbable').then(configureCdkRoutes)
            },
            {
                path: 'initial-focus',
                loadChildren: () => import('@fundamental-ngx/docs/cdk/initial-focus').then(configureCdkRoutes)
            },
            {
                path: 'breakpoint',
                loadChildren: () => import('@fundamental-ngx/docs/cdk/breakpoint').then(configureCdkRoutes)
            }
        ]
    }
];
