import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IFeaturedCategory } from '../models/featuredCategory';
import { IProductDetails } from '../models/productDetails';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-featured-category1',
  templateUrl: './featured-category1.component.html',
  styleUrls: ['./featured-category1.component.css']
})
export class FeaturedCategory1Component implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    },
    nav: true
  }
  featuredCategory: IFeaturedCategory = {
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
  featuredProducts: IProductDetails[] = [];
  constructor(private router: Router, private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getFeaturedCategory(41).subscribe({
      next: (response) => {
        this.featuredCategory = response;
      }
    })

    this.productService.getFeaturedCategory(37).subscribe({
      next: (response) => {
        this.featuredCategory2 = response;
      }
    })
  }

  handleClick(id: number) {
    this.router.navigate([`productDetails/${id}`]);
  }

  handleClickExplore() {
    this.router.navigate([`featured/${41}`]);
  }

}
