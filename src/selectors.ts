import uuid from "uuid";
import * as Schema from "./Schema";

export const selectInvoice =
  (id: string) =>
  (state: any): Schema.Invoice | null => {
    if (Math.random() > 0.5) {
      return {
        data: uuid.v1(),
        expiryTime: 90000,
        id,
      };
    } else {
      return null;
    }
  };

export const selectPaypalInfo =
  (userID: string) =>
  (state: any): Schema.PaymentInfo | null => {
    if (Math.random() > 0.5) {
      return {
        expiryTime: 450000,
        paypalEmail: "jsmith@gmail.com",
      };
    } else {
      return null;
    }
  };
