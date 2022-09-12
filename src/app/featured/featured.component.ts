import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFeaturedCategory } from '../models/featuredCategory';
import { IProduct } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  featuredCategory: IFeaturedCategory = {
    data: {
      categoryName: '',
      products: []
    },
    message: '',
    errorList: []
  };
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getFeaturedCategory(41).subscribe({
      next: (response) => {
        this.featuredCategory = response;
      }
    })
  }

  handleClick(id: number) {
    this.router.navigate([`productDetails/${id}`]);
  }
}
