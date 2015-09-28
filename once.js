/**
 * $once
 *
 * Once garante que uma determinada função só pode ser chamada uma vez e
 * evitando a inicialização duplicada
 *
 * @module $once
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 *
 *        $once(function () {});
 *
 */
this.Ninja.module('$once', ['$always', '$apply'], function ($always, $apply) {

  /**
   * Once garante que uma determinada função só pode ser chamada uma vez e
   * evitando a inicialização duplicada
   *
   * @public
   * @method onde
   * @param {Function} a Funcao que sera executada apenas uma unica vez
   * @return {Funcation} Funcao wrap da funcao passada
   * @example
   *
   *        $once(function () {})
   *
   */
  function once(a) {
    return function () {
      return !!a && $always($apply(a, arguments))(a = null);
    };
  }

  /**
   * Revelacao do modulo $once, encapsulando a visibilidade das funcoes
   * privadas
   */
  return once;

});