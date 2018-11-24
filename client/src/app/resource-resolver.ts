import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';

export class ResourceResolver {

    private basePath: string = environment.apiUrl;
    private resourcePath: string;

    constructor(private resource: string) {
        this.resourcePath = this.appendToPath(resource, this.basePath);
    }

    resolveEndpoint(id?: string): string {
        return id ? this.appendToPath(id, this.resourcePath) : this.resourcePath;
    }

    private appendToPath(append: string, toPath: string) {
        return toPath + '/' + append;
    }
}
