/***************
 * COMGATE CREATE PAYMENT TYPES
 * 
 * @source https://apidoc.comgate.cz/?lang=cs#create
 * @author asitanc
 * @date 2024-01-11 (YYYY-MM-DD)
 */

type CountryType = 'AT' | 'BE' | 'CY' | 'CZ' | 'DE' | 'EE' | 'EL' | 'ES' | 'FI' | 'FR' | 'GB' | 'HR' | 'HU' | 'IE' | 'IT' | 'LT' | 'LU' | 'LV' | 'MT' | 'NL' | 'NO' | 'PL' | 'PT' | 'RO' | 'SL' | 'SK' | 'SV' | 'US' | 'ALL'
type LangType = 'cs' | 'sk' | 'en' | 'es' | 'it' | 'pl' | 'fr' | 'ro' | 'de' | 'hu' | 'si' | 'hr' | 'no' | 'sv'
type CurrType = 'CZK' | 'EUR' | 'PLN' | 'HUF' | 'USD' | 'GBP' | 'RON' | 'NOK' | 'SEK'

interface IPaymentCreate {
  /**
   * e-shop identifier in the Comgate system - you can find it in the Client Portal in the Shop Settings - Shop Connections section.
   */
  merchant: string;

  /**
   * A value of 'true' means that the payment will be set up as a test version, a value of 'false' means a production version. If the parameter is missing, the payment will be set up as production.
   */
  test?: boolean;

  /**
   * Possible values AT, BE, CY, CZ, DE, EE, EL, ES, FI, FR, GB, HR, HU, IE, IT, LT, LU, LV, MT, NL, NO, PL, PT, RO, SL, SK, SV, US. For other countries, use ALL. If the parameter is missing, 'CZ' is used automatically. This parameter is used to limit the selection of payment methods on the payment gateway. The correct combination of 'country' and 'curr' (currency) parameters for the region must be selected. For example, to display Czech buttons and card payments in CZK currency, select the combination country=CZ and curr=CZK. For Slovak bank buttons and card payments in EUR, select country=SK and curr=EUR. For Polish bank buttons and card payments in PLN, select country=PL and curr=PLN. For other foreign currencies, you can use country=ALL or another country code that the payment gateway accepts.
   */
  country?: CountryType;

  /**
   * Price for the product in cents or pennies. Does not apply to the HUF currency, where only the whole amount can be specified. Must be min. 1 CZK; 0.1 EUR; 1 PLN; 100 HUF; 1 USD; 1 GBP; 5 RON; 0.5 NOK; 0.5 SEK. Max. unlimited.
   */
  price: string;

  /**
   * Currency code according to ISO 4217. Available currencies are: CZK, EUR, PLN, HUF, USD, GBP, RON, NOK, SEK.
   */
  curr: CurrType;

  /**
   * Short description of the product (1-16 characters) - payments can be filtered by this item in the Client Portal.
   */
  label: string;

  /**
   * Parameter suitable for entering the variable symbol or order number on the client's side (does not have to be unique, i.e., it is possible to create multiple payments with the same refId). In the Client Portal and daily csv. this parameter is marked as Client ID.
   */
  refId: string;

  /**
   * Payment method from the table of payment methods, value 'ALL' in case the payer should choose the method, or a simple expression with a selection of methods (described below).
   */
  method: string;

  /**
   * Identifier of the client's bank account, to which Comgate Payments will transfer the money. If you do not fill in the parameter, the client's default account will be used. You can find the list of client's accounts at https://portal.comgate.cz/.
   */
  account?: string;

  /**
   * Contact email for the payer (for possible complaint purposes)
   */
  email: string;

  /**
   * Product identifier - this item is located in the client's daily csv. under the name Product.
   */
  name?: string;

  /**
   * Language code (ISO 639-1), in which the instructions for completing the payment will be displayed to the payers, standardly allowed values ('cs', 'sk', 'en', 'es', 'it', 'pl', 'fr', 'ro', 'de', 'hu', 'si', 'hr', 'no', 'sv'), if the parameter is missing, 'cs' is used, in case of a request for another language, contact podpora@comgate.cz.
   */
  lang?: LangType;

  /**
   * In case of setting up a payment in the background, fill in 'true'. When setting up a payment by redirection, fill in either 'false' or do not use the parameter. You can find out which allowed method of setting up a payment you have set up in the Client Portal in the Integration - Shop Connection section.
   */
  prepareOnly: boolean;

  /**
   * In case of setting up a payment in the background, fill in the password for background communication. When setting up a payment by redirection, leave the parameter empty, or do not use it.
   */
  secret: string;

  /**
   * In case of a request for pre-authorization of a card payment, set to 'true'. In case of a normal payment, fill in 'false' or do not use the parameter. Only for card payments.
   */
  preauth?: boolean;

  /**
   * Flag for setting up an initiation transaction for recurring payments. Only for clients who have the service enabled.
   */
  initRecurring?: boolean;

  /**
   * Verification payment parameter, in case of a request for setting up a verification payment (value 'true') and it is unnecessary to send parameter 'initRecurring'.
   */
  verification?: boolean;

  /**
   * Apple Pay payment data. Only for Apple Pay payments.
   */
  applePayPayload?: string;

  /**
   * The expiration time of the payment in the format 'YYYY-MM-DD HH:MM:SS'. If the parameter is missing, the payment is valid for 7 days.
   */
  expirationTime?: string;

  /**
   * If 'true', the payment expiration time will be dynamically extended by 7 days. If 'false' or the parameter is missing, the payment will expire after the time specified in the 'expirationTime' parameter.
   */
  dynamicExpiration?: boolean;

  /**
   * URL to which the payer will be redirected after the payment is made.
   */
  url_paid?: string;

  /**
   * URL to which the payer will be redirected if the payment is cancelled.
   */
  url_cancelled?: string;

  /**
   * URL to which the payer will be redirected if the payment is pending.
   */
  url_pending?: string;
}


/**
 * Represents the response code and associated details for a payment transaction.
 */
interface IPaymentCreateResponse {
  /**
   * Return code of the method and error description:
   * 0 OK
   * 1100 unknown error
   * 1102 specified language is not supported
   * 1103 incorrectly specified method
   * 1104 unable to load payment
   * 1107 payment price is not supported
   * 1200 database error
   * 1301 unknown e-shop
   * 1303 connection or language missing
   * 1304 invalid category
   * 1305 product description missing
   * 1306 select the correct method
   * 1308 selected payment method is not allowed
   * 1309 incorrect amount
   * 1310 unknown currency
   * 1311 invalid client's bank account identifier
   * 1316 e-shop does not have recurring payments enabled
   * 1317 invalid method - does not support recurring payments
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

  /**
   * URL of the page to which the payer should be redirected for payment execution.
   */
  redirect?: string;
};

export type {
  CountryType,
  LangType,
  CurrType,
  IPaymentCreate,
  IPaymentCreateResponse
}