<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Action Controller: Exception caught</title>
  <style>
    body {
      background-color: #FAFAFA;
      color: #333;
      margin: 0px;
    }

    body, p, ol, ul, td {
      font-family: helvetica, verdana, arial, sans-serif;
      font-size:   13px;
      line-height: 18px;
    }

    pre {
      font-size: 11px;
      white-space: pre-wrap;
    }

    pre.box {
      border: 1px solid #EEE;
      padding: 10px;
      margin: 0px;
      width: 958px;
    }

    header {
      color: #F0F0F0;
      background: #C52F24;
      padding: 0.5em 1.5em;
    }

    h1 {
      margin: 0.2em 0;
      line-height: 1.1em;
      font-size: 2em;
    }

    h2 {
      color: #C52F24;
      line-height: 25px;
    }

    .details {
      border: 1px solid #D0D0D0;
      border-radius: 4px;
      margin: 1em 0px;
      display: block;
      width: 978px;
    }

    .summary {
      padding: 8px 15px;
      border-bottom: 1px solid #D0D0D0;
      display: block;
    }

    .details pre {
      margin: 5px;
      border: none;
    }

    #container {
      box-sizing: border-box;
      width: 100%;
      padding: 0 1.5em;
    }

    .source * {
      margin: 0px;
      padding: 0px;
    }

    .source {
      border: 1px solid #D9D9D9;
      background: #ECECEC;
      width: 978px;
    }

    .source pre {
      padding: 10px 0px;
      border: none;
    }

    .source .data {
      font-size: 80%;
      overflow: auto;
      background-color: #FFF;
    }

    .info {
      padding: 0.5em;
    }

    .source .data .line_numbers {
      background-color: #ECECEC;
      color: #AAA;
      padding: 1em .5em;
      border-right: 1px solid #DDD;
      text-align: right;
    }

    .line {
      padding-left: 10px;
    }

    .line:hover {
      background-color: #F6F6F6;
    }

    .line.active {
      background-color: #FFCCCC;
    }

    .hidden {
      display: none;
    }

    a { color: #980905; }
    a:visited { color: #666; }
    a.trace-frames { color: #666; }
    a:hover { color: #C52F24; }
    a.trace-frames.selected { color: #C52F24 }

      #route_table {
    margin: 0;
    border-collapse: collapse;
  }

  #route_table thead tr {
    border-bottom: 2px solid #ddd;
  }

  #route_table thead tr.bottom {
    border-bottom: none;
  }

  #route_table thead tr.bottom th {
    padding: 10px 0;
    line-height: 15px;
  }

  #route_table tbody tr {
    border-bottom: 1px solid #ddd;
  }

  #route_table tbody tr:nth-child(odd) {
    background: #f2f2f2;
  }

  #route_table tbody.exact_matches,
  #route_table tbody.fuzzy_matches {
    background-color: LightGoldenRodYellow;
    border-bottom: solid 2px SlateGrey;
  }

  #route_table tbody.exact_matches tr,
  #route_table tbody.fuzzy_matches tr {
    background: none;
    border-bottom: none;
  }

  #route_table td {
    padding: 4px 30px;
  }

  #path_search {
    width: 80%;
    font-size: inherit;
  }

  </style>

  <script>
    var toggle = function(id) {
      var s = document.getElementById(id).style;
      s.display = s.display == 'none' ? 'block' : 'none';
      return false;
    }
    var show = function(id) {
      document.getElementById(id).style.display = 'block';
    }
    var hide = function(id) {
      document.getElementById(id).style.display = 'none';
    }
    var toggleTrace = function() {
      return toggle('blame_trace');
    }
    var toggleSessionDump = function() {
      return toggle('session_dump');
    }
    var toggleEnvDump = function() {
      return toggle('env_dump');
    }
  </script>
</head>
<body>

<header>
  <h1>Routing Error</h1>
</header>
<div id="container">
  <h2>No route matches [GET] &quot;/spaces/assets/js/maps.js&quot;</h2>

  
<p><code>Rails.root: /Users/robinsonburkey/project/Remote_Space</code></p>

