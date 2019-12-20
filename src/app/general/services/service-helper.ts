import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isEmpty } from 'lodash';

import { ACCOUNT_API_PATH, API_ENDPOINTS } from '../../general/constants/api-paths';

@Injectable()
export class ServiceHelper<T>{
    constructor(private httpClient: HttpClient) { }

    public getAll(endpoint: API_ENDPOINTS): Promise<T[]> {
        return new Promise<T[]>(
            (resolve, reject) => {
                const url: string = `${ACCOUNT_API_PATH}${endpoint}`;

                this.httpClient
                    .get(url)
                    .toPromise()
                    .then((response: T[]) => {
                        if (isEmpty(response)) { reject(null) };
                            
                        resolve(response as T[]);
                    })
                    .catch((error: any) => {
                        reject(error);
                    });
            }
        );
    }
}