/***************
 * COMGATE PAYMENT STATUS TYPES
 * 
 * @source https://apidoc.comgate.cz/?lang=cs#status
 * @author asitanc
 * @date 2024-01-11 (YYYY-MM-DD)
 */

/**
 * Interface representing a transaction in the Comgate system.
 */
interface IPaymentStatus {
  /**
   * The identifier of the e-shop in the Comgate system.
   */
  merchant: string;

  /**
   * A unique alphanumeric identifier (code) for the transaction.
   */
  transId: string;

  /**
   * The password for background communication.
   */
  secret: string;
}


/**
 * Interface for the success response when code is 0.
 */
interface IPaymentStatusResponse {
  code: string;
  message: '0' | '1100' | '1200' | '1400' | '1500';
  merchant: string;
  test: string;
  price: string;
  curr: string;
  label: string;
  refId: string;
  payerId?: string;
  method?: string;
  account?: string;
  email: string;
  name?: string;
  transId: string;
  secret: string;
  status: 'PENDING' | 'PAID' | 'CANCELLED' | 'AUTHORIZED';
  payerName?: string;
  payerAcc?: string;
  fee?: string;
  vs?: string;
}

export type { 
  IPaymentStatus,
  IPaymentStatusResponse
}