<div id="traces">
    <a href="#" onclick="hide(&#39;Framework-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Application-Trace&#39;);; return false;">Application Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Framework-Trace&#39;);; return false;">Framework Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Framework-Trace&#39;);show(&#39;Full-Trace&#39;);; return false;">Full Trace</a> 

    <div id="Application-Trace" style="display: block;">
      <pre><code></code></pre>
    </div>
    <div id="Framework-Trace" style="display: none;">
      <pre><code><a class="trace-frames" data-frame-id="0" href="#">actionpack (4.2.5.1) lib/action_dispatch/middleware/debug_exceptions.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="1" href="#">web-console (2.3.0) lib/web_console/middleware.rb:28:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="2" href="#">web-console (2.3.0) lib/web_console/middleware.rb:18:in `catch&#39;</a><br><a class="trace-frames" data-frame-id="3" href="#">web-console (2.3.0) lib/web_console/middleware.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="4" href="#">actionpack (4.2.5.1) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;</a><br><a class="trace-frames" data-frame-id="5" href="#">railties (4.2.5.1) lib/rails/rack/logger.rb:38:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="6" href="#">railties (4.2.5.1) lib/rails/rack/logger.rb:20:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="7" href="#">activesupport (4.2.5.1) lib/active_support/tagged_logging.rb:68:in `block in tagged&#39;</a><br><a class="trace-frames" data-frame-id="8" href="#">activesupport (4.2.5.1) lib/active_support/tagged_logging.rb:26:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="9" href="#">activesupport (4.2.5.1) lib/active_support/tagged_logging.rb:68:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="10" href="#">railties (4.2.5.1) lib/rails/rack/logger.rb:20:in `call&#39;</a><br><a class="trace-frames" data-frame-id="11" href="#">actionpack (4.2.5.1) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="12" href="#">rack (1.6.5) lib/rack/methodoverride.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="13" href="#">rack (1.6.5) lib/rack/runtime.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="14" href="#">activesupport (4.2.5.1) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call&#39;</a><br><a class="trace-frames" data-frame-id="15" href="#">rack (1.6.5) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="16" href="#">actionpack (4.2.5.1) lib/action_dispatch/middleware/static.rb:116:in `call&#39;</a><br><a class="trace-frames" data-frame-id="17" href="#">rack (1.6.5) lib/rack/sendfile.rb:113:in `call&#39;</a><br><a class="trace-frames" data-frame-id="18" href="#">railties (4.2.5.1) lib/rails/engine.rb:518:in `call&#39;</a><br><a class="trace-frames" data-frame-id="19" href="#">railties (4.2.5.1) lib/rails/application.rb:165:in `call&#39;</a><br><a class="trace-frames" data-frame-id="20" href="#">rack (1.6.5) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="21" href="#">rack (1.6.5) lib/rack/content_length.rb:15:in `call&#39;</a><br><a class="trace-frames" data-frame-id="22" href="#">rack (1.6.5) lib/rack/handler/webrick.rb:88:in `service&#39;</a><br><a class="trace-frames" data-frame-id="23" href="#">/Users/robinsonburkey/.rvm/rubies/ruby-2.3.0/lib/ruby/2.3.0/webrick/httpserver.rb:140:in `service&#39;</a><br><a class="trace-frames" data-frame-id="24" href="#">/Users/robinsonburkey/.rvm/rubies/ruby-2.3.0/lib/ruby/2.3.0/webrick/httpserver.rb:96:in `run&#39;</a><br><a class="trace-frames" data-frame-id="25" href="#">/Users/robinsonburkey/.rvm/rubies/ruby-2.3.0/lib/ruby/2.3.0/webrick/server.rb:296:in `block in start_thread&#39;</a><br></code></pre>
    </div>
    <div id="Full-Trace" style="display: none;">
      <pre><code><a class="trace-frames" data-frame-id="0" href="#">actionpack (4.2.5.1) lib/action_dispatch/middleware/debug_exceptions.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="1" href="#">web-console (2.3.0) lib/web_console/middleware.rb:28:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="2" href="#">web-console (2.3.0) lib/web_console/middleware.rb:18:in `catch&#39;</a><br><a class="trace-frames" data-frame-id="3" href="#">web-console (2.3.0) lib/web_console/middleware.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="4" href="#">actionpack (4.2.5.1) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;</a><br><a class="trace-frames" data-frame-id="5" href="#">railties (4.2.5.1) lib/rails/rack/logger.rb:38:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="6" href="#">railties (4.2.5.1) lib/rails/rack/logger.rb:20:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="7" href="#">activesupport (4.2.5.1) lib/active_support/tagged_logging.rb:68:in `block in tagged&#39;</a><br><a class="trace-frames" data-frame-id="8" href="#">activesupport (4.2.5.1) lib/active_support/tagged_logging.rb:26:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="9" href="#">activesupport (4.2.5.1) lib/active_support/tagged_logging.rb:68:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="10" href="#">railties (4.2.5.1) lib/rails/rack/logger.rb:20:in `call&#39;</a><br><a class="trace-frames" data-frame-id="11" href="#">actionpack (4.2.5.1) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="12" href="#">rack (1.6.5) lib/rack/methodoverride.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="13" href="#">rack (1.6.5) lib/rack/runtime.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="14" href="#">activesupport (4.2.5.1) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call&#39;</a><br><a class="trace-frames" data-frame-id="15" href="#">rack (1.6.5) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="16" href="#">actionpack (4.2.5.1) lib/action_dispatch/middleware/static.rb:116:in `call&#39;</a><br><a class="trace-frames" data-frame-id="17" href="#">rack (1.6.5) lib/rack/sendfile.rb:113:in `call&#39;</a><br><a class="trace-frames" data-frame-id="18" href="#">railties (4.2.5.1) lib/rails/engine.rb:518:in `call&#39;</a><br><a class="trace-frames" data-frame-id="19" href="#">railties (4.2.5.1) lib/rails/application.rb:165:in `call&#39;</a><br><a class="trace-frames" data-frame-id="20" href="#">rack (1.6.5) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="21" href="#">rack (1.6.5) lib/rack/content_length.rb:15:in `call&#39;</a><br><a class="trace-frames" data-frame-id="22" href="#">rack (1.6.5) lib/rack/handler/webrick.rb:88:in `service&#39;</a><br><a class="trace-frames" data-frame-id="23" href="#">/Users/robinsonburkey/.rvm/rubies/ruby-2.3.0/lib/ruby/2.3.0/webrick/httpserver.rb:140:in `service&#39;</a><br><a class="trace-frames" data-frame-id="24" href="#">/Users/robinsonburkey/.rvm/rubies/ruby-2.3.0/lib/ruby/2.3.0/webrick/httpserver.rb:96:in `run&#39;</a><br><a class="trace-frames" data-frame-id="25" href="#">/Users/robinsonburkey/.rvm/rubies/ruby-2.3.0/lib/ruby/2.3.0/webrick/server.rb:296:in `block in start_thread&#39;</a><br></code></pre>
    </div>

  <script type="text/javascript">
    var traceFrames = document.getElementsByClassName('trace-frames');
    var selectedFrame, currentSource = document.getElementById('frame-source-0');

    // Add click listeners for all stack frames
    for (var i = 0; i < traceFrames.length; i++) {
      traceFrames[i].addEventListener('click', function(e) {
        e.preventDefault();
        var target = e.target;
        var frame_id = target.dataset.frameId;

        if (selectedFrame) {
          selectedFrame.className = selectedFrame.className.replace("selected", "");
        }

        target.className += " selected";
        selectedFrame = target;

        // Change the extracted source code
        changeSourceExtract(frame_id);
      });

      function changeSourceExtract(frame_id) {
        var el = document.getElementById('frame-source-' + frame_id);
        if (currentSource && el) {
          currentSource.className += " hidden";
          el.className = el.className.replace(" hidden", "");
          currentSource = el;
        }
      }
    }
  </script>
</div>


    <h2>
      Routes
    </h2>

    <p>
      Routes match in priority from top to bottom
    </p>

    
