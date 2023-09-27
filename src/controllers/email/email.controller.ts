import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	Param,
	Post,
	Put,
	Query,
	UploadedFile,
	UseInterceptors,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { EmailService } from '../../services/email/email.service';



@ApiTags('Email')
@Controller('email')
export class EmailController {
	constructor(private emailService: EmailService) {}


	@Post('/sendEmail')
	async sendEmail() {
		try {
			console.log('hits');
			const email = await this.emailService.sendEmail();
			return email;
		} catch (e) {
			throw new HttpException(e.message || 'Server Error', e.status || 500);
		}
	}
}
