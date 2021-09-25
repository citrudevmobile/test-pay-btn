import { createAction } from "@reduxjs/toolkit";

export const fetchInvoiceFrom = createAction<{
  amount: number;
  id: string;
  userID: string;
}>("fetchInvoiceFrom");

export const refreshPaypalInfo = createAction<{
  userID: string;
}>("refreshPaypalInfo");