<table id='route_table' class='route_table'>
  <thead>
    <tr>
      <th>Helper</th>
      <th>HTTP Verb</th>
      <th>Path</th>
      <th>Controller#Action</th>
    </tr>
    <tr class='bottom'>
      <th>
        <a data-route-helper="_path" title="Returns a relative path (without the http or domain)" href="#">Path</a> /
        <a data-route-helper="_url" title="Returns an absolute url (with the http and domain)" href="#">Url</a>
      </th>
      <th>
      </th>
      <th>
        <input id="search" placeholder="Path Match" type="search" name="path[]" />
      </th>
      <th>
      </th>
    </tr>
  </thead>
  <tbody class='exact_matches' id='exact_matches'>
  </tbody>
  <tbody class='fuzzy_matches' id='fuzzy_matches'>
  </tbody>
  <tbody>
    <tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_session'>
      new_user_session<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/sign_in(.:format)' data-regexp='^\/users\/sign_in(?:\.([^\/.?]+))?$'>
    /users/sign_in(.:format)
  </td>
  <td data-route-reqs='devise/sessions#new'>
    devise/sessions#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_session'>
      user_session<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/users/sign_in(.:format)' data-regexp='^\/users\/sign_in(?:\.([^\/.?]+))?$'>
    /users/sign_in(.:format)
  </td>
  <td data-route-reqs='devise/sessions#create'>
    devise/sessions#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='destroy_user_session'>
      destroy_user_session<span class='helper'>_path</span>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/users/sign_out(.:format)' data-regexp='^\/users\/sign_out(?:\.([^\/.?]+))?$'>
    /users/sign_out(.:format)
  </td>
  <td data-route-reqs='devise/sessions#destroy'>
    devise/sessions#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_password'>
      user_password<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/users/password(.:format)' data-regexp='^\/users\/password(?:\.([^\/.?]+))?$'>
    /users/password(.:format)
  </td>
  <td data-route-reqs='devise/passwords#create'>
    devise/passwords#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_password'>
      new_user_password<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/password/new(.:format)' data-regexp='^\/users\/password\/new(?:\.([^\/.?]+))?$'>
    /users/password/new(.:format)
  </td>
  <td data-route-reqs='devise/passwords#new'>
    devise/passwords#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user_password'>
      edit_user_password<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/password/edit(.:format)' data-regexp='^\/users\/password\/edit(?:\.([^\/.?]+))?$'>
    /users/password/edit(.:format)
  </td>
  <td data-route-reqs='devise/passwords#edit'>
    devise/passwords#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/users/password(.:format)' data-regexp='^\/users\/password(?:\.([^\/.?]+))?$'>
    /users/password(.:format)
  </td>
  <td data-route-reqs='devise/passwords#update'>
    devise/passwords#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/users/password(.:format)' data-regexp='^\/users\/password(?:\.([^\/.?]+))?$'>
    /users/password(.:format)
  </td>
  <td data-route-reqs='devise/passwords#update'>
    devise/passwords#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='cancel_user_registration'>
      cancel_user_registration<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/cancel(.:format)' data-regexp='^\/users\/cancel(?:\.([^\/.?]+))?$'>
    /users/cancel(.:format)
  </td>
  <td data-route-reqs='devise/registrations#cancel'>
    devise/registrations#cancel
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_registration'>
      user_registration<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/users(.:format)' data-regexp='^\/users(?:\.([^\/.?]+))?$'>
    /users(.:format)
  </td>
  <td data-route-reqs='devise/registrations#create'>
    devise/registrations#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_registration'>
      new_user_registration<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/sign_up(.:format)' data-regexp='^\/users\/sign_up(?:\.([^\/.?]+))?$'>
    /users/sign_up(.:format)
  </td>
  <td data-route-reqs='devise/registrations#new'>
    devise/registrations#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user_registration'>
      edit_user_registration<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/users/edit(.:format)' data-regexp='^\/users\/edit(?:\.([^\/.?]+))?$'>
    /users/edit(.:format)
  </td>
  <td data-route-reqs='devise/registrations#edit'>
    devise/registrations#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/users(.:format)' data-regexp='^\/users(?:\.([^\/.?]+))?$'>
    /users(.:format)
  </td>
  <td data-route-reqs='devise/registrations#update'>
    devise/registrations#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/users(.:format)' data-regexp='^\/users(?:\.([^\/.?]+))?$'>
    /users(.:format)
  </td>
  <td data-route-reqs='devise/registrations#update'>
    devise/registrations#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/users(.:format)' data-regexp='^\/users(?:\.([^\/.?]+))?$'>
    /users(.:format)
  </td>
  <td data-route-reqs='devise/registrations#destroy'>
    devise/registrations#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='space_reviews'>
      space_reviews<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/spaces/:space_id/reviews(.:format)' data-regexp='^\/spaces\/([^\/.?]+)\/reviews(?:\.([^\/.?]+))?$'>
    /spaces/:space_id/reviews(.:format)
  </td>
  <td data-route-reqs='reviews#create'>
    reviews#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_space_review'>
      new_space_review<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/spaces/:space_id/reviews/new(.:format)' data-regexp='^\/spaces\/([^\/.?]+)\/reviews\/new(?:\.([^\/.?]+))?$'>
    /spaces/:space_id/reviews/new(.:format)
  </td>
  <td data-route-reqs='reviews#new'>
    reviews#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_space_review'>
      edit_space_review<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/spaces/:space_id/reviews/:id/edit(.:format)' data-regexp='^\/spaces\/([^\/.?]+)\/reviews\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /spaces/:space_id/reviews/:id/edit(.:format)
  </td>
  <td data-route-reqs='reviews#edit'>
    reviews#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='space_review'>
      space_review<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/spaces/:space_id/reviews/:id(.:format)' data-regexp='^\/spaces\/([^\/.?]+)\/reviews\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /spaces/:space_id/reviews/:id(.:format)
  </td>
  <td data-route-reqs='reviews#show'>
    reviews#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/spaces/:space_id/reviews/:id(.:format)' data-regexp='^\/spaces\/([^\/.?]+)\/reviews\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /spaces/:space_id/reviews/:id(.:format)
  </td>
  <td data-route-reqs='reviews#update'>
    reviews#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/spaces/:space_id/reviews/:id(.:format)' data-regexp='^\/spaces\/([^\/.?]+)\/reviews\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /spaces/:space_id/reviews/:id(.:format)
  </td>
  <td data-route-reqs='reviews#update'>
    reviews#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/spaces/:space_id/reviews/:id(.:format)' data-regexp='^\/spaces\/([^\/.?]+)\/reviews\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /spaces/:space_id/reviews/:id(.:format)
  </td>
  <td data-route-reqs='reviews#destroy'>
    reviews#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='search_spaces'>
      search_spaces<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/spaces/search(.:format)' data-regexp='^\/spaces\/search(?:\.([^\/.?]+))?$'>
    /spaces/search(.:format)
  </td>
  <td data-route-reqs='spaces#search'>
    spaces#search
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='spaces'>
      spaces<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/spaces(.:format)' data-regexp='^\/spaces(?:\.([^\/.?]+))?$'>
    /spaces(.:format)
  </td>
  <td data-route-reqs='spaces#index'>
    spaces#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/spaces(.:format)' data-regexp='^\/spaces(?:\.([^\/.?]+))?$'>
    /spaces(.:format)
  </td>
  <td data-route-reqs='spaces#create'>
    spaces#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_space'>
      new_space<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/spaces/new(.:format)' data-regexp='^\/spaces\/new(?:\.([^\/.?]+))?$'>
    /spaces/new(.:format)
  </td>
  <td data-route-reqs='spaces#new'>
    spaces#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_space'>
      edit_space<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/spaces/:id/edit(.:format)' data-regexp='^\/spaces\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /spaces/:id/edit(.:format)
  </td>
  <td data-route-reqs='spaces#edit'>
    spaces#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='space'>
      space<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/spaces/:id(.:format)' data-regexp='^\/spaces\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /spaces/:id(.:format)
  </td>
  <td data-route-reqs='spaces#show'>
    spaces#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/spaces/:id(.:format)' data-regexp='^\/spaces\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /spaces/:id(.:format)
  </td>
  <td data-route-reqs='spaces#update'>
    spaces#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/spaces/:id(.:format)' data-regexp='^\/spaces\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /spaces/:id(.:format)
  </td>
  <td data-route-reqs='spaces#update'>
    spaces#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/spaces/:id(.:format)' data-regexp='^\/spaces\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /spaces/:id(.:format)
  </td>
  <td data-route-reqs='spaces#destroy'>
    spaces#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='root'>
      root<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/' data-regexp='^\/$'>
    /
  </td>
  <td data-route-reqs='static#home'>
    static#home
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='spaces2'>
      spaces2<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/spaces2(.:format)' data-regexp='^\/spaces2(?:\.([^\/.?]+))?$'>
    /spaces2(.:format)
  </td>
  <td data-route-reqs='spaces#index2'>
    spaces#index2
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='how_it_works'>
      how_it_works<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/how_it_works(.:format)' data-regexp='^\/how_it_works(?:\.([^\/.?]+))?$'>
    /how_it_works(.:format)
  </td>
  <td data-route-reqs='static#how_it_works'>
    static#how_it_works
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='contact'>
      contact<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/contact(.:format)' data-regexp='^\/contact(?:\.([^\/.?]+))?$'>
    /contact(.:format)
  </td>
  <td data-route-reqs='static#contact'>
    static#contact
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='blog'>
      blog<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/blog(.:format)' data-regexp='^\/blog(?:\.([^\/.?]+))?$'>
    /blog(.:format)
  </td>
  <td data-route-reqs='static#blog'>
    static#blog
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='home1'>
      home1<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/home1(.:format)' data-regexp='^\/home1(?:\.([^\/.?]+))?$'>
    /home1(.:format)
  </td>
  <td data-route-reqs='static#home1'>
    static#home1
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='map'>
      map<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/map(.:format)' data-regexp='^\/map(?:\.([^\/.?]+))?$'>
    /map(.:format)
  </td>
  <td data-route-reqs='static#map'>
    static#map
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='my_spaces'>
      my_spaces<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/my_spaces(.:format)' data-regexp='^\/my_spaces(?:\.([^\/.?]+))?$'>
    /my_spaces(.:format)
  </td>
  <td data-route-reqs='spaces#my_spaces'>
    spaces#my_spaces
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='my_reviews'>
      my_reviews<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/my_reviews(.:format)' data-regexp='^\/my_reviews(?:\.([^\/.?]+))?$'>
    /my_reviews(.:format)
  </td>
  <td data-route-reqs='reviews#my_reviews'>
    reviews#my_reviews
  </td>
