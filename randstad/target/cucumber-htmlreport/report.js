$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MySearch.feature");
formatter.feature({
  "id": "people-search",
  "description": "  As a regular employee \n  I can search for other employees \n  so that I can find their contact information",
  "name": "People search",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 1892643000,
  "status": "passed"
});
formatter.scenario({
  "id": "people-search;search-by-valid-last-name",
  "tags": [
    {
      "name": "@tags",
      "line": 6
    }
  ],
  "description": "",
  "name": "Search by valid last name",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "user is on search page",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "user enters \"Allen\" in search box",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "user submits search request",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "the output should be \"Allen\"",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_is_on_search_page()"
});
formatter.result({
  "duration": 1708043000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Allen",
      "offset": 13
    }
  ],
  "location": "PeopleSearchStepDefs.user_enters_in_search_box(String)"
});
formatter.result({
  "duration": 17943000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nCommand duration or timeout: 9 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 4827c986-1277-f24a-83f2-21ad330606be\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d27.0.1}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:367)\n\tat org.openqa.selenium.By$ById.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat randstad.test.PeopleSearchStepDefs.user_enters_in_search_box(PeopleSearchStepDefs.java:82)\n\tat ✽.When user enters \"Allen\" in search box(MySearch.feature:9)\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous8019269411426014865webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8860)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous8019269411426014865webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8869)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous8019269411426014865webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous8019269411426014865webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10836)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous8019269411426014865webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10778)\n"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_submits_search_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Allen",
      "offset": 22
    }
  ],
  "location": "PeopleSearchStepDefs.the_output_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 73167000,
  "status": "passed"
});
formatter.before({
  "duration": 1386816000,
  "status": "passed"
});
formatter.scenario({
  "id": "people-search;search-by-valid-first-name",
  "tags": [
    {
      "name": "@tags",
      "line": 19
    }
  ],
  "description": "",
  "name": "Search by valid first name",
  "keyword": "Scenario",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "user is on search page",
  "keyword": "Given ",
  "line": 21
});
formatter.step({
  "name": "user enters \"Addie\" in search box",
  "keyword": "When ",
  "line": 22
});
formatter.step({
  "name": "user submits search request",
  "keyword": "And ",
  "line": 23
});
formatter.step({
  "name": "the output should be \"Addie\"",
  "keyword": "Then ",
  "line": 24
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_is_on_search_page()"
});
formatter.result({
  "duration": 1312737000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Addie",
      "offset": 13
    }
  ],
  "location": "PeopleSearchStepDefs.user_enters_in_search_box(String)"
});
formatter.result({
  "duration": 8286000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nCommand duration or timeout: 8 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: c07abfa5-102c-3f44-9f2f-ab981dab329a\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d27.0.1}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:367)\n\tat org.openqa.selenium.By$ById.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat randstad.test.PeopleSearchStepDefs.user_enters_in_search_box(PeopleSearchStepDefs.java:82)\n\tat ✽.When user enters \"Addie\" in search box(MySearch.feature:22)\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5034368872531346408webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8860)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5034368872531346408webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8869)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5034368872531346408webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5034368872531346408webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10836)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5034368872531346408webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10778)\n"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_submits_search_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Addie",
      "offset": 22
    }
  ],
  "location": "PeopleSearchStepDefs.the_output_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 68334000,
  "status": "passed"
});
formatter.before({
  "duration": 1354912000,
  "status": "passed"
});
formatter.scenario({
  "id": "people-search;search-by-valid-email",
  "tags": [
    {
      "name": "@tags",
      "line": 26
    }
  ],
  "description": "",
  "name": "Search by valid email",
  "keyword": "Scenario",
  "line": 27,
  "type": "scenario"
});
formatter.step({
  "name": "user is on search page",
  "keyword": "Given ",
  "line": 28
});
formatter.step({
  "name": "user enters \"Cara.Murphey@whitestratus.com\" in search box",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "user submits search request",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "the output should be \"Cara.Murphey@whitestratus.com\"",
  "keyword": "Then ",
  "line": 31
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_is_on_search_page()"
});
formatter.result({
  "duration": 1342747000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cara.Murphey@whitestratus.com",
      "offset": 13
    }
  ],
  "location": "PeopleSearchStepDefs.user_enters_in_search_box(String)"
});
formatter.result({
  "duration": 6682000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nCommand duration or timeout: 6 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 92de4bef-d049-3d46-beae-f8a983cc7304\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d27.0.1}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:367)\n\tat org.openqa.selenium.By$ById.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat randstad.test.PeopleSearchStepDefs.user_enters_in_search_box(PeopleSearchStepDefs.java:82)\n\tat ✽.When user enters \"Cara.Murphey@whitestratus.com\" in search box(MySearch.feature:29)\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous1577604709625673062webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8860)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous1577604709625673062webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8869)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous1577604709625673062webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous1577604709625673062webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10836)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous1577604709625673062webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10778)\n"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_submits_search_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cara.Murphey@whitestratus.com",
      "offset": 22
    }
  ],
  "location": "PeopleSearchStepDefs.the_output_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 66959000,
  "status": "passed"
});
formatter.before({
  "duration": 1382805000,
  "status": "passed"
});
formatter.scenario({
  "id": "people-search;cheking-we-are-searing-for-people",
  "tags": [
    {
      "name": "@tags",
      "line": 33
    }
  ],
  "description": "",
  "name": "Cheking we are searing for people",
  "keyword": "Scenario",
  "line": 34,
  "type": "scenario"
});
formatter.step({
  "name": "user is on search page",
  "keyword": "Given ",
  "line": 35
});
formatter.step({
  "name": "people scope is checked",
  "keyword": "And ",
  "line": 36
});
formatter.step({
  "name": "user enters \"a\" in search box",
  "keyword": "When ",
  "line": 37
});
formatter.step({
  "name": "user submits search request",
  "keyword": "And ",
  "line": 38
});
formatter.step({
  "name": "we should see Users first name, last name, and email",
  "keyword": "Then ",
  "line": 39
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_is_on_search_page()"
});
formatter.result({
  "duration": 1209813000,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSearchStepDefs.people_scope_is_checked()"
});
formatter.result({
  "duration": 6324000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"searchType_1\"}\nCommand duration or timeout: 6 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 58e4e4fa-8c22-214e-a06a-bbc862d8bddb\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d27.0.1}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:367)\n\tat org.openqa.selenium.By$ById.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat randstad.test.PeopleSearchStepDefs.people_scope_is_checked(PeopleSearchStepDefs.java:263)\n\tat ✽.And people scope is checked(MySearch.feature:36)\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"id\",\"selector\":\"searchType_1\"}\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous4846709706362034223webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8860)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous4846709706362034223webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8869)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous4846709706362034223webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous4846709706362034223webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10836)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous4846709706362034223webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10778)\n"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 13
    }
  ],
  "location": "PeopleSearchStepDefs.user_enters_in_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_submits_search_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PeopleSearchStepDefs.we_should_see_Users_first_name_last_name_and_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 69039000,
  "status": "passed"
});
formatter.before({
  "duration": 1341037000,
  "status": "passed"
});
formatter.scenario({
  "id": "people-search;toggle-the-direction-of-the-sort",
  "tags": [
    {
      "name": "@tags",
      "line": 41
    }
  ],
  "description": "",
  "name": "toggle the direction of the sort",
  "keyword": "Scenario",
  "line": 42,
  "type": "scenario"
});
formatter.step({
  "name": "user is on search page",
  "keyword": "Given ",
  "line": 43
});
formatter.step({
  "name": "user enters \"ab\" in search box",
  "keyword": "When ",
  "line": 44
});
formatter.step({
  "name": "user submits search request",
  "keyword": "And ",
  "line": 45
});
formatter.step({
  "name": "user clicks on last name to sort",
  "keyword": "And ",
  "line": 46
});
formatter.step({
  "name": "arrow should be \"ngSortButtonDown\"",
  "keyword": "Then ",
  "line": 47
});
formatter.step({
  "name": "user clicks on last name to sort",
  "keyword": "And ",
  "line": 48
});
formatter.step({
  "name": "arrow should be \"ngSortButtonUp\"",
  "keyword": "Then ",
  "line": 49
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_is_on_search_page()"
});
formatter.result({
  "duration": 1269094000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab",
      "offset": 13
    }
  ],
  "location": "PeopleSearchStepDefs.user_enters_in_search_box(String)"
});
formatter.result({
  "duration": 6172000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nCommand duration or timeout: 6 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 5e3f68e2-9f87-c746-b482-238a01442069\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d27.0.1}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:367)\n\tat org.openqa.selenium.By$ById.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat randstad.test.PeopleSearchStepDefs.user_enters_in_search_box(PeopleSearchStepDefs.java:82)\n\tat ✽.When user enters \"ab\" in search box(MySearch.feature:44)\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous4795624467250917276webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8860)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous4795624467250917276webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8869)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous4795624467250917276webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous4795624467250917276webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10836)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous4795624467250917276webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10778)\n"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_submits_search_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_clicks_on_last_name_to_sort()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ngSortButtonDown",
      "offset": 17
    }
  ],
  "location": "PeopleSearchStepDefs.arrow_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_clicks_on_last_name_to_sort()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ngSortButtonUp",
      "offset": 17
    }
  ],
  "location": "PeopleSearchStepDefs.arrow_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 67905000,
  "status": "passed"
});
formatter.uri("PeopleSearch.feature");
formatter.feature({
  "id": "people-tables-search",
  "description": "As a regular employee \nI can search for other employees \nso that I can find their contact information, title, or photo",
  "name": "People Tables search",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 1366127000,
  "status": "passed"
});
formatter.scenario({
  "id": "people-tables-search;search-people-by-valid-name",
  "tags": [
    {
      "name": "@tags",
      "line": 19
    }
  ],
  "description": "",
  "name": "Search people by valid name",
  "keyword": "Scenario",
  "line": 20,
  "type": "scenario",
  "comments": [
    {
      "value": "#\tScenario Outline: Search by valid last name",
      "line": 7
    },
    {
      "value": "#\t\tGiven the input \u003cemployeeLastName\u003e exists in the people directory",
      "line": 8
    },
    {
      "value": "#\t\tWhen it is input",
      "line": 9
    },
    {
      "value": "#\t\tThen the output should be \u003coutputB\u003e",
      "line": 10
    },
    {
      "value": "#\t\tExamples:",
      "line": 12
    },
    {
      "value": "#\t\t|FirstName  | LasttName | Email                           |",
      "line": 13
    },
    {
      "value": "#        | Charles   | Allen     | Charles.Allen@whitestratus.com  |",
      "line": 14
    },
    {
      "value": "#        | Allen     | Martinez  | Allen.Martinez@whitestratus.com |",
      "line": 15
    }
  ]
});
formatter.step({
  "name": "user is on search page",
  "keyword": "Given ",
  "line": 21
});
formatter.step({
  "name": "the following employees exist",
  "keyword": "And ",
  "line": 22,
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email"
      ],
      "line": 23
    },
    {
      "cells": [
        "Charles",
        "Allen",
        "Charles.Allen@whitestratus.com"
      ],
      "line": 24
    },
    {
      "cells": [
        "Allen",
        "Martinez",
        "Allen.Martinez@whitestratus.com"
      ],
      "line": 25
    },
    {
      "cells": [
        "Allen",
        "Riordan",
        "Allen.Riordan@whitestratus.com"
      ],
      "line": 26
    }
  ]
});
formatter.step({
  "name": "user enters \"Allen\" in search box",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "user submits search request",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "the output should be",
  "keyword": "Then ",
  "line": 30,
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email"
      ],
      "line": 31
    },
    {
      "cells": [
        "Charles",
        "Allen",
        "Charles.Allen@whitestratus.com"
      ],
      "line": 32
    },
    {
      "cells": [
        "Allen",
        "Martinez",
        "Allen.Martinez@whitestratus.com"
      ],
      "line": 33
    },
    {
      "cells": [
        "Allen",
        "Riordan",
        "Allen.Riordan@whitestratus.com"
      ],
      "line": 34
    }
  ]
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_is_on_search_page()"
});
formatter.result({
  "duration": 1299391000,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSearchStepDefs.the_following_employees_exist(User\u003e)"
});
formatter.result({
  "duration": 15200000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Allen",
      "offset": 13
    }
  ],
  "location": "PeopleSearchStepDefs.user_enters_in_search_box(String)"
});
formatter.result({
  "duration": 5513000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nCommand duration or timeout: 5 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: d8699047-4f04-244b-b8c5-24f87228ddfe\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d27.0.1}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:367)\n\tat org.openqa.selenium.By$ById.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat randstad.test.PeopleSearchStepDefs.user_enters_in_search_box(PeopleSearchStepDefs.java:82)\n\tat ✽.And user enters \"Allen\" in search box(PeopleSearch.feature:28)\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous662739373601478673webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8860)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous662739373601478673webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8869)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous662739373601478673webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous662739373601478673webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10836)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous662739373601478673webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10778)\n"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_submits_search_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PeopleSearchStepDefs.the_output_should_be(User\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 68092000,
  "status": "passed"
});
formatter.before({
  "duration": 1382808000,
  "status": "passed"
});
formatter.scenario({
  "id": "people-tables-search;search-people-by-two-letters",
  "tags": [
    {
      "name": "@tags",
      "line": 36
    }
  ],
  "description": "",
  "name": "Search people by two letters",
  "keyword": "Scenario",
  "line": 37,
  "type": "scenario"
});
formatter.step({
  "name": "user is on search page",
  "keyword": "Given ",
  "line": 38
});
formatter.step({
  "name": "the following employees exist",
  "keyword": "And ",
  "line": 39,
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email"
      ],
      "line": 40
    },
    {
      "cells": [
        "Manuel",
        "Ab",
        "Manuel.Ab@whitestratus.com"
      ],
      "line": 41
    },
    {
      "cells": [
        "Jacob",
        "Abc",
        "Jacob.Abc@whitestratus.com"
      ],
      "line": 42
    },
    {
      "cells": [
        "John",
        "Abcd",
        "John.Abcd@whitestratus.com"
      ],
      "line": 43
    },
    {
      "cells": [
        "Calvin",
        "Abcde",
        "Calvin.Abcde@whitestratus.com"
      ],
      "line": 44
    },
    {
      "cells": [
        "David",
        "Abcdef",
        "David.Abcdef@whitestratus.com"
      ],
      "line": 45
    },
    {
      "cells": [
        "Earl",
        "Abcdefg",
        "Earl.Abcdefg@whitestratus.com"
      ],
      "line": 46
    },
    {
      "cells": [
        "Barbara",
        "Abcdefgh",
        "Barbara.Abcdefgh@whitestratus.com"
      ],
      "line": 47
    },
    {
      "cells": [
        "Filip",
        "Abcdefghi",
        "Filip.Abcdefghi@whitestratus.com"
      ],
      "line": 48
    },
    {
      "cells": [
        "Patrick",
        "Abcdefghij",
        "Patrick.Abcdefghij@whitestratus.com"
      ],
      "line": 49
    },
    {
      "cells": [
        "Ana",
        "Abdullah",
        "Ana.Abdullah@whitestratus.com"
      ],
      "line": 50
    },
    {
      "cells": [
        "Ruby",
        "Abercrombie",
        "Ruby.Abercrombie@whitestratus.com"
      ],
      "line": 51
    },
    {
      "cells": [
        "Anita",
        "Abeyta",
        "Anita.Abeyta@whitestratus.com"
      ],
      "line": 52
    },
    {
      "cells": [
        "Juanita",
        "Ables",
        "Juanita.Ables@whitestratus.com"
      ],
      "line": 53
    },
    {
      "cells": [
        "Stacy",
        "Abram",
        "Stacy.Abram@whitestratus.com"
      ],
      "line": 54
    },
    {
      "cells": [
        "Emma",
        "Abramson",
        "Emma.Abramson@whitestratus.com"
      ],
      "line": 55
    },
    {
      "cells": [
        "Abraham",
        "Cotten",
        "Abraham.Cotten@whitestratus.com"
      ],
      "line": 56
    },
    {
      "cells": [
        "Abel",
        "Levasseur",
        "Abel.Levasseur@whitestratus.com"
      ],
      "line": 57
    },
    {
      "cells": [
        "Abigail",
        "Peden",
        "Abigail.Peden@whitestratus.com"
      ],
      "line": 58
    }
  ]
});
formatter.step({
  "name": "user enters \"ab\" in search box",
  "keyword": "And ",
  "line": 59
});
formatter.step({
  "name": "user submits search request",
  "keyword": "When ",
  "line": 60
});
formatter.step({
  "name": "the output should be",
  "keyword": "Then ",
  "line": 61,
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email"
      ],
      "line": 62
    },
    {
      "cells": [
        "Manuel",
        "Ab",
        "Manuel.Ab@whitestratus.com"
      ],
      "line": 63
    },
    {
      "cells": [
        "Jacob",
        "Abc",
        "Jacob.Abc@whitestratus.com"
      ],
      "line": 64
    },
    {
      "cells": [
        "John",
        "Abcd",
        "John.Abcd@whitestratus.com"
      ],
      "line": 65
    },
    {
      "cells": [
        "Calvin",
        "Abcde",
        "Calvin.Abcde@whitestratus.com"
      ],
      "line": 66
    },
    {
      "cells": [
        "David",
        "Abcdef",
        "David.Abcdef@whitestratus.com"
      ],
      "line": 67
    },
    {
      "cells": [
        "Earl",
        "Abcdefg",
        "Earl.Abcdefg@whitestratus.com"
      ],
      "line": 68
    },
    {
      "cells": [
        "Barbara",
        "Abcdefgh",
        "Barbara.Abcdefgh@whitestratus.com"
      ],
      "line": 69
    },
    {
      "cells": [
        "Filip",
        "Abcdefghi",
        "Filip.Abcdefghi@whitestratus.com"
      ],
      "line": 70
    },
    {
      "cells": [
        "Patrick",
        "Abcdefghij",
        "Patrick.Abcdefghij@whitestratus.com"
      ],
      "line": 71
    },
    {
      "cells": [
        "Ana",
        "Abdullah",
        "Ana.Abdullah@whitestratus.com"
      ],
      "line": 72
    },
    {
      "cells": [
        "Ruby",
        "Abercrombie",
        "Ruby.Abercrombie@whitestratus.com"
      ],
      "line": 73
    },
    {
      "cells": [
        "Anita",
        "Abeyta",
        "Anita.Abeyta@whitestratus.com"
      ],
      "line": 74
    },
    {
      "cells": [
        "Juanita",
        "Ables",
        "Juanita.Ables@whitestratus.com"
      ],
      "line": 75
    },
    {
      "cells": [
        "Stacy",
        "Abram",
        "Stacy.Abram@whitestratus.com"
      ],
      "line": 76
    },
    {
      "cells": [
        "Emma",
        "Abramson",
        "Emma.Abramson@whitestratus.com"
      ],
      "line": 77
    },
    {
      "cells": [
        "Abraham",
        "Cotten",
        "Abraham.Cotten@whitestratus.com"
      ],
      "line": 78
    },
    {
      "cells": [
        "Abel",
        "Levasseur",
        "Abel.Levasseur@whitestratus.com"
      ],
      "line": 79
    },
    {
      "cells": [
        "Abigail",
        "Peden",
        "Abigail.Peden@whitestratus.com"
      ],
      "line": 80
    }
  ]
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_is_on_search_page()"
});
formatter.result({
  "duration": 1362182000,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSearchStepDefs.the_following_employees_exist(User\u003e)"
});
formatter.result({
  "duration": 4669000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab",
      "offset": 13
    }
  ],
  "location": "PeopleSearchStepDefs.user_enters_in_search_box(String)"
});
formatter.result({
  "duration": 10294000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nCommand duration or timeout: 9 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 3ec70f14-d9be-5746-82d4-8b6d118f22f1\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d27.0.1}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:367)\n\tat org.openqa.selenium.By$ById.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat randstad.test.PeopleSearchStepDefs.user_enters_in_search_box(PeopleSearchStepDefs.java:82)\n\tat ✽.And user enters \"ab\" in search box(PeopleSearch.feature:59)\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5887333651460646073webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8860)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5887333651460646073webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8869)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5887333651460646073webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5887333651460646073webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10836)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5887333651460646073webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10778)\n"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_submits_search_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PeopleSearchStepDefs.the_output_should_be(User\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 69564000,
  "status": "passed"
});
formatter.before({
  "duration": 1375918000,
  "status": "passed"
});
formatter.scenario({
  "id": "people-tables-search;sorting-users-by-last-name",
  "tags": [
    {
      "name": "@tags",
      "line": 83
    }
  ],
  "description": "",
  "name": "Sorting users by last name",
  "keyword": "Scenario",
  "line": 84,
  "type": "scenario"
});
formatter.step({
  "name": "user is on search page",
  "keyword": "Given ",
  "line": 85
});
formatter.step({
  "name": "the following employees exist",
  "keyword": "And ",
  "line": 86,
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email"
      ],
      "line": 87
    },
    {
      "cells": [
        "Manuel",
        "Ab",
        "Manuel.Ab@whitestratus.com"
      ],
      "line": 88
    },
    {
      "cells": [
        "Jacob",
        "Abc",
        "Jacob.Abc@whitestratus.com"
      ],
      "line": 89
    },
    {
      "cells": [
        "John",
        "Abcd",
        "John.Abcd@whitestratus.com"
      ],
      "line": 90
    },
    {
      "cells": [
        "Calvin",
        "Abcde",
        "Calvin.Abcde@whitestratus.com"
      ],
      "line": 91
    },
    {
      "cells": [
        "David",
        "Abcdef",
        "David.Abcdef@whitestratus.com"
      ],
      "line": 92
    },
    {
      "cells": [
        "Earl",
        "Abcdefg",
        "Earl.Abcdefg@whitestratus.com"
      ],
      "line": 93
    },
    {
      "cells": [
        "Barbara",
        "Abcdefgh",
        "Barbara.Abcdefgh@whitestratus.com"
      ],
      "line": 94
    },
    {
      "cells": [
        "Filip",
        "Abcdefghi",
        "Filip.Abcdefghi@whitestratus.com"
      ],
      "line": 95
    },
    {
      "cells": [
        "Patrick",
        "Abcdefghij",
        "Patrick.Abcdefghij@whitestratus.com"
      ],
      "line": 96
    },
    {
      "cells": [
        "Ana",
        "Abdullah",
        "Ana.Abdullah@whitestratus.com"
      ],
      "line": 97
    },
    {
      "cells": [
        "Ruby",
        "Abercrombie",
        "Ruby.Abercrombie@whitestratus.com"
      ],
      "line": 98
    },
    {
      "cells": [
        "Anita",
        "Abeyta",
        "Anita.Abeyta@whitestratus.com"
      ],
      "line": 99
    },
    {
      "cells": [
        "Juanita",
        "Ables",
        "Juanita.Ables@whitestratus.com"
      ],
      "line": 100
    },
    {
      "cells": [
        "Stacy",
        "Abram",
        "Stacy.Abram@whitestratus.com"
      ],
      "line": 101
    },
    {
      "cells": [
        "Emma",
        "Abramson",
        "Emma.Abramson@whitestratus.com"
      ],
      "line": 102
    },
    {
      "cells": [
        "Abraham",
        "Cotten",
        "Abraham.Cotten@whitestratus.com"
      ],
      "line": 103
    },
    {
      "cells": [
        "Abel",
        "Levasseur",
        "Abel.Levasseur@whitestratus.com"
      ],
      "line": 104
    },
    {
      "cells": [
        "Abigail",
        "Peden",
        "Abigail.Peden@whitestratus.com"
      ],
      "line": 105
    }
  ]
});
formatter.step({
  "name": "user enters \"ab\" in search box",
  "keyword": "When ",
  "line": 106
});
formatter.step({
  "name": "user submits search request",
  "keyword": "And ",
  "line": 107
});
formatter.step({
  "name": "user clicks on last name to sort",
  "keyword": "And ",
  "line": 108
});
formatter.step({
  "name": "the output should be",
  "keyword": "Then ",
  "line": 109,
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email"
      ],
      "line": 110
    },
    {
      "cells": [
        "Abigail",
        "Peden",
        "Abigail.Peden@whitestratus.com"
      ],
      "line": 111
    },
    {
      "cells": [
        "Abel",
        "Levasseur",
        "Abel.Levasseur@whitestratus.com"
      ],
      "line": 112
    },
    {
      "cells": [
        "Abraham",
        "Cotten",
        "Abraham.Cotten@whitestratus.com"
      ],
      "line": 113
    },
    {
      "cells": [
        "Emma",
        "Abramson",
        "Emma.Abramson@whitestratus.com"
      ],
      "line": 114
    },
    {
      "cells": [
        "Stacy",
        "Abram",
        "Stacy.Abram@whitestratus.com"
      ],
      "line": 115
    },
    {
      "cells": [
        "Juanita",
        "Ables",
        "Juanita.Ables@whitestratus.com"
      ],
      "line": 116
    },
    {
      "cells": [
        "Anita",
        "Abeyta",
        "Anita.Abeyta@whitestratus.com"
      ],
      "line": 117
    },
    {
      "cells": [
        "Ruby",
        "Abercrombie",
        "Ruby.Abercrombie@whitestratus.com"
      ],
      "line": 118
    },
    {
      "cells": [
        "Ana",
        "Abdullah",
        "Ana.Abdullah@whitestratus.com"
      ],
      "line": 119
    },
    {
      "cells": [
        "Patrick",
        "Abcdefghij",
        "Patrick.Abcdefghij@whitestratus.com"
      ],
      "line": 120
    },
    {
      "cells": [
        "Filip",
        "Abcdefghi",
        "Filip.Abcdefghi@whitestratus.com"
      ],
      "line": 121
    },
    {
      "cells": [
        "Barbara",
        "Abcdefgh",
        "Barbara.Abcdefgh@whitestratus.com"
      ],
      "line": 122
    },
    {
      "cells": [
        "Earl",
        "Abcdefg",
        "Earl.Abcdefg@whitestratus.com"
      ],
      "line": 123
    },
    {
      "cells": [
        "David",
        "Abcdef",
        "David.Abcdef@whitestratus.com"
      ],
      "line": 124
    },
    {
      "cells": [
        "Calvin",
        "Abcde",
        "Calvin.Abcde@whitestratus.com"
      ],
      "line": 125
    },
    {
      "cells": [
        "John",
        "Abcd",
        "John.Abcd@whitestratus.com"
      ],
      "line": 126
    },
    {
      "cells": [
        "Jacob",
        "Abc",
        "Jacob.Abc@whitestratus.com"
      ],
      "line": 127
    },
    {
      "cells": [
        "Manuel",
        "Ab",
        "Manuel.Ab@whitestratus.com"
      ],
      "line": 128
    }
  ]
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_is_on_search_page()"
});
formatter.result({
  "duration": 1312120000,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSearchStepDefs.the_following_employees_exist(User\u003e)"
});
formatter.result({
  "duration": 4476000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab",
      "offset": 13
    }
  ],
  "location": "PeopleSearchStepDefs.user_enters_in_search_box(String)"
});
formatter.result({
  "duration": 11213000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nCommand duration or timeout: 10 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 259fc64b-2ac2-2b47-b4c4-e60d8d150052\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d27.0.1}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:367)\n\tat org.openqa.selenium.By$ById.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat randstad.test.PeopleSearchStepDefs.user_enters_in_search_box(PeopleSearchStepDefs.java:82)\n\tat ✽.When user enters \"ab\" in search box(PeopleSearch.feature:106)\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5779553738097510912webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8860)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5779553738097510912webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8869)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5779553738097510912webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5779553738097510912webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10836)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous5779553738097510912webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10778)\n"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_submits_search_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_clicks_on_last_name_to_sort()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PeopleSearchStepDefs.the_output_should_be(User\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 66622000,
  "status": "passed"
});
formatter.before({
  "duration": 1368266000,
  "status": "passed"
});
formatter.scenario({
  "id": "people-tables-search;sorting-users-by-first-name-decending-order",
  "tags": [
    {
      "name": "@tags",
      "line": 130
    }
  ],
  "description": "",
  "name": "Sorting users by First name decending order",
  "keyword": "Scenario",
  "line": 131,
  "type": "scenario"
});
formatter.step({
  "name": "user is on search page",
  "keyword": "Given ",
  "line": 132
});
formatter.step({
  "name": "the following employees exist",
  "keyword": "And ",
  "line": 133,
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email"
      ],
      "line": 134
    },
    {
      "cells": [
        "Manuel",
        "Ab",
        "Manuel.Ab@whitestratus.com"
      ],
      "line": 135
    },
    {
      "cells": [
        "Jacob",
        "Abc",
        "Jacob.Abc@whitestratus.com"
      ],
      "line": 136
    },
    {
      "cells": [
        "John",
        "Abcd",
        "John.Abcd@whitestratus.com"
      ],
      "line": 137
    },
    {
      "cells": [
        "Calvin",
        "Abcde",
        "Calvin.Abcde@whitestratus.com"
      ],
      "line": 138
    },
    {
      "cells": [
        "David",
        "Abcdef",
        "David.Abcdef@whitestratus.com"
      ],
      "line": 139
    },
    {
      "cells": [
        "Earl",
        "Abcdefg",
        "Earl.Abcdefg@whitestratus.com"
      ],
      "line": 140
    },
    {
      "cells": [
        "Barbara",
        "Abcdefgh",
        "Barbara.Abcdefgh@whitestratus.com"
      ],
      "line": 141
    },
    {
      "cells": [
        "Filip",
        "Abcdefghi",
        "Filip.Abcdefghi@whitestratus.com"
      ],
      "line": 142
    },
    {
      "cells": [
        "Patrick",
        "Abcdefghij",
        "Patrick.Abcdefghij@whitestratus.com"
      ],
      "line": 143
    },
    {
      "cells": [
        "Ana",
        "Abdullah",
        "Ana.Abdullah@whitestratus.com"
      ],
      "line": 144
    },
    {
      "cells": [
        "Ruby",
        "Abercrombie",
        "Ruby.Abercrombie@whitestratus.com"
      ],
      "line": 145
    },
    {
      "cells": [
        "Anita",
        "Abeyta",
        "Anita.Abeyta@whitestratus.com"
      ],
      "line": 146
    },
    {
      "cells": [
        "Juanita",
        "Ables",
        "Juanita.Ables@whitestratus.com"
      ],
      "line": 147
    },
    {
      "cells": [
        "Stacy",
        "Abram",
        "Stacy.Abram@whitestratus.com"
      ],
      "line": 148
    },
    {
      "cells": [
        "Emma",
        "Abramson",
        "Emma.Abramson@whitestratus.com"
      ],
      "line": 149
    },
    {
      "cells": [
        "Abraham",
        "Cotten",
        "Abraham.Cotten@whitestratus.com"
      ],
      "line": 150
    },
    {
      "cells": [
        "Abel",
        "Levasseur",
        "Abel.Levasseur@whitestratus.com"
      ],
      "line": 151
    },
    {
      "cells": [
        "Abigail",
        "Peden",
        "Abigail.Peden@whitestratus.com"
      ],
      "line": 152
    }
  ]
});
formatter.step({
  "name": "user enters \"ab\" in search box",
  "keyword": "When ",
  "line": 153
});
formatter.step({
  "name": "user submits search request",
  "keyword": "And ",
  "line": 154
});
formatter.step({
  "name": "user clicks on First name to sort",
  "keyword": "And ",
  "line": 155
});
formatter.step({
  "name": "the output should be",
  "keyword": "Then ",
  "line": 156,
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email"
      ],
      "line": 157
    },
    {
      "cells": [
        "Stacy",
        "Abram",
        "Stacy.Abram@whitestratus.com"
      ],
      "line": 158
    },
    {
      "cells": [
        "Ruby",
        "Abercrombie",
        "Ruby.Abercrombie@whitestratus.com"
      ],
      "line": 159
    },
    {
      "cells": [
        "Patrick",
        "Abcdefghij",
        "Patrick.Abcdefghij@whitestratus.com"
      ],
      "line": 160
    },
    {
      "cells": [
        "Manuel",
        "Ab",
        "Manuel.Ab@whitestratus.com"
      ],
      "line": 161
    },
    {
      "cells": [
        "Juanita",
        "Ables",
        "Juanita.Ables@whitestratus.com"
      ],
      "line": 162
    },
    {
      "cells": [
        "John",
        "Abcd",
        "John.Abcd@whitestratus.com"
      ],
      "line": 163
    },
    {
      "cells": [
        "Jacob",
        "Abc",
        "Jacob.Abc@whitestratus.com"
      ],
      "line": 164
    },
    {
      "cells": [
        "Filip",
        "Abcdefghi",
        "Filip.Abcdefghi@whitestratus.com"
      ],
      "line": 165
    },
    {
      "cells": [
        "Emma",
        "Abramson",
        "Emma.Abramson@whitestratus.com"
      ],
      "line": 166
    },
    {
      "cells": [
        "Earl",
        "Abcdefg",
        "Earl.Abcdefg@whitestratus.com"
      ],
      "line": 167
    },
    {
      "cells": [
        "David",
        "Abcdef",
        "David.Abcdef@whitestratus.com"
      ],
      "line": 168
    },
    {
      "cells": [
        "Calvin",
        "Abcde",
        "Calvin.Abcde@whitestratus.com"
      ],
      "line": 169
    },
    {
      "cells": [
        "Barbara",
        "Abcdefgh",
        "Barbara.Abcdefgh@whitestratus.com"
      ],
      "line": 170
    },
    {
      "cells": [
        "Anita",
        "Abeyta",
        "Anita.Abeyta@whitestratus.com"
      ],
      "line": 171
    },
    {
      "cells": [
        "Ana",
        "Abdullah",
        "Ana.Abdullah@whitestratus.com"
      ],
      "line": 172
    },
    {
      "cells": [
        "Abraham",
        "Cotten",
        "Abraham.Cotten@whitestratus.com"
      ],
      "line": 173
    },
    {
      "cells": [
        "Abigail",
        "Peden",
        "Abigail.Peden@whitestratus.com"
      ],
      "line": 174
    },
    {
      "cells": [
        "Abel",
        "Levasseur",
        "Abel.Levasseur@whitestratus.com"
      ],
      "line": 175
    }
  ]
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_is_on_search_page()"
});
formatter.result({
  "duration": 1394452000,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSearchStepDefs.the_following_employees_exist(User\u003e)"
});
formatter.result({
  "duration": 4724000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab",
      "offset": 13
    }
  ],
  "location": "PeopleSearchStepDefs.user_enters_in_search_box(String)"
});
formatter.result({
  "duration": 10390000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nCommand duration or timeout: 9 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 295c93d6-f4c6-164d-92ad-a0a74680bd78\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d27.0.1}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:367)\n\tat org.openqa.selenium.By$ById.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat randstad.test.PeopleSearchStepDefs.user_enters_in_search_box(PeopleSearchStepDefs.java:82)\n\tat ✽.When user enters \"ab\" in search box(PeopleSearch.feature:153)\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous6903718905213356334webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8860)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous6903718905213356334webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8869)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous6903718905213356334webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous6903718905213356334webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10836)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous6903718905213356334webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10778)\n"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_submits_search_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_clicks_on_First_name_to_sort()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PeopleSearchStepDefs.the_output_should_be(User\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 65376000,
  "status": "passed"
});
formatter.before({
  "duration": 1366471000,
  "status": "passed"
});
formatter.scenario({
  "id": "people-tables-search;sorting-users-by-email-decending-order",
  "tags": [
    {
      "name": "@tags",
      "line": 178
    }
  ],
  "description": "",
  "name": "Sorting users by Email decending order",
  "keyword": "Scenario",
  "line": 179,
  "type": "scenario"
});
formatter.step({
  "name": "user is on search page",
  "keyword": "Given ",
  "line": 180
});
formatter.step({
  "name": "the following employees exist",
  "keyword": "And ",
  "line": 181,
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email"
      ],
      "line": 182
    },
    {
      "cells": [
        "Manuel",
        "Ab",
        "Manuel.Ab@whitestratus.com"
      ],
      "line": 183
    },
    {
      "cells": [
        "Jacob",
        "Abc",
        "Jacob.Abc@whitestratus.com"
      ],
      "line": 184
    },
    {
      "cells": [
        "John",
        "Abcd",
        "John.Abcd@whitestratus.com"
      ],
      "line": 185
    },
    {
      "cells": [
        "Calvin",
        "Abcde",
        "Calvin.Abcde@whitestratus.com"
      ],
      "line": 186
    },
    {
      "cells": [
        "David",
        "Abcdef",
        "David.Abcdef@whitestratus.com"
      ],
      "line": 187
    },
    {
      "cells": [
        "Earl",
        "Abcdefg",
        "Earl.Abcdefg@whitestratus.com"
      ],
      "line": 188
    },
    {
      "cells": [
        "Barbara",
        "Abcdefgh",
        "Barbara.Abcdefgh@whitestratus.com"
      ],
      "line": 189
    },
    {
      "cells": [
        "Filip",
        "Abcdefghi",
        "Filip.Abcdefghi@whitestratus.com"
      ],
      "line": 190
    },
    {
      "cells": [
        "Patrick",
        "Abcdefghij",
        "Patrick.Abcdefghij@whitestratus.com"
      ],
      "line": 191
    },
    {
      "cells": [
        "Ana",
        "Abdullah",
        "Ana.Abdullah@whitestratus.com"
      ],
      "line": 192
    },
    {
      "cells": [
        "Ruby",
        "Abercrombie",
        "Ruby.Abercrombie@whitestratus.com"
      ],
      "line": 193
    },
    {
      "cells": [
        "Anita",
        "Abeyta",
        "Anita.Abeyta@whitestratus.com"
      ],
      "line": 194
    },
    {
      "cells": [
        "Juanita",
        "Ables",
        "Juanita.Ables@whitestratus.com"
      ],
      "line": 195
    },
    {
      "cells": [
        "Stacy",
        "Abram",
        "Stacy.Abram@whitestratus.com"
      ],
      "line": 196
    },
    {
      "cells": [
        "Emma",
        "Abramson",
        "Emma.Abramson@whitestratus.com"
      ],
      "line": 197
    },
    {
      "cells": [
        "Abraham",
        "Cotten",
        "Abraham.Cotten@whitestratus.com"
      ],
      "line": 198
    },
    {
      "cells": [
        "Abel",
        "Levasseur",
        "Abel.Levasseur@whitestratus.com"
      ],
      "line": 199
    },
    {
      "cells": [
        "Abigail",
        "Peden",
        "Abigail.Peden@whitestratus.com"
      ],
      "line": 200
    }
  ]
});
formatter.step({
  "name": "user enters \"ab\" in search box",
  "keyword": "When ",
  "line": 201
});
formatter.step({
  "name": "user submits search request",
  "keyword": "And ",
  "line": 202
});
formatter.step({
  "name": "user clicks on Email name to sort",
  "keyword": "And ",
  "line": 203
});
formatter.step({
  "name": "the output should be",
  "keyword": "Then ",
  "line": 204,
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email"
      ],
      "line": 205
    },
    {
      "cells": [
        "Stacy",
        "Abram",
        "Stacy.Abram@whitestratus.com"
      ],
      "line": 206
    },
    {
      "cells": [
        "Ruby",
        "Abercrombie",
        "Ruby.Abercrombie@whitestratus.com"
      ],
      "line": 207
    },
    {
      "cells": [
        "Patrick",
        "Abcdefghij",
        "Patrick.Abcdefghij@whitestratus.com"
      ],
      "line": 208
    },
    {
      "cells": [
        "Manuel",
        "Ab",
        "Manuel.Ab@whitestratus.com"
      ],
      "line": 209
    },
    {
      "cells": [
        "Juanita",
        "Ables",
        "Juanita.Ables@whitestratus.com"
      ],
      "line": 210
    },
    {
      "cells": [
        "John",
        "Abcd",
        "John.Abcd@whitestratus.com"
      ],
      "line": 211
    },
    {
      "cells": [
        "Jacob",
        "Abc",
        "Jacob.Abc@whitestratus.com"
      ],
      "line": 212
    },
    {
      "cells": [
        "Filip",
        "Abcdefghi",
        "Filip.Abcdefghi@whitestratus.com"
      ],
      "line": 213
    },
    {
      "cells": [
        "Emma",
        "Abramson",
        "Emma.Abramson@whitestratus.com"
      ],
      "line": 214
    },
    {
      "cells": [
        "Earl",
        "Abcdefg",
        "Earl.Abcdefg@whitestratus.com"
      ],
      "line": 215
    },
    {
      "cells": [
        "David",
        "Abcdef",
        "David.Abcdef@whitestratus.com"
      ],
      "line": 216
    },
    {
      "cells": [
        "Calvin",
        "Abcde",
        "Calvin.Abcde@whitestratus.com"
      ],
      "line": 217
    },
    {
      "cells": [
        "Barbara",
        "Abcdefgh",
        "Barbara.Abcdefgh@whitestratus.com"
      ],
      "line": 218
    },
    {
      "cells": [
        "Anita",
        "Abeyta",
        "Anita.Abeyta@whitestratus.com"
      ],
      "line": 219
    },
    {
      "cells": [
        "Ana",
        "Abdullah",
        "Ana.Abdullah@whitestratus.com"
      ],
      "line": 220
    },
    {
      "cells": [
        "Abraham",
        "Cotten",
        "Abraham.Cotten@whitestratus.com"
      ],
      "line": 221
    },
    {
      "cells": [
        "Abigail",
        "Peden",
        "Abigail.Peden@whitestratus.com"
      ],
      "line": 222
    },
    {
      "cells": [
        "Abel",
        "Levasseur",
        "Abel.Levasseur@whitestratus.com"
      ],
      "line": 223
    }
  ]
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_is_on_search_page()"
});
formatter.result({
  "duration": 1747409000,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSearchStepDefs.the_following_employees_exist(User\u003e)"
});
formatter.result({
  "duration": 4169000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab",
      "offset": 13
    }
  ],
  "location": "PeopleSearchStepDefs.user_enters_in_search_box(String)"
});
formatter.result({
  "duration": 9974000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nCommand duration or timeout: 10 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: b3e6f091-290d-8147-9d21-b6409b8534dc\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d27.0.1}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:367)\n\tat org.openqa.selenium.By$ById.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat randstad.test.PeopleSearchStepDefs.user_enters_in_search_box(PeopleSearchStepDefs.java:82)\n\tat ✽.When user enters \"ab\" in search box(PeopleSearch.feature:201)\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"id\",\"selector\":\"home_search_criteria\"}\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027gersons-mbp.home\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous7641605611357346405webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8860)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous7641605611357346405webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8869)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous7641605611357346405webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous7641605611357346405webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10836)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/g7/p45m7_gj4v3g_jdxyr8x1nbh0000gn/T/anonymous7641605611357346405webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10778)\n"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_submits_search_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PeopleSearchStepDefs.user_clicks_on_Email_name_to_sort()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PeopleSearchStepDefs.the_output_should_be(User\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 66352000,
  "status": "passed"
});
});