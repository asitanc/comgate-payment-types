/***************
 * COMGATE PAYMENT REFUND TYPES
 * 
 * @source https://apidoc.comgate.cz/?lang=cs#refund
 * @author asitanc
 * @date 2024-01-11 (YYYY-MM-DD)
 */

/**
 * Represents the details of a refund transaction in the Comgate system.
 */
interface IPaymentRefund {
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

  /**
   * The amount of the refund – can be full or partial amount of the transaction.
   */
  amount: string;

  /**
   * The currency of the refund. Defaults to 'CZK' if not specified.
   */
  curr?: string;

  /**
   * Indicates if the refund is a test ('true') or actual ('false'). Defaults to actual if not provided.
   * Test transactions can only be refunded as a test.
   */
  test?: string;

  /**
   * An identifier for the refund on the client's side. It does not need to be unique, meaning multiple refunds can have the same refId.
   * In the client's portal, this parameter is marked as the client's ID in the refunds section and daily csv.
   * If this parameter is not attached to the refund, the original refId of the payment will be displayed.
   */
  refId?: string;
};

/**
 * Represents the response code and message for a method in the system.
 */
interface IPaymentRefundResponse {
  /**
   * The return code of the method and description of the error:
   * 0 - OK
   * 1100 - Unknown error
   * 1200 - Database error
   * 1400 - Incorrect query
   * 1401 - Refunded payment is in CANCELLED state
   * 1402 - Amount exceeds allowed limit
   * 1500 - Unexpected error
   */
  code: 0 | 1100 | 1200 | 1400 | 1401 | 1402 | 1500;

  /**
   * The message associated with the response.
   */
  message: string;
};

export type {
  IPaymentRefund,
  IPaymentRefundResponse
}