</tr>

  </tbody>
</table>

<script type='text/javascript'>
  // Iterates each element through a function
  function each(elems, func) {
    if (!elems instanceof Array) { elems = [elems]; }
    for (var i = 0, len = elems.length; i < len; i++) {
      func(elems[i]);
    }
  }

  // Sets innerHTML for an element
  function setContent(elem, text) {
    elem.innerHTML = text;
  }

  // Enables path search functionality
  function setupMatchPaths() {
    // Check if the user input (sanitized as a path) matches the regexp data attribute
    function checkExactMatch(section, elem, value) {
      var string = sanitizePath(value),
          regexp = elem.getAttribute("data-regexp");

      showMatch(string, regexp, section, elem);
    }

    // Check if the route path data attribute contains the user input
    function checkFuzzyMatch(section, elem, value) {
      var string = elem.getAttribute("data-route-path"),
          regexp = value;

      showMatch(string, regexp, section, elem);
    }

    // Display the parent <tr> element in the appropriate section when there's a match
    function showMatch(string, regexp, section, elem) {
      if(string.match(RegExp(regexp))) {
        section.appendChild(elem.parentNode.cloneNode(true));
      }
    }

    // Check if there are any matched results in a section
    function checkNoMatch(section, defaultText, noMatchText) {
      if (section.innerHTML === defaultText) {
        setContent(section, defaultText + noMatchText);
      }
    }

    // Ensure path always starts with a slash "/" and remove params or fragments
    function sanitizePath(path) {
      var path = path.charAt(0) == '/' ? path : "/" + path;
      return path.replace(/\#.*|\?.*/, '');
    }

    var regexpElems     = document.querySelectorAll('#route_table [data-regexp]'),
        searchElem      = document.querySelector('#search'),
        exactMatches    = document.querySelector('#exact_matches'),
        fuzzyMatches    = document.querySelector('#fuzzy_matches');

    // Remove matches when no search value is present
    searchElem.onblur = function(e) {
      if (searchElem.value === "") {
        setContent(exactMatches, "");
        setContent(fuzzyMatches, "");
      }
    }

    // On key press perform a search for matching paths
    searchElem.onkeyup = function(e){
      var userInput         = searchElem.value,
          defaultExactMatch = '<tr><th colspan="4">Paths Matching (' + escape(sanitizePath(userInput)) +'):</th></tr>',
          defaultFuzzyMatch = '<tr><th colspan="4">Paths Containing (' + escape(userInput) +'):</th></tr>',
          noExactMatch      = '<tr><th colspan="4">No Exact Matches Found</th></tr>',
          noFuzzyMatch      = '<tr><th colspan="4">No Fuzzy Matches Found</th></tr>';

      // Clear out results section
      setContent(exactMatches, defaultExactMatch);
      setContent(fuzzyMatches, defaultFuzzyMatch);

      // Display exact matches and fuzzy matches
      each(regexpElems, function(elem) {
        checkExactMatch(exactMatches, elem, userInput);
        checkFuzzyMatch(fuzzyMatches, elem, userInput);
      })

      // Display 'No Matches' message when no matches are found
      checkNoMatch(exactMatches, defaultExactMatch, noExactMatch);
      checkNoMatch(fuzzyMatches, defaultFuzzyMatch, noFuzzyMatch);
    }
  }

  // Enables functionality to toggle between `_path` and `_url` helper suffixes
  function setupRouteToggleHelperLinks() {

    // Sets content for each element
    function setValOn(elems, val) {
      each(elems, function(elem) {
        setContent(elem, val);
      });
    }

    // Sets onClick event for each element
    function onClick(elems, func) {
      each(elems, function(elem) {
        elem.onclick = func;
      });
    }

    var toggleLinks = document.querySelectorAll('#route_table [data-route-helper]');
    onClick(toggleLinks, function(){
      var helperTxt   = this.getAttribute("data-route-helper"),
          helperElems = document.querySelectorAll('[data-route-name] span.helper');

      setValOn(helperElems, helperTxt);
    });
  }

  setupMatchPaths();
  setupRouteToggleHelperLinks();
</script>


  

<h2 style="margin-top: 30px">Request</h2>
<p><b>Parameters</b>:</p> <pre>None</pre>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleSessionDump()">Toggle session dump</a></div>
  <div id="session_dump" style="display:none"><pre>_csrf_token: &quot;e3EnIxuQw2YYEV7agU/McN1WV4iqZ2mIEX5eT4ZHTno=&quot;
session_id: &quot;d0a04f69a1b4d0443b3c3cbe8ac64dab&quot;
warden.user.user.key: [[1], &quot;$2a$10$6GkyL4LGR9nLUSdlrLFYve&quot;]</pre></div>
</div>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleEnvDump()">Toggle env dump</a></div>
  <div id="env_dump" style="display:none"><pre>GATEWAY_INTERFACE: &quot;CGI/1.1&quot;
HTTP_ACCEPT: &quot;*/*&quot;
HTTP_ACCEPT_ENCODING: &quot;gzip, deflate, sdch, br&quot;
HTTP_ACCEPT_LANGUAGE: &quot;en-US,en;q=0.8,la;q=0.6&quot;
REMOTE_ADDR: &quot;::1&quot;
REMOTE_HOST: &quot;::1&quot;
SERVER_NAME: &quot;localhost&quot;
SERVER_PROTOCOL: &quot;HTTP/1.1&quot;</pre></div>
</div>

<h2 style="margin-top: 30px">Response</h2>
<p><b>Headers</b>:</p> <pre>None</pre>

</div>


<div id="console"
  data-mount-point='/__web_console'
  data-session-id='c1b3c8990704ea2344bfa115f3ce6655'
  data-prompt-label='>> '>
</div>


<script type="text/javascript">
(function() {
  /**
 * Constructor for command storage.
 * It uses localStorage if available. Otherwise fallback to normal JS array.
 */
function CommandStorage() {
  this.previousCommands = [];
  var previousCommandOffset = 0;
  var hasLocalStorage = typeof window.localStorage !== 'undefined';
  var STORAGE_KEY = "web_console_previous_commands";
  var MAX_STORAGE = 100;

  if (hasLocalStorage) {
    this.previousCommands = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    previousCommandOffset = this.previousCommands.length;
  }

  this.addCommand = function(command) {
    previousCommandOffset = this.previousCommands.push(command);

    if (previousCommandOffset > MAX_STORAGE) {
      this.previousCommands.splice(0, 1);
      previousCommandOffset = MAX_STORAGE;
    }

    if (hasLocalStorage) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.previousCommands));
    }
  };

  this.navigate = function(offset) {
    previousCommandOffset += offset;

    if (previousCommandOffset < 0) {
      previousCommandOffset = -1;
      return null;
    }

    if (previousCommandOffset >= this.previousCommands.length) {
      previousCommandOffset = this.previousCommands.length;
      return null;
    }

    return this.previousCommands[previousCommandOffset];
  }
}

