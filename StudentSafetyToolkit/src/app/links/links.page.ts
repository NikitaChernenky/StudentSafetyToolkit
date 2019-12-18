/*
Mykyta Chernenky
CS 455 - Mobile Computing
Links.ts
*/

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MetadataService } from 'src/app/services/metadata.service';
import { Link } from 'src/app/interfaces/metadata';
import { File } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: ['./links.page.scss'],
})
export class LinksPage implements OnInit {
  links: Link[];
  constructor(
    public navCtrl: NavController,
    private dataService: MetadataService,
    private document: DocumentViewer,
    private file: File
  ) { }

  ngOnInit() {
    this.getLinks(); // retrieve the list of links on load
  }

  getLinks(): void { // retrieves the list of links
    this.dataService
      .getLinksData()
      .subscribe(links => (this.links = links));
  }

  onClick(link): void { // on click - opens a stored PDF file
   // if (link.url === 'actual-link') {
     if(link.filename !== '') { // if file name isnt empty (checks if it's not a link)
     this.openlocalPDF(link.filename); // open file
    } else { // if it;s a link
      window.open(link.url, '_system', 'location=yes'); // open link
    }
  }

  openlocalPDF(filename: string) { // opens ocally stored PDF
    const filePath = this.file.applicationDirectory + 'public/assets/links/'; // directory where files are stored
    const pdfFile = filename.concat('.pdf'); // add .pdf extension to the end of the path
    const options: DocumentViewerOptions = {
      title: filename // set doc title to its filename
    };

    this.file
    .checkFile(filePath, pdfFile) // check if file exists
    .then(_ =>     this.document.viewDocument( // if exists then
      `${filePath}${pdfFile}`, // jQuery like concatenatuin of path and name
      'application/pdf', // extension
      options // take in account specified options
    ))
    .catch(err => console.log(`${filename} doesn't exist`)); // in case file doesnt exist
  }

}
