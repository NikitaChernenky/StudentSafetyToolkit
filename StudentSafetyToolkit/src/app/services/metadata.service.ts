import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  Metadata,
  Contact,
  Link
} from '../interfaces/metadata';
import { CONTACTS } from '../data/contacts';
import { LINKS } from '../data/links';
@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  Metadata: Metadata;

  // used for test purposes
  private metadataUrl = '../data/metadata.json';

  constructor(private http: HttpClient) {}

  // move to own service
  getContactsData(): Observable<Contact[]> {
    return of(CONTACTS);
  }

  // move to own service
  getLinksData(): Observable<Link[]> {
    return of(LINKS);
  }

  // For report incident disclaimer page
  getContactsFrontPageData(): Observable<Contact[]> {
    const contacts = [CONTACTS[2], CONTACTS[3]];
    return of(contacts);
  }
}

