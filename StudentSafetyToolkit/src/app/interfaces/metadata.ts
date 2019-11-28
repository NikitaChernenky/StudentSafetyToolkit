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
  }
export interface Link {
    name: string;
    description: string;
    url: string;
    icon: string;
    filename: string;
  }

export interface Contact {
    name: string;
    number: string;
  }
