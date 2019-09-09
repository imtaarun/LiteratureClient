import { HttpHeaders } from '@angular/common/http';

export const GET_HEADERS = {

    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),

    responseType: 'json' as 'json'
};

export const GET_HEADERS_TEXT = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
    responseType: 'text' as 'json'
};
