export interface Invoice {
  /**
   * Just a long string.
   */
  data: string;
  /**
   * Usually 90 seconds.
   */
  expiryTime: number;
  /**
   * An uuid.
   */
  id: string;
}

export interface PaymentInfo {
  /**
   * Usually 5 minutes.
   */
  expiryTime: number;
  /**
   * Just an email.
   */
  paypalEmail: string;
}