// HTML strings for dynamic elements.
var consoleInnerHtml = "<div class=\'resizer layer\'><\/div>\n<div class=\'console-outer layer\'>\n  <div class=\'console-actions\'>\n    <div class=\'close-button button\' title=\'close\'>x<\/div>\n  <\/div>\n  <div class=\'console-inner\'><\/div>\n<\/div>\n<input class=\'clipboard\' type=\'text\'>\n"
;
var promptBoxHtml = "<span class=\'console-prompt-label\'><\/span>\n<pre class=\'console-prompt-display\'><\/pre>\n"
;
// CSS
var consoleStyleCss = ".console .pos-absolute { position: absolute; }\n.console .pos-fixed { position: fixed; }\n.console .pos-right { right: 0; }\n.console .border-box { box-sizing: border-box; }\n.console .layer { width: 100%; height: 100%; }\n.console .layer.console-outer { z-index: 1; }\n.console .layer.resizer { z-index: 2; }\n.console { position: fixed; left: 0; bottom: 0; width: 100%; height: 148px; padding: 0; margin: 0; background: none repeat scroll 0% 0% #333; z-index: 9999; }\n.console .console-outer { overflow: auto; padding-top: 4px; }\n.console .console-inner { font-family: monospace; font-size: 11px; width: 100%; height: 100%; overflow: none; background: #333; }\n.console .console-prompt-box { color: #FFF; }\n.console .console-message { color: #1AD027; margin: 0; border: 0; white-space: pre-wrap; background-color: #333; padding: 0; }\n.console .console-message.error-message { color: #fc9; }\n.console .console-focus .console-cursor { background: #FEFEFE; color: #333; font-weight: bold; }\n.console .resizer { background: #333; width: 100%; height: 4px; cursor: ns-resize; }\n.console .console-actions { padding-right: 3px; }\n.console .console-actions .button { float: left; }\n.console .button { cursor: pointer; border-radius: 1px; font-family: monospace; font-size: 13px; width: 14px; height: 14px; line-height: 14px; text-align: center; color: #ccc; }\n.console .button:hover { background: #666; color: #fff; }\n.console .button.close-button:hover { background: #966; }\n.console .clipboard { height: 0px; padding: 0px; margin: 0px; width: 0px; margin-left: -1000px; }\n.console .console-prompt-label { display: inline; color: #FFF; background: none repeat scroll 0% 0% #333; border: 0; padding: 0; }\n.console .console-prompt-display { display: inline; color: #FFF; background: none repeat scroll 0% 0% #333; border: 0; padding: 0; }\n.console.full-screen { height: 100%; }\n.console.full-screen .console-outer { padding-top: 3px; }\n.console.full-screen .resizer { display: none; }\n.console.full-screen .close-button { display: none; }\n"
;
// Insert a style element with the unique ID
var styleElementId = 'sr02459pvbvrmhco';

