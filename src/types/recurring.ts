/***************
 * COMGATE RECURRING PAYMENT TYPES
 * 
 * @source https://apidoc.comgate.cz/?lang=cs#recurring
 * @author asitanc
 * @date 2024-01-11 (YYYY-MM-DD)
 */

/**
 * Represents the details for setting up a payment in the Comgate system.
 */
interface IPaymentRecurring {
  /**
   * The identifier of the e-shop in the Comgate system.
   */
  merchant: string;

  /**
   * The country code ('CZ', 'SK', 'PL', 'ALL'). Defaults to 'CZ' if not provided.
   */
  country?: 'CZ' | 'SK' | 'PL' | 'ALL';

  /**
   * Indicates if the payment is a test ('true') or production ('false'). Defaults to production if not provided.
   */
  test?: boolean;

  /**
   * The price of the product in cents or haler. Must be at least 10 CZK, no upper limit.
   */
  price: string;

  /**
   * The currency code according to ISO 4217, usually 'CZK'.
   */
  curr: string;

  /**
   * A short description of the product (1-16 characters).
   */
  label: string;

  /**
   * Payment reference in the e-shop system. It does not need to be unique.
   */
  refId: string;

  /**
   * Identifier of the e-shop's bank account where Comgate will transfer money. If not filled, the default account of the e-shop is used.
   */
  account?: string;

  /**
   * Contact email for the payer for potential claims.
   */
  email: string;

  /**
   * Identifier of the product - used for orientation in payment statistics of the Comgate payment system.
   */
  name?: string;

  /**
   * This parameter must have the value "true". Recurring payments cannot be set up via redirection.
   */
  prepareOnly: string;

  /**
   * The password for background communication.
   */
  secret: string;

  /**
   * Comgate ID of the initial payment.
   */
  initRecurringId: string;
};

/**
 * Represents the response code and associated details for a recurring payment transaction.
 */
interface IPaymentRecurringResponse {
  /**
   * Return code of the method and error description:
   * 0 OK
   * 1100 unknown error
   * 1102 specified language is not supported
   * 1103 incorrectly specified method
   * 1104 unable to load payment
   * 1200 database error
   * 1301 unknown e-shop
   * 1303 connection or language missing
   * 1304 invalid category
   * 1305 product description missing
   * 1308 selected payment method is not allowed
   * 1309 incorrect amount
   * 1310 unknown currency
   * 1311 invalid e-shop's bank account identifier
   * 1316 e-shop does not have recurring payments enabled
   * 1317 invalid method - does not support recurring payments
   * 1318 initiating payment was not found
   * 1319 unable to set up payment, problem on the bank's side
   * 1399 unexpected result from the database
   * 1400 incorrect query
   * 1500 unexpected error
   */
  code: 0 | 1100 | 1102 | 1103 | 1104 | 1107 | 1200 | 1301 | 1303 | 1304 | 1305 | 1306 | 1308 | 1309 | 1310 | 1311 | 1316 | 1317 | 1319 | 1399 | 1400 | 1500;
  
  /**
   * Message associated with the response code.
   */
  message: string;

  /**
   * Unique alphanumeric identifier (code) of the transaction, which will be displayed to the payer in various stages of the payment.
   */
  transId?: string;
};

export type {
  IPaymentRecurring,
  IPaymentRecurringResponse
}
