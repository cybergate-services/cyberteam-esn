(function() {
  'use strict';

  angular.module('esn.attachment')
    .constant('ESN_ATTACHMENT_DEFAULT_VIEWER', {
      name: 'defaultViewer',
      template: '/views/modules/attachment/templates/default-viewer.html'
    });
})();
