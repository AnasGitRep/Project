import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone:true,
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {
  transform(originalPrice: number): string {
    const discountPercentage = 20; // Assuming the discount is always 20%
    const discountedPrice = originalPrice - (originalPrice * discountPercentage / 100);
    const discountAmount = originalPrice - discountedPrice;
    return `Discounted Price: $${discountedPrice.toFixed(2)} (${discountPercentage}%)`;
  }
}
