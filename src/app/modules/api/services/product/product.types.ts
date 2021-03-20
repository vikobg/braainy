import {PagingMetaData} from "../../../shared/shared.types";

export interface Product {
  organization: string;
  name: string;
  description: string;
  account: string;
  productNo: string;
  suppliersProductNo: string;
  salesTaxRuleset: string;
  isArchived: boolean;
  prices: Price[];
}

export interface Price {
  unitPrice: number;
  currencyId: string;
}

export interface CreateProductRequest {
  product: {
    organizationId: string;
    name: string;
    accountId: string;
    salesTaxRulesetId: string;
    prices: Price[]
  }
}

export interface GetProductsResponse {
  meta: {
    paging: PagingMetaData
  },
  products: Product[]
}
