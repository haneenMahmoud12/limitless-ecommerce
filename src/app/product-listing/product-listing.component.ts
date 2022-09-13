import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { IFeaturedCategory } from '../models/featuredCategory';
import { ProductsService } from '../services/products.service';



@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  featuredCategory: IFeaturedCategory = {
    data: {
      categoryName: '',
      products: []
    },
    message: '',
    errorList: []
  };


  constructor(private route: Router, private router: ActivatedRoute, private productService: ProductsService) {
  }




  ngOnInit(): void {
    this.productService.getFeaturedCategory(this.router.snapshot.params['id']).subscribe({
      next: (response: IFeaturedCategory) => {
        this.featuredCategory = response;
      }
    })
  }
  handleClick(productId: number) {
    this.route.navigate([`productDetails/${productId}`])
  }
}


