import { Module } from '@nestjs/common';
import { PDFGenerationService } from './pdf.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PDFGenerationService],
  exports: [PDFGenerationService],
})
export class PDFModule {}
