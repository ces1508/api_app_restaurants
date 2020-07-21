/**
 *
 * @property {string} provider.nombre será la compañia, ejemplo "facebook", "twiiter", "google"
 *  @property {string} provider.oauthId es el identificador único enviado por el provedor, en caso de que el provedor no envia uno, este será generado con un uuid
 */

export default interface Provider {
  name: string,
  oauthId: string
}
