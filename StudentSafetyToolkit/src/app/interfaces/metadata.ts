/*
Mykyta Chernenky
CS 455 - Mobile Computing
Metadata.ts
*/
export interface Metadata { 
    appName: string;
    appId: string;
    version: string;
    build: string;
    checkAppVersion: boolean;
    wrongAppVersionRule: string;
    releasedate: string;
    env: string;
    envEndpoints: any;
    envUsers: any;
    wrongAppVersionWarnMsg: string;
    wrongAppVersionDisableMsg: string;
    links: Link[];
    contacts: Contact[];
    incidents: Incident[];
  }
export interface Link { //interface for Links
    name: string;
    description: string;
    url: string;
    icon: string;
    filename: string;
  }

export interface Contact { //interface for Contacts
    name: string;
    number: string;
  }

export interface Incident { //interface for incidents
    title: string;
    description: string;
  }
