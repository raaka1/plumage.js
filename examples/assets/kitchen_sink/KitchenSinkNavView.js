define([
  'jquery',
  'backbone',
  'handlebars',
  'plumage',
  'bootstrap'
], function($, Backbone, Handlebars, Plumage) {

  return Plumage.view.NavView.extend({

    title: 'PlumageJS',
    subtitle: 'Kitchen Sink Example - note: slow load due to unconcatenated source',

    userMenuItems: undefined,

    showSearch: false,

    navItems: [
      {id: 'grid', label: 'Models', url: 'model', className: 'model-menu'},
      {id: 'grid', label: 'Views', url: 'view', className: 'view-menu'},
      {id: 'grid', label: 'Grids', url: 'grid', className: 'grid-menu'},
      {id: 'form', label: 'Forms', url: 'form', className: 'form-menu'},
    ],

    onNavClick: function(e) {
      var a = $(e.target), li = $(a.parent());
      e.preventDefault();

      window.router.navigate(a.attr('href'), {trigger:true});
    }
  });
});