// REPLConsole Constructor
function REPLConsole(config) {
  function getConfig(key, defaultValue) {
    return config && config[key] || defaultValue;
  }

  this.commandStorage = new CommandStorage();
  this.prompt = getConfig('promptLabel', ' >>');
  this.mountPoint = getConfig('mountPoint');
  this.sessionId = getConfig('sessionId');
}

REPLConsole.prototype.getSessionUrl = function(path) {
  var parts = [ this.mountPoint, 'repl_sessions', this.sessionId ];
  if (path) {
    parts.push(path);
  }
  // Join and remove duplicate slashes.
  return parts.join('/').replace(/([^:]\/)\/+/g, '$1');
};

REPLConsole.prototype.commandHandle = function(line, callback) {
  var self = this;
  var params = 'input=' + encodeURIComponent(line);
  callback = callback || function() {};

  function isSuccess(status) {
    return status >= 200 && status < 300 || status === 304;
  }

  function parseJSON(text) {
    try {
      return JSON.parse(text);
    } catch (e) {
      return null;
    }
  }

  function getErrorText(xhr) {
    if (!xhr.status) {
      return "Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n";
    } else {
      return xhr.status + ' ' + xhr.statusText;
    }
  }

  putRequest(self.getSessionUrl(), params, function(xhr) {
    var response = parseJSON(xhr.responseText);
    var result   = isSuccess(xhr.status);
    if (result) {
      self.writeOutput(response.output);
    } else {
      if (response && response.output) {
        self.writeError(response.output);
      } else {
        self.writeError(getErrorText(xhr));
      }
    }
    callback(result, response);
  });
};

REPLConsole.prototype.uninstall = function() {
  this.container.parentNode.removeChild(this.container);
};

REPLConsole.prototype.install = function(container) {
  var _this = this;

  document.onkeydown = function(ev) {
    if (_this.focused) { _this.onKeyDown(ev); }
  };

  document.onkeypress = function(ev) {
    if (_this.focused) { _this.onKeyPress(ev); }
  };

  document.addEventListener('mousedown', function(ev) {
    var el = ev.target || ev.srcElement;

    if (el) {
      do {
        if (el === container) {
          _this.focus();
          return;
        }
      } while (el = el.parentNode);

      _this.blur();
    }
  });

  // Render the console.
  container.innerHTML = consoleInnerHtml;

  var consoleOuter = findChild(container, 'console-outer');
  var consoleActions = findChild(consoleOuter, 'console-actions');

  addClass(container, 'console');
  addClass(container.getElementsByClassName('layer'), 'pos-absolute border-box');
  addClass(container.getElementsByClassName('button'), 'border-box');
  addClass(consoleActions, 'pos-fixed pos-right');

  // Make the console resizable.
  function resizeContainer(ev) {
    var startY              = ev.clientY;
    var startHeight         = parseInt(document.defaultView.getComputedStyle(container).height, 10);
    var scrollTopStart      = consoleOuter.scrollTop;
    var clientHeightStart   = consoleOuter.clientHeight;

    var doDrag = function(e) {
      container.style.height = (startHeight + startY - e.clientY) + 'px';
      consoleOuter.scrollTop = scrollTopStart + (clientHeightStart - consoleOuter.clientHeight);
      shiftConsoleActions();
    };

    var stopDrag = function(e) {
      document.documentElement.removeEventListener('mousemove', doDrag, false);
      document.documentElement.removeEventListener('mouseup', stopDrag, false);
    };

    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  }

  function closeContainer(ev) {
    container.parentNode.removeChild(container);
  }

  var shifted = false;
  function shiftConsoleActions() {
    if (consoleOuter.scrollHeight > consoleOuter.clientHeight) {
      var widthDiff = document.documentElement.clientWidth - consoleOuter.clientWidth;
      if (shifted || ! widthDiff) return;
      shifted = true;
      consoleActions.style.marginRight = widthDiff + 'px';
    } else if (shifted) {
      shifted = false;
      consoleActions.style.marginRight = '0px';
    }
  }

  // Initialize
  this.container = container;
  this.outer = consoleOuter;
  this.inner = findChild(this.outer, 'console-inner');
  this.clipboard = findChild(container, 'clipboard');
  this.newPromptBox();
  this.insertCss();

  findChild(container, 'resizer').addEventListener('mousedown', resizeContainer);
  findChild(consoleActions, 'close-button').addEventListener('click', closeContainer);
  consoleOuter.addEventListener('DOMNodeInserted', shiftConsoleActions);

  REPLConsole.currentSession = this;
};

