/*
Mykyta Chernenky
CS 455 - Mobile Computing
Metadata.ts - manages all data files and has a back up vopy of the data in case the data files are not accessible
*/

import { Metadata } from '../interfaces/metadata';

export const METADATA: Metadata = {
  appName: 'Student Safety ToolKit',
  appId: 'studentsafetytoolkit',
  build: '1',
  version: '1.0.0',
  checkAppVersion: false,
  wrongAppVersionRule: '',
  releasedate: 'Dec 4 2019',
  env: 'SBX',
  envEndpoints: {},
  envUsers: {},
  wrongAppVersionWarnMsg: '',
  wrongAppVersionDisableMsg: '',
  links: [
    {
        name: 'UofR Safety Link',
        description: 'Lorem Ipsum',
        url:
          'https://www.uregina.ca/',
        icon: 'link',
        filename : ''
      },
      {
        name: 'UofR Safety Link',
        description: 'Lorem Ipsum',
        url:
          'https://www.uregina.ca/',
        icon: 'link',
        filename : ''
      },  {
        name: 'UofR Safety Link',
        description: 'Lorem Ipsum',
        url:
          'https://www.uregina.ca/',
        icon: 'link',
        filename : ''
      },  {
        name: 'UofR Safety Link',
        description: 'Lorem Ipsum',
        url:
          'https://www.uregina.ca/',
        icon: 'link',
        filename : ''
      },  {
        name: 'UofR Safety Link',
        description: 'Lorem Ipsum',
        url:
          'https://www.uregina.ca/',
        icon: 'link',
        filename : ''
      },  {
        name: 'UofR Safety Link',
        description: 'Lorem Ipsum',
        url:
          'https://www.uregina.ca/',
        icon: 'link',
        filename : ''
      },  {
        name: 'UofR Safety Link',
        description: 'Lorem Ipsum',
        url:
          'https://www.uregina.ca/',
        icon: 'link',
        filename : ''
      },  {
        name: 'UofR Safety Link',
        description: 'Lorem Ipsum',
        url:
          'https://www.uregina.ca/',
        icon: 'link',
        filename : ''
      },
  ],

  contacts: [
    {
        name: 'Campus Security',
        number: '+1 (306) 999-9999'
      },
      {
        name: 'Science Faculty Safety Department',
        number: '+ 1 (306) 999-9998'
      },
      {
        name: 'UofR Safety Department',
        number: '+1 (999) 999-9997'
      },
      {
        name: 'First Aid Line (24 HRS)',
        number: '+1 (999) 999-9996'
      }
  ],

  incidents: [
    {
        title: 'Injury',
        description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.'
      },
      {
        title: 'Notice of Violation',
        description: '+ Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin lacus.'
      },
      {
        title: 'Property',
        description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin lacus dolor, mattis at tortor eu.'
      },
      {
        title: 'Violence',
        description: '+1 (999) 999-9996'
      },
      {
        title: 'Lorem Ipsum',
        description:
          'Interdum et malesuada fames ac ante ipsum primis.'
      }
  ]
};
