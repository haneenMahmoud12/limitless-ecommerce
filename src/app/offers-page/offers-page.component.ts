import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFeaturedCategory } from '../models/featuredCategory';
import { IOffer } from '../models/offers';
import { IProduct } from '../models/product';
import { ProductsService } from '../services/products.service';
import { ShopService } from '../services/shop.service';

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

  listView: boolean = true;
  gridView: boolean = false;
  constructor(private router: Router, private productService: ProductsService, private activatedRouter: ActivatedRoute, private shopService: ShopService) { }

  ngOnInit(): void {

    this.productService.getOffersCategories().subscribe({
      next: (response) => {
        this.offersCategory = response;
        this.findCategory();
      }
    })
  }

  public findCategory() {
    for (let category of this.offersCategory.data) {
      if (category.id == parseInt(this.activatedRouter.snapshot.params['id'])) {
        this.offersToDisplay = category;
      }
    }
  }

  public handleClick(id: number) {
    this.router.navigate([`productDetails/${id}`])
  }

  public setGridView() {
    this.listView = true;
    this.gridView = false;
  }
  public setListView() {
    this.gridView = true;
    this.listView = false;
  }
}
