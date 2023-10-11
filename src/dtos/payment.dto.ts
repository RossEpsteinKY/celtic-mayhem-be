import { ApiProperty } from '@nestjs/swagger';

export class PaymentDto {
    @ApiProperty()
    customerName: string;
    @ApiProperty()
    customerEmail: string;
    @ApiProperty()
    cartItems: string[];
    @ApiProperty()
    ccv: string;
    @ApiProperty()
    cardNumber: string;
    @ApiProperty()
    expMonth: string;
    @ApiProperty()
    expYear: string;



}