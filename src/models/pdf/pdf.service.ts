import * as puppeteer from 'puppeteer';
import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';

@Injectable()
export class PDFGenerationService {
  async generatePDF(html: string): Promise<Readable> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);

    // Generate PDF as Readable
    const pdfStream = Readable.from(await page.pdf({ format: 'A4' }));

    await browser.close();

    return pdfStream;
  }
}
