import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFeaturedCategory } from '../models/featuredCategory';
import { IProduct } from '../models/product';
import { IProductDetails } from '../models/productDetails';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-featured-category1',
  templateUrl: './featured-category1.component.html',
  styleUrls: ['./featured-category1.component.css']
})
export class FeaturedCategory1Component implements OnInit {
  featuredCategory: IFeaturedCategory = {
    data: {
      categoryName: '',
      products: []
    },
    message: '',
    errorList: []
  };
  featuredProducts: IProductDetails[] = [];
  constructor(private router: Router, private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getFeaturedCategory().subscribe({
      next: (response) => {
        this.featuredCategory = response;
      }
    })
  }

  handleClick() {
    this.router.navigate(['productDetails']);
  }

  handleClickExplore() { }

}
