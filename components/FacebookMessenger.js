"use client";

import React from "react";

function Facebook() {
  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <script
        dangerouslySetInnerHTML={{
          __html: `var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "164814023375121");
            chatbox.setAttribute("attribution", "biz_inbox");`,
        }}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.fbAsyncInit = function() {
                FB.init({
                  xfbml            : true,
                  version          : 'v18.0'
                });
              };
        
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));`,
        }}
      ></script>
    </div>
  );
}

export default Facebook;
