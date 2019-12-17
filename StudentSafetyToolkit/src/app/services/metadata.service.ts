/*
Mykyta Chernenky
CS 455 - Mobile Computing
Metadata.service.ts
*/
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

  Types = TypesJSON; // For Risk Assessment
  SelectedType = this.Types[0];

  constructor(private http: HttpClient) {}

  // move to own service
  getContactsData(): Observable<Contact[]> { //get list of contacts
    return of(CONTACTS);
  }

  // move to own service
  getLinksData(): Observable<Link[]> { //get list of links
    return of(LINKS);
  }

  // For report incident disclaimer page
  getContactsFrontPageData(): Observable<Contact[]> { //Get last 2 contacts for Report Incident page
    const contacts = [CONTACTS[2], CONTACTS[3]];
    return of(contacts);
  }

  getIncidentsData(): Observable<Incident[]> { // Get Incidents list
    return of(INCIDENTS);
  }
}

