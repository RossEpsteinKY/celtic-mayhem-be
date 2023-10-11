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
import {PaymentService} from "../../services/payment/payment.service";
import {PaymentDto} from "../../dtos/payment.dto";




@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
	constructor(private paymentService: PaymentService) {}


	@Post('/sendPayment')
	async sendPayment(
		@Body()
			bodyData: PaymentDto
	) {
		try {
					const paymentToSend = await this.paymentService.sendPayment(bodyData);
					return paymentToSend;
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
