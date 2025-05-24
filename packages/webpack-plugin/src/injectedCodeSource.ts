export function injectedCodeTemplate() {
  (function() {
    try {
      var ws = new WebSocket('__WEBSOCKET_URL__');
      ws.onopen = function() {
        ws.send(JSON.stringify({
          type: 'init',
          orgName: '__ORG_NAME__',
          projectName: '__PROJECT_NAME__',
          mfeFile: window.location.origin + '/__MFE_FILE__',
          singleSpa: window.singleSpa ? true : false
        }));
        if (window.importMapOverrides && typeof window.importMapOverrides.getOverrideMap === 'function') {
          ws.send(JSON.stringify({
            type: 'importmap-override',
            action: 'init',
            overrides: window.importMapOverrides.getOverrideMap()
          }));
        }
      };

      if (window.importMapOverrides) {
        var imo = window.importMapOverrides;
        var methodsToPatch = ['addOverride', 'removeOverride', 'resetOverrides', 'disableOverride', 'enableOverride', 'addExternalOverride'];
        methodsToPatch.forEach(function(method) {
          if (typeof imo[method] === 'function') {
            var original = imo[method];
            imo[method] = function() {
              var result = original.apply(this, arguments);
              try {
                ws.send(JSON.stringify({
                  type: 'importmap-override',
                  action: method,
                  args: Array.prototype.slice.call(arguments),
                  overrides: imo.getOverrideMap ? imo.getOverrideMap() : undefined
                }));
              } catch (e) {}
              return result;
            };
          }
        });
      }
      function customCommands(msg: any) {
        if (msg.command === 'reload') {
          window.location.reload();
        }
      }
      ws.onmessage = function(event) {
        try {
          var msg = JSON.parse(event.data);
          if (typeof msg.command === 'string') {
            if (msg.type === 'importmap-override-command') {
              if (window?.importMapOverrides && typeof window?.importMapOverrides[msg.action] === 'function') {
                window.importMapOverrides[msg.action].apply(window.importMapOverrides, msg.args);
              }
            }
            if (msg.type === 'custom-command') {
              customCommands(msg);
            }
          }
        } catch (e) {}
      };
      var singleSpaEvents = [
        'single-spa:before-app-change',
        'single-spa:before-no-app-change',
        'single-spa:before-routing-event',
        'single-spa:before-mount-routing-event',
        'single-spa:before-first-mount',
        'single-spa:first-mount',
        'single-spa:app-change',
        'single-spa:no-app-change',
        'single-spa:routing-event'
      ];
      singleSpaEvents.forEach(function(eventName) {
        window.addEventListener(eventName, function(evt: any) {
          try {
            ws.send(JSON.stringify({
              type: 'single-spa-event',
              event: eventName,
              orgName: '__ORG_NAME__',
              projectName: '__PROJECT_NAME__',
              mfeFile: window.location.origin + '/__MFE_FILE__',
              detail: evt.detail || null,
              timestamp: Date.now()
            }));
          } catch (e) {}
        });
      });
    } catch (e) { 
      console.warn('SingleSpaDevtoolsWebpackPlugin websocket error', e); 
    }
  })();
} 