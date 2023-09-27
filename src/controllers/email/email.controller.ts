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
import {EmailDto} from "../../dtos/email.dto";



@ApiTags('Email')
@Controller('email')
export class EmailController {
	constructor(private emailService: EmailService) {}


	@Post('/sendEmail')
	async sendEmail(
		@Body()
			bodyData: EmailDto
	) {
		try {
					const emailToSend = await this.emailService.sendEmail(bodyData);
					return emailToSend;
		} catch (e) {
			throw new HttpException(e.message || 'Server Error', e.status || 500);
		}
	}
	// @Post('/sendEmail')
	// async sendEmail(bodyData) {
	// 	try {
	// 		console.log('hits');
	// 		const emailToSend = await this.emailService.sendEmail(bodyData);
	// 		return emailToSend;
	// 	} catch (e) {
	// 		throw new HttpException(e.message || 'Server Error', e.status || 500);
	// 	}
	// }
}
