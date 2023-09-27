

// const request = require('request');
// const AWS = require('aws-sdk');
// const s3 = new AWS.S3();
require('dotenv').config();
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {IsNull, Not, Repository} from 'typeorm';
import fetch from "node-fetch" ;


@Injectable()
export class EmailService {
	
	constructor(

	) {}
	

	async sendEmail(bodyData) {
		const Mailjet = require('node-mailjet');

		// console.log('hits endpoint with: ' + bodyData.name, bodyData.email, bodyData.emailBody)

		const mailjet = new Mailjet({
			apiKey: process.env.MJ_APIKEY_PUBLIC,
			apiSecret: process.env.MJ_APIKEY_PRIVATE
		});

		const request = mailjet
			.post('send', { version: 'v3.1' })
			.request({
				Messages: [
					{
						From: {
							Email: "rossepsteinforge@gmail.com",
							Name: "Ross Epstein"
						},
						To: [
							{
								Email: "rossepsteinforge@gmail.com",
								Name: "Ross Epstein"
							}
						],
						Subject: "Celtic Mayhem Contact Form from sender " + bodyData.name,
						TextPart: `You received a message from ${bodyData.name} with the email address ${bodyData.email}.
						
						  
						The message says: ${bodyData.emailBody}`,
						HTMLPart: `<h4>You received a message from ${bodyData.name} with the email address ${bodyData.email}.   
						The message says: <br /> <br /> ${bodyData.emailBody}</h4>`
					}
				]
			})

		request
			.then((result) => {
				console.log(result.body);
				return result;
			})
			.catch((err) => {
				console.log(err.statusCode)
		})



		}
}
