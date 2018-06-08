/**
 * @file
 * jQuery to provide summary information inside vertical tabs.
 */

(function ($) {

  'use strict';

  Drupal.behaviors.settings_appearence = {
    attach: function (context) {

      // Provide summary during Map Dimension configuration.
      $('details#edit-dimension-map', context).drupalSetSummary(function (context) {

        var vals = ['Reste à faire'];

        return vals.join('<br/>');

      });

      // Provide summary during Form Position configuration.
      $('details#edit-form-position', context).drupalSetSummary(function (context) {

        var vals = ['Reste à faire'];

        return vals.join('<br/>');

      });

      // Provide summary during Form Color Text configuration.
      $('details#edit-form-color-text', context).drupalSetSummary(function (context) {

        var vals = ['Reste à faire'];

        return vals.join('<br/>');

      });

      // Provide summary during Form Color Background configuration.
      $('details#edit-form-color-bg', context).drupalSetSummary(function (context) {

        var vals = ['Reste à faire'];

        return vals.join('<br/>');

      });

      // Provide summary during Form Color Three Bouton configuration.
      $('details#edit-form-color-three-btn', context).drupalSetSummary(function (context) {

        var vals = ['Reste à faire'];

        return vals.join('<br/>');

      });

    }
  };

})(jQuery);

