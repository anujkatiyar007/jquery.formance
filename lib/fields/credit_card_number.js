// Generated by CoffeeScript 1.6.2
(function() {
  var $;

  require('./jquery.payment');

  $ = jQuery;

  $.fn.formance.creditCardNumber = {
    format: function() {
      this.payment('formatCardNumber');
      return this;
    },
    validate: function() {
      var val;

      val = $(this).val();
      return $.payment.validateCardNumber(num);
    }
  };

}).call(this);