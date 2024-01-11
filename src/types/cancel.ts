/***************
 * COMGATE CANCEL PAYMENT TYPES
 * 
 * @source https://apidoc.comgate.cz/?lang=cs#cancel
 * @author asitanc
 * @date 2024-01-11 (YYYY-MM-DD)
 */

interface IPaymentCancel {
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
};

interface IPaymentCancelResponse {
  /**
   * Return code of the method and error description:
   * 0 OK
   * 1400 unable to switch payment to cancel status (payment not found, payment is not in pending status, unauthorized access)
   */
  code: 0 | 1400;

  /**
   * Message associated with the response code.
   */
  message: string;
};

export type {
  IPaymentCancel,
  IPaymentCancelResponse
}