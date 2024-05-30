import * as bookingsPricingProvider from 'interfaces-bookings-v1-custom-pricing';

/**
 * The Custom Pricing extension lets site owners add custom pricing
 * to bookings on the site. The custom pricing is calculated and used as the
 * basis for the price when checking out the booking, overriding the standard
 * Bookings pricing logic.
 *
 * Parameter: An `Options` object, which contains the booking.
 * Response: An object that contains the `calculatedPrice`:
 * ```json
 * {
 * "calculatedPrice": 100
 * }
 * ```
 * @param {import('interfaces-bookings-v1-custom-pricing').CalculatePriceOptions} options
 * @param {import('interfaces-bookings-v1-custom-pricing').Context} context
 * @returns {Promise<import('interfaces-bookings-v1-custom-pricing').CalculatePriceResponse>}
 */
export const calculatePrice = async (options, context) => {};
