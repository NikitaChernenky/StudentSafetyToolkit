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
    this.getLinks();
  }

  getLinks(): void {
    this.dataService
      .getLinksData()
      .subscribe(links => (this.links = links));
  }

  onClick(link): void {
   // if (link.url === 'actual-link') {
     if(link.filename !== '') {
     this.openlocalPDF(link.filename);
    } else {
      window.open(link.url, '_system', 'location=yes');
    }
  }

  openlocalPDF(filename: string) {
    const filePath = this.file.applicationDirectory + 'public/assets/links/';
    const pdfFile = filename.concat('.pdf');
    const options: DocumentViewerOptions = {
      title: filename
    };

    this.file
    .checkFile(filePath, pdfFile)
    .then(_ =>     this.document.viewDocument(
      `${filePath}${pdfFile}`,
      'application/pdf',
      options
    ))
    .catch(err => console.log(`${filename} doesn't exist`));
  }

}
