import { createAction } from "@reduxjs/toolkit";

export const fetchInvoiceFrom = createAction<{
  amount: number;
  id: string;
  userID: string;
}>("fetchInvoiceFrom");
