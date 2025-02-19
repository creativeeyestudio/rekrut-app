import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
    selector: 'app-pdf-viewer',
    templateUrl: './pdf-viewer.page.html',
    styleUrls: ['./pdf-viewer.page.scss'],
    imports: [IonicModule, CommonModule, FormsModule, PdfViewerModule]
})
export class PdfViewerPage {

  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  constructor() { }

}