// Add CSS styles dynamically. This probably doesnt work for IE <8.
REPLConsole.prototype.insertCss = function() {
  if (document.getElementById(styleElementId)) {
    return; // already inserted
  }
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = consoleStyleCss;
  style.id = styleElementId;
  document.getElementsByTagName('head')[0].appendChild(style);
};

REPLConsole.prototype.focus = function() {
  if (! this.focused) {
    this.focused = true;
    if (! hasClass(this.inner, "console-focus")) {
      addClass(this.inner, "console-focus");
    }
    this.scrollToBottom();
  }
};

REPLConsole.prototype.blur = function() {
  this.focused = false;
  removeClass(this.inner, "console-focus");
};

/**
 * Add a new empty prompt box to the console.
 */
REPLConsole.prototype.newPromptBox = function() {
  // Remove the caret from previous prompt display if any.
  if (this.promptDisplay) {
    this.removeCaretFromPrompt();
  }

  var promptBox = document.createElement('div');
  promptBox.className = "console-prompt-box";
  promptBox.innerHTML = promptBoxHtml;
  this.promptLabel = promptBox.getElementsByClassName('console-prompt-label')[0];
  this.promptDisplay = promptBox.getElementsByClassName('console-prompt-display')[0];
  // Render the prompt box
  this.setInput("");
  this.promptLabel.innerHTML = this.prompt;
  this.inner.appendChild(promptBox);
  this.scrollToBottom();
};

/**
 * Remove the caret from the prompt box,
 * mainly before adding a new prompt box.
 * For simplicity, just re-render the prompt box
 * with caret position -1.
 */
REPLConsole.prototype.removeCaretFromPrompt = function() {
  this.setInput(this._input, -1);
};

REPLConsole.prototype.setInput = function(input, caretPos) {
  this._caretPos = caretPos === undefined ? input.length : caretPos;
  this._input = input;
  this.renderInput();
};

/**
 * Add some text to the existing input.
 */
REPLConsole.prototype.addToInput = function(val, caretPos) {
  caretPos = caretPos || this._caretPos;
  var before = this._input.substring(0, caretPos);
  var after = this._input.substring(caretPos, this._input.length);
  var newInput =  before + val + after;
  this.setInput(newInput, caretPos + val.length);
};

/**
 * Render the input prompt. This is called whenever
 * the user input changes, sometimes not very efficient.
 */
REPLConsole.prototype.renderInput = function() {
  // Clear the current input.
  removeAllChildren(this.promptDisplay);

  var promptCursor = document.createElement('span');
  promptCursor.className = "console-cursor";
  var before, current, after;

  if (this._caretPos < 0) {
    before = this._input;
    current = after = "";
  } else if (this._caretPos === this._input.length) {
    before = this._input;
    current = "\u00A0";
    after = "";
  } else {
    before = this._input.substring(0, this._caretPos);
    current = this._input.charAt(this._caretPos);
    after = this._input.substring(this._caretPos + 1, this._input.length);
  }

  this.promptDisplay.appendChild(document.createTextNode(before));
  promptCursor.appendChild(document.createTextNode(current));
  this.promptDisplay.appendChild(promptCursor);
  this.promptDisplay.appendChild(document.createTextNode(after));
};

REPLConsole.prototype.writeOutput = function(output) {
  var consoleMessage = document.createElement('pre');
  consoleMessage.className = "console-message";
  consoleMessage.innerHTML = escapeHTML(output);
  this.inner.appendChild(consoleMessage);
  this.newPromptBox();
  return consoleMessage;
};

REPLConsole.prototype.writeError = function(output) {
  var consoleMessage = this.writeOutput(output);
  addClass(consoleMessage, "error-message");
  return consoleMessage;
};

REPLConsole.prototype.onEnterKey = function() {
  var input = this._input;

  if(input != "" && input !== undefined) {
    this.commandStorage.addCommand(input);
  }

  this.commandHandle(input);
};

REPLConsole.prototype.onNavigateHistory = function(offset) {
  var command = this.commandStorage.navigate(offset) || "";
  this.setInput(command);
};

/**
 * Handle control keys like up, down, left, right.
 */
REPLConsole.prototype.onKeyDown = function(ev) {
  switch (ev.keyCode) {
    case 13:
      // Enter key
      this.onEnterKey();
      ev.preventDefault();
      break;
    case 80:
      // Ctrl-P
      if (! ev.ctrlKey) break;
    case 38:
      // Up arrow
      this.onNavigateHistory(-1);
      ev.preventDefault();
      break;
    case 78:
      // Ctrl-N
      if (! ev.ctrlKey) break;
    case 40:
      // Down arrow
      this.onNavigateHistory(1);
      ev.preventDefault();
      break;
    case 37:
      // Left arrow
      var caretPos = this._caretPos > 0 ? this._caretPos - 1 : this._caretPos;
      this.setInput(this._input, caretPos);
      ev.preventDefault();
      break;
    case 39:
      // Right arrow
      var length = this._input.length;
      var caretPos = this._caretPos < length ? this._caretPos + 1 : this._caretPos;
      this.setInput(this._input, caretPos);
      ev.preventDefault();
      break;
    case 8:
      // Delete
      this.deleteAtCurrent();
      ev.preventDefault();
      break;
    default:
      break;
  }

  if (ev.ctrlKey || ev.metaKey) {
    // Set focus to our clipboard in case they hit the "v" key
    this.clipboard.focus();
    if (ev.keyCode == 86) {
      // Pasting to clipboard doesn't happen immediately,
      // so we have to wait for a while to get the pasted text.
      var _this = this;
      setTimeout(function() {
        _this.addToInput(_this.clipboard.value);
        _this.clipboard.value = "";
        _this.clipboard.blur();
      }, 10);
    }
  }

  ev.stopPropagation();
};

/**
 * Handle input key press.
 */
