/***************
 * COMGATE PAYMENT METHODS TYPES
 * 
 * @source https://apidoc.comgate.cz/?lang=cs#methods
 * @author asitanc
 * @date 2024-01-11 (YYYY-MM-DD)
 */
type CountryType = 'AT' | 'BE' | 'CY' | 'CZ' | 'DE' | 'EE' | 'EL' | 'ES' | 'FI' | 'FR' | 'GB' | 'HR' | 'HU' | 'IE' | 'IT' | 'LT' | 'LU' | 'LV' | 'MT' | 'NL' | 'NO' | 'PL' | 'PT' | 'RO' | 'SL' | 'SK' | 'SV' | 'US';

/**
 * Represents the request parameters for retrieving data in the Comgate system.
 */
interface IPaymentMethods {
  /**
   * The identifier of the e-shop in the Comgate system.
   */
  merchant: string;

  /**
   * The password for background communication.
   */
  secret: string;

  /**
   * The format of the returned data ('xml' or 'json'). Defaults to 'xml' if not specified.
   */
  type?: 'xml' | 'json';

  /**
   * The language for method descriptions. Allowed values are 'cs', 'en', 'pl'. Defaults to 'cs' if not specified.
   */
  lang?: 'cs' | 'en' | 'pl';

  /**
   * Specifying 'CZK' or 'EUR' will return methods that support the specified currency.
   */
  curr?: 'CZK' | 'EUR';

  /**
   * The country code (e.g., 'AT', 'BE', 'CY', 'CZ', etc.). This parameter limits the selection of payment methods for the specified country.
   */
  country?: CountryType;
};

/**
 * Represents the structure of the successful JSON response.
 */
interface IPaymentMethodsResponseSuccess {
  /**
   * Available methods.
   */
  methods: Array<{
    /**
     * The available payment method identifier.
     */
    id?: string;

    /**
     * The name of the method in the chosen language.
     */
    name?: string;

    /**
     * A detailed description of the method in the chosen language.
     */
    description?: string;

    /**
     * HTTP link to the method's logo.
     */
    logo?: string;
  }>;
};

interface IPaymentMethodsResponseError {
  /**
   * Error details.
   */
  error: {
    /**
     * Error code.
     */
    code?: string;

    /**
      * The return code of the method and description of the error:
      * 0 - OK
      * 1100 - Unknown error
      * 1200 - Database error
      * 1300 - E-shop has no method
      * 1400 - Incorrect query
      * 1500 - Unexpected error
      */
    message?: 0 | 1100 | 1200 | 1300 | 1400 | 1500;

    /**
     * Additional details about the error message.
     */
    extraMessage?: string;
  };
};

export type {
  IPaymentMethods,
  IPaymentMethodsResponseSuccess,
  IPaymentMethodsResponseError
}