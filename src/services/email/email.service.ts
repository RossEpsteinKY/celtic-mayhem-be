

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
	

	async sendEmail() {

		console.log('hits endpoint')
		return "okay";


		}
}