REPLConsole.prototype.onKeyPress = function(ev) {
  // Only write to the console if it's a single key press.
  if (ev.ctrlKey || ev.metaKey) { return; }
  var keyCode = ev.keyCode || ev.which;
  this.insertAtCurrent(String.fromCharCode(keyCode));
  ev.stopPropagation();
  ev.preventDefault();
};

/**
 * Delete a character at the current position.
 */
REPLConsole.prototype.deleteAtCurrent = function() {
  if (this._caretPos > 0) {
    var caretPos = this._caretPos - 1;
    var before = this._input.substring(0, caretPos);
    var after = this._input.substring(this._caretPos, this._input.length);
    this.setInput(before + after, caretPos);
  }
};

/**
 * Insert a character at the current position.
 */
REPLConsole.prototype.insertAtCurrent = function(char) {
  var before = this._input.substring(0, this._caretPos);
  var after = this._input.substring(this._caretPos, this._input.length);
  this.setInput(before + char + after, this._caretPos + 1);
};

REPLConsole.prototype.scrollToBottom = function() {
  this.outer.scrollTop = this.outer.scrollHeight;
};

// Change the binding of the console
REPLConsole.prototype.switchBindingTo = function(frameId, callback) {
  var url = this.getSessionUrl('trace');
  var params = "frame_id=" + encodeURIComponent(frameId);
  postRequest(url, params, callback);
};

/**
 * Install the console into the element with a specific ID.
 * Example: REPLConsole.installInto("target-id")
 */
REPLConsole.installInto = function(id, options) {
  var consoleElement = document.getElementById(id);

  options = options || {};

  for (var prop in consoleElement.dataset) {
    options[prop] = options[prop] || consoleElement.dataset[prop];
  }

  var replConsole = new REPLConsole(options);
  replConsole.install(consoleElement);
  return replConsole;
};

// This is to store the latest single session, and the stored session
// is updated by the REPLConsole#install() method.
// It allows to operate the current session from the other scripts.
REPLConsole.currentSession = null;

// This line is for the Firefox Add-on, because it doesn't have XMLHttpRequest as default.
// And so we need to require a module compatible with XMLHttpRequest from SDK.
REPLConsole.XMLHttpRequest = typeof XMLHttpRequest === 'undefined' ? null : XMLHttpRequest;

REPLConsole.request = function request(method, url, params, callback) {
  var xhr = new REPLConsole.XMLHttpRequest();

  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader("Accept", "application/vnd.web-console.v2");
  xhr.send(params);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr);
    }
  };
};

// DOM helpers
function hasClass(el, className) {
  var regex = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g');
  return el.className && el.className.match(regex);
}

function isNodeList(el) {
  return typeof el.length === 'number' &&
    typeof el.item === 'function';
}

function addClass(el, className) {
  if (isNodeList(el)) {
    for (var i = 0; i < el.length; ++ i) {
      addClass(el[i], className);
    }
  } else {
    el.className += " " + className;
  }
}

function removeClass(el, className) {
  var regex = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g');
  el.className = el.className.replace(regex, '');
}

function removeAllChildren(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function findChild(el, className) {
  for (var i = 0; i < el.childNodes.length; ++ i) {
    if (hasClass(el.childNodes[i], className)) {
      return el.childNodes[i];
    }
  }
}

function escapeHTML(html) {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/`/g, '&#x60;');
}

// XHR helpers
function postRequest() {
  REPLConsole.request.apply(this, ["POST"].concat([].slice.call(arguments)));
}

function putRequest() {
  REPLConsole.request.apply(this, ["PUT"].concat([].slice.call(arguments)));
}

if (typeof exports === 'object') {
  exports.REPLConsole = REPLConsole;
} else {
  window.REPLConsole = REPLConsole;
}

}).call(this);
</script>

<script type="text/javascript">
(function() {
  REPLConsole.installInto('console');

}).call(this);
</script>


  <script type="text/javascript">
(function() {
  // Try intercept traces links in Rails 4.2.
var traceFrames = document.getElementsByClassName('trace-frames');
var selectedFrame, currentSource = document.getElementById('frame-source-0');

// Add click listeners for all stack frames
for (var i = 0; i < traceFrames.length; i++) {
  traceFrames[i].addEventListener('click', function(e) {
    e.preventDefault();
    var target = e.target;
    var frameId = target.dataset.frameId;

    // Change the binding of the console.
    changeBinding(frameId, function() {
      if (selectedFrame) {
        selectedFrame.className = selectedFrame.className.replace("selected", "");
      }

      target.className += " selected";
      selectedFrame = target;
    });

    // Change the extracted source code
    changeSourceExtract(frameId);
  });
}

function changeBinding(frameId, callback) {
  REPLConsole.currentSession.switchBindingTo(frameId, callback);
}

function changeSourceExtract(frameId) {
  var el = document.getElementById('frame-source-' + frameId);
  if (currentSource && el) {
    currentSource.className += " hidden";
    el.className = el.className.replace(" hidden", "");
    currentSource = el;
  }
}

// Push the error page body upwards the size of the console.
//
// While, I wouldn't like to do that on every custom page (so I don't screw
// user's layouts), I think a lot of developers want to see all of the content
// on the default Rails error page.
//
// Since it's quite special as is now, being a bit more special in the name of
// better user experience, won't hurt.
document.addEventListener('DOMContentLoaded', function() {
  var consoleElement = document.getElementById('console');
  var resizerElement = consoleElement.getElementsByClassName('resizer')[0];
  var containerElement = document.getElementById('container');

  function setContainerElementBottomMargin(pixels) {
    containerElement.style.marginBottom = pixels + 'px';
  }

  var currentConsoleElementHeight = consoleElement.offsetHeight;
  setContainerElementBottomMargin(currentConsoleElementHeight);

  resizerElement.addEventListener('mousedown', function(event) {
    function recordConsoleElementHeight(event) {
      resizerElement.removeEventListener('mouseup', recordConsoleElementHeight);

      var currentConsoleElementHeight = consoleElement.offsetHeight;
      setContainerElementBottomMargin(currentConsoleElementHeight);
    }

    resizerElement.addEventListener('mouseup', recordConsoleElementHeight);
  });
});

}).call(this);
</script>

</body>
</html>
