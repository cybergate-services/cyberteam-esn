(function() {
  'use strict';

  angular.module('esn.attachment')
    .directive('esnAttachmentImageViewer', esnAttachmentImageViewer);

  function esnAttachmentImageViewer(esnAttachmentViewerService) {
    return {
      restrict: 'E',
      scope: {
        attachment: '=',
        viewer: '='
      },
      link: link,
      templateUrl: '/views/modules/attachment/viewer/image-viewer/image-viewer.html'
    };

    function link(scope, elem) {
      var image = angular.element(elem.find('.av-img'));

      scope.viewer.fitSizeContent(esnAttachmentViewerService.resizeViewer, image, scope.attachment.url);
    }
  }
})();
