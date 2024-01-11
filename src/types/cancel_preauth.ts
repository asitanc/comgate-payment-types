/***************
 * COMGATE CANCEL PREAUTH PAYMENT TYPES
 * 
 * @source https://apidoc.comgate.cz/?lang=cs#cancelpreauth
 * @author asitanc
 * @date 2024-01-11 (YYYY-MM-DD)
 */

/**
 * Represents the essential details of a transaction in the Comgate system.
 */
interface IPaymentPreAuthCancel {
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

/**
 * Represents the response code and message for a method, along with error descriptions.
 */
interface IPaymentPreAuthCancelResponse {
  /**
   * The return code of the method and description of the error:
   * 0 - OK
   * 1100 - Unknown error
   * 1104 - Cannot load payment
   * 1200 - Database error
   * 1301 - Unknown e-shop
   * 1303 - Connection or language missing
   * 1399 - Unexpected result from the database
   * 1400 - Incorrect query
   * 1500 - Unexpected error
   */
  code: 0 | 1100 | 1104 | 1200 | 1301 | 1303 | 1399 | 1400 | 1500;

  /**
   * The associated message.
   */
  message: string;
};

export type {
  IPaymentPreAuthCancel,
  IPaymentPreAuthCancelResponse
}
