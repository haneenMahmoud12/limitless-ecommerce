import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFeaturedCategory } from '../models/featuredCategory';
import { IOffer } from '../models/offers';
import { IProduct } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.css']
})
export class OffersPageComponent implements OnInit {

  offersCategory: IOffer = {
    data: [],
    message: '',
    errorList: []
  }

  offersToDisplay: {
    "id": number,
    "name": string,
    "products": IProduct[]
  } = {
      "id": 0,
      "name": "",
      "products": []
    };
  constructor(private router: Router, private productService: ProductsService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.productService.getOffersCategories().subscribe({
      next: (response) => {
        this.offersCategory = response;
        this.findCategory();
      }
    })
  }

  findCategory() {
    for (let category of this.offersCategory.data) {
      if (category.id == parseInt(this.activatedRouter.snapshot.params['id'])) {
        this.offersToDisplay = category;
      }
    }
  }

}
