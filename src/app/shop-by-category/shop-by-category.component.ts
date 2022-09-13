import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IFeaturedCategory } from '../models/featuredCategory';
import { IProductDetails } from '../models/productDetails';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css']
})
export class ShopByCategoryComponent implements OnInit {


  featuredCategory1: IFeaturedCategory = {
    data: {
      categoryName: '',
      products: []
    },
    message: '',
    errorList: []
  };
  featuredCategory2: IFeaturedCategory = {
    data: {
      categoryName: '',
      products: []
    },
    message: '',
    errorList: []
  };
  featuredCategory3: IFeaturedCategory = {
    data: {
      categoryName: '',
      products: []
    },
    message: '',
    errorList: []
  };
  featuredCategory4: IFeaturedCategory = {
    data: {
      categoryName: '',
      products: []
    },
    message: '',
    errorList: []
  };
  featuredCategory5: IFeaturedCategory = {
    data: {
      categoryName: '',
      products: []
    },
    message: '',
    errorList: []
  };
  featuredCategory6: IFeaturedCategory = {
    data: {
      categoryName: '',
      products: []
    },
    message: '',
    errorList: []
  };
  featuredCategory7: IFeaturedCategory = {
    data: {
      categoryName: '',
      products: []
    },
    message: '',
    errorList: []
  };
  featuredCategory8: IFeaturedCategory = {
    data: {
      categoryName: '',
      products: []
    },
    message: '',
    errorList: []
  };
  featuredCategory9: IFeaturedCategory = {
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
    this.productService.getFeaturedCategory(41).subscribe({
      next: (response) => {
        this.featuredCategory1 = response;
      }
    })
    this.productService.getFeaturedCategory(44).subscribe({
      next: (response) => {
        this.featuredCategory2 = response;
      }
    })
    this.productService.getFeaturedCategory(46).subscribe({
      next: (response) => {
        this.featuredCategory3 = response;
      }
    })
    this.productService.getFeaturedCategory(43).subscribe({
      next: (response) => {
        this.featuredCategory4 = response;
      }
    })
    this.productService.getFeaturedCategory(39).subscribe({
      next: (response) => {
        this.featuredCategory5 = response;
      }
    })

    this.productService.getFeaturedCategory(37).subscribe({
      next: (response) => {
        this.featuredCategory6 = response;
      }
    })
    this.productService.getFeaturedCategory(37).subscribe({
      next: (response) => {
        this.featuredCategory7 = response;
      }
    })
    this.productService.getFeaturedCategory(42).subscribe({
      next: (response) => {
        this.featuredCategory8 = response;
      }
    })
    this.productService.getFeaturedCategory(47).subscribe({
      next: (response) => {
        this.featuredCategory9 = response;
      }
    })
  
  }


  handleClick( id:number) {
   // this.router.navigate([`product-listing`,{category: JSON.stringify(featuredCategory)}]);
   this.router.navigateByUrl(`product-listing/${id}`);
   
  }

  handleClickExplore() { }

}
