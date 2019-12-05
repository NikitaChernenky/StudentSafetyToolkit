import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Incident2 } from '../classes/incident';
import { Observable, of } from 'rxjs';
import {
  Metadata,
  Contact,
  Link,
  Incident
} from '../interfaces/metadata';
import { CONTACTS } from '../data/contacts';
import { LINKS } from '../data/links';
import { INCIDENTS } from '../data/incidents';
import TypesJSON from '../data/risk-assessment-actions.json';
@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  Metadata: Metadata;

  Types = TypesJSON;
  SelectedType = this.Types[0];

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

  getIncidentsData(): Observable<Incident[]> {
    return of(INCIDENTS);
  }
}

