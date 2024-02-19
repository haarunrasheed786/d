// addbulk.component.ts

import { Component, ViewChild, ElementRef } from '@angular/core';
import { BulkService } from "../bulkservice/bulk.service";

@Component({
  selector: 'app-addbulk',
  templateUrl: './addbulk.component.html',
  styleUrls: ['./addbulk.component.css']
})
export class AddBulkComponent {
  @ViewChild('fileInput') fileInput!: ElementRef | null;

  constructor(private bulkService: BulkService) { }

  browseFiles(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: any): void {
    const files: FileList | null = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      // You can perform additional checks/validation here if needed
      this.uploadFile(file);
    }
  }

  uploadFile(file: File): void {
    if (file) {
      this.bulkService.uploadCSV(file)
        .subscribe(
          (response) => {
            console.log('File uploaded successfully');
            // Optionally, you can do something with the response here
            // Clear the file input after successful upload
            if (this.fileInput) {
              this.fileInput.nativeElement.value = '';
            }
          },
          (error) => {
            console.error('Error uploading file:', error);
          }
        );
    } else {
      console.error('No file selected');
    }
  }
}
